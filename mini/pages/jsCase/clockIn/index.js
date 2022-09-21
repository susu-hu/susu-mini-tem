// pages/clockIn/index.js
import qqMapSdk from '../util/qqmap.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_time: '',
    current_address: '',
    status: 0, //0---》上班未打卡 1----》上班已打卡 
    now_time_stop: '', //已打卡时间
    imgUrl: '', //打卡照片
  },


  onLoad: function (options) {
    this.getCurrentTime();
    this.getLocation();
    this.setData({
      now_time: this.getTime()
    })
  },


  onShow: function () {

  },
  // 上班打卡
  clockInStart() {
    if (!this.data.imgUrl) {
      return wx.showToast({
        title: '尚未上传打卡照',
        icon: 'error'
      })
    }
    if (!this.data.current_address) {
      return wx.showToast({
        title: '未获取当前定位',
        icon: 'error'
      })
    }
    wx.vibrateLong(); //使手机震动400ms
    this.setData({
      status: 1, //上班已打卡
      now_time_stop: this.data.now_time,
    }, wx.showToast({
      title: '打卡成功',
      icon: 'none'
    }))
  },

  getCurrentTime: function () {
    var time = setInterval(() => {
      this.setData({
        now_time: this.getTime()
      })
    }, 1000)
  },
  getTime() {
    let dateTime = '';
    let hh = new Date().getHours()
    let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
      new Date().getMinutes()
    let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :
      new Date().getSeconds()
    dateTime = hh + ':' + mf + ':' + ss;
    return dateTime;
  },

  // 获取当前的地址
  getUserAuth: function () {
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: 'scope.userLocation'
      }).then(() => {
        resolve()
      }).catch(() => {
        let that = this;
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
              wx.showModal({
                title: '请求授权当前位置',
                content: '需要获取您的地理位置，请确认授权',
                success: function (res) {
                  if (res.cancel) {
                    wx.showToast({
                      title: '拒绝授权',
                      icon: 'none',
                      duration: 1000
                    })
                  } else if (res.confirm) {
                    wx.openSetting({
                      success: function (dataAu) {
                        if (dataAu.authSetting["scope.userLocation"] == true) {
                          //再次授权，调用wx.getLocation的API
                          that.getLocation();
                        } else {
                          wx.showToast({
                            title: '授权失败',
                            icon: 'none',
                            duration: 1000
                          })
                        }
                      }
                    })
                  }
                }
              })
            } else if (res.authSetting['scope.userLocation'] == undefined) {
              that.getLocation();
            } else {
              that.getLocation();
            }
          }
        })
      })
    })
  },

  getLocation: function () {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('哈时代峰峻艾师傅的数据恢复就收到回复是的')
        let {
          longitude,
          latitude
        } = res
        let locations = latitude + ',' + longitude
        // 小程序坐标转地图坐标
        this.translate(locations).then(res => {
          if (res.locations) {
            latitude = res.locations[0].lat
            longitude = res.locations[0].lng
          }
        })
        qqMapSdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: (res) => {
            let current_address = res.result.address + res.result.formatted_addresses.recommend;
            this.setData({
              current_address,
            })
            console.log(res)
          },
          fail: function (err) {
            console.log(err)
          }
        })
      },
      fail: (res) => {
        console.log(res)
        this.getUserAuth()
        wx.showToast({
          title: '获取定位失败，请打开手机定位，重新进入！',
          icon: 'none'
        });
      }
    })
  },
  // 刷新
  refreshAdd() {
    this.getLocation()
  },
  // 地址转换
  translate(locations) {
    return new Promise((resolve, reject) => {
      let url = 'https://apis.map.qq.com/ws/coord/v1/translate'
      wx.request({
        url,
        method: 'GET',
        data: {
          locations,
          type: 5, //[默认]腾讯、google、高德坐标
          key: 'CREBZ-B7PKX-GL44O-7ITDB-7UFU7-OLFDV'
        },
        success: res => resolve(res.data),
        fail: (err) => reject(err),
      })
    })
  },
  chooseImg() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths[0];
        this.setData({
          imgUrl: tempFilePaths
        })
      },
    })
  },

  // 删除图片
  deleteImg: function (e) {
    this.setData({
      imgUrl: ''
    });
  },
  // 预览图片
  previewImg: function (e) {
    wx.previewImage({
      current: this.data.imgUrl, // 当前显示图片的http链接
      urls: [this.data.imgUrl] // 需要预览的图片http链接列表
    })
  },
})
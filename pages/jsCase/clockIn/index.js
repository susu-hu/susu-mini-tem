// pages/clockIn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_time: '',
    current_address: '江苏省XXXXXXXX-xxxxxxx-嘻嘻嘻嘻嘻嘻嘻',
    status: 0, //0---》上班未打卡 1----》上班已打卡 
    now_time_stop: '', //已打卡时间
    imgUrl: '', //打卡照片
  },


  onLoad: function (options) {
    this.getCurrentTime();
    this.getUserLocation();
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
    wx.vibrateLong(); //使手机震动400ms
    this.setData({
      status: 1, //上班已打卡
      now_time_stop: this.data.now_time,
    },wx.showToast({
      title: '打卡成功',
      icon:'none'
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
  getUserLocation: function () {
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
  },
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude;
        //  调用腾讯地图sdk获取到当前的地址
      }
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
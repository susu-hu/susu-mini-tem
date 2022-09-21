// pages/wxCase/customSheet/index.js
import util from '../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_poster: true,
    poster: 'https://i.postimg.cc/k5cyysKQ/123123.png', //海报的url
  },
  showPoster() {
    this.setData({
      show_poster: false
    })
  },
  // 关闭弹框
  closeModal() {
    this.setData({
      show_poster: true,
    })
  },


  onLoad: function (options) {

  },


  onShow: function () {

  },


  onUnload: function () {

  },


  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  },
  //相机授权
  isAuthorize() {
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: 'scope.writePhotosAlbum'
      }).then(() => {
        resolve()
      }).catch(() => {
        wx.getSetting().then(res => {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.showModal({
              title: '是否授权保存到相册',
              content: '请确认授权，否则无法保存到相册',
              success: res => {
                if (res.confirm) {
                  wx.openSetting()
                }
              }
            })
          }
        })
      })
    })
  },
  // 下载图片
  downloadImg() {
    let {
      poster
    } = this.data;
    // 下载文件不支持网络路径，需要先将网络路径转换为
    this.isAuthorize().then(() => {
      wx.getImageInfo({
        src: poster,
        success: (res) => {
          let path = res.path;
          wx.saveImageToPhotosAlbum({
            filePath: path,
            success: (res) => {
              util.toolsFn.toastMsg('保存成功！')
              this.setData({
                show_poster: true
              })
            },
            fail: (res) => {
              util.toolsFn.toastMsg('保存失败')
            }
          })
        },
        fail(res) {
          util.toolsFn.toastMsg('保存失败')
        }
      })
    })
  }
})
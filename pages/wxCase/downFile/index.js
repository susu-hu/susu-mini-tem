// pages/wxCase/downFile/index.js
import { writePhotosAlbum } from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onShow: function () {

  },


  // 下载图片
  downloadImgs() {
    this.clicked = false
    if (this.checkUrl.length === 0) {
      this.clicked = true
      wx.showToast({
        title: '请选择需要保存的图片',
        icon: 'none'
      })
      return
    }
    if (this.checkUrl.length > 9) {
      this.clicked = true
      wx.showToast({
        title: '每次最多只能保存9张图片',
        icon: 'none'
      })
      return
    }
    var _this = this
    // 获取保存到相册权限
    writePhotosAlbum(
      function success() {
        // 调用保存图片promise队列
        _this.queue(_this.checkUrl).then(res => {
          wx.hideLoading()
          wx.showToast({
            title: '下载完成'
          })
          _this.imgList.forEach((item, i) => {
            item.checked = false
          })
          _this.checkUrl = []
          _this.clicked = true
        }).catch(err => {
          _this.checkUrl = []
          _this.clicked = true
          wx.hideLoading()
        })
      },
      function fail() {
        wx.showToast({
          title: '您拒绝了保存到相册',
          icon: 'none'
        })
        _this.clicked = true
      })
  },
  // 队列
  queue(urls) {
    let promise = Promise.resolve()
    urls.forEach((url, index) => {
      promise = promise.then(() => {
        return this.download(url, index)
      })
    })
    return promise
  },
  // 下载
  download(url, index) {
    let length = this.checkUrl.length
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: url,
        success: function (res) {
          var temp = res.tempFilePath
          wx.saveImageToPhotosAlbum({
            filePath: temp,
            success: function (res) {
              wx.showLoading({
                title: '下载中(' + (index + 1) + '/' + length + ')'
              })
              resolve(res)
            },
            fail: function (err) {
              reject(res)
            }
          })
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  },
})
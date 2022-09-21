Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasWidth: 0,
    canvasHeight: 0,
    tempCtx: {},
    oriFile: "cloud://normal-env-ta6-normal-e0924598/frame/",
    frameSrcs: [{ src: 'frame1.png', title: '文艺小清新' }, { src: 'frame2.png', title: 'Happy Birthday' }, { src: 'frame3.png', title: '素描花环' }, { src: 'frame4.png', title: '文艺小清新' }, { src: 'frame5.png', title: '卡通小屋' }, { src: 'frame6.png', title: '爱心相框' }, { src: 'frame7.png', title: '心形云朵' }, { src: 'frame8.png', title: '爱心花环' }, { src: 'frame9.png', title: '拍立得相框' }, { src: 'frame10.png', title: '文艺小清新' }, { src: 'frame11.png', title: '贴纸' }]
  },
  chooseFrame(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 指定只能为压缩图，首先进行一次默认压缩
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        wx.showLoading({
          title: '正在添加相框',
        })
        var tempFilePath = res.tempFilePaths[0]
        wx.cloud.getTempFileURL({
          fileList: [that.data.oriFile + that.data.frameSrcs[index].src],
          success: res => {
            console.log(res.fileList)
            wx.getImageInfo({
              src: res.fileList[0].tempFileURL,
              success: res => {
                var frameData = res
                that.setData({
                  canvasWidth: frameData.width,
                  canvasHeight: frameData.height
                })
                wx.getImageInfo({
                  src: tempFilePath,
                  success: res => {
                    var photoData = res
                    console.log("相框", frameData)
                    console.log("相片", photoData)
                    //计算比例
                    var widthRatio = photoData.width / frameData.width
                    var heightRatio = photoData.height / frameData.height
                    //先画照片
                    if (widthRatio < heightRatio) {
                      that.data.tempCtx.drawImage(photoData.path, 0, 0, photoData.width, that.data.canvasHeight * widthRatio, 0, 0, that.data.canvasWidth, that.data.canvasHeight)
                    } else {
                      that.data.tempCtx.drawImage(photoData.path, 0, 0, that.data.canvasWidth * heightRatio, photoData.height, 0, 0, that.data.canvasWidth, that.data.canvasHeight)
                    }
                    //再画相框
                    that.data.tempCtx.drawImage(frameData.path, 0, 0, frameData.width, frameData.height, 0, 0, that.data.canvasWidth, that.data.canvasHeight)
                    that.data.tempCtx.draw()
                    var timeId = setTimeout(function () {
                      console.log("延时1秒回调")
                      wx.canvasToTempFilePath({
                        canvasId: 'tempCanvas',
                        fileType: "jpg",
                        success: function (res) {
                          wx.hideLoading()
                          console.log(res.tempFilePath)
                          wx.previewImage({
                            urls: [res.tempFilePath],
                          })
                          clearTimeout(timeId)
                        }
                      })
                    }, 1000)
                  }
                })
              }
            })
          },
          fail: console.error
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tempCtx = wx.createCanvasContext('tempCanvas')
    this.setData({
      tempCtx: tempCtx
    })
  }
})

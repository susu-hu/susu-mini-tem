Page({
  data: {
    slidebel: false,//滑动弹窗
    canfile_image: '',//裁剪图片
    canfile_index: '',//图片返回 1 至 3 之间的数
    canfile_x: '',//x返回 60 至 240 之间的数
    canfile_y: '',//y返回 0 至 50 之间的数
    slide_clientX: 0,//移动位置
    slide_status: 0,//0 停止操作   1 触发长按   2 正确   3 错误
  },
  // 弹窗
  visidlisd(e) {
    this.setData({
      slidebel: !this.data.slidebel
    })
    if (this.data.slidebel) {
      this.slide_tap()
    }
  },
  // 画布
  slide_tap(e) {
    var that = this
    that.setData({
      canfile_index: Math.round(Math.random() * 2 + 1),
      canfile_x: Math.round(Math.random() * 180 + 60),
      canfile_y: Math.round(Math.random() * 54),
      canfile_image: ''
    })
    clearTimeout(that.data.timeoutID)
    that.data.timeoutID = setTimeout(function () {
      var context = wx.createCanvasContext('firstCanvas')
      context.width = 300
      context.height = 104
      context.drawImage('/images/slideimage_' + that.data.canfile_index + '.jpg', 0, 0, context.width, context.height)
      context.draw(true, (() => {
        wx.canvasToTempFilePath({
          x: that.data.canfile_x,
          y: that.data.canfile_y,
          width: 50,
          height: 50,
          canvasId: 'firstCanvas',
          success: function (res) {
            that.setData({
              canfile_image: res.tempFilePath
            })
          }
        });
      }))
    }, 300)
  },
  // 滑动开始
  slide_start(e) {
    this.setData({
      slide_status: 1
    })
  },
  // 滑动中
  slide_hmove(e) {
    this.setData({
      slide_clientX: (e.touches[0].clientX - 60) < 1 ? 0 : (e.touches[0].clientX - 60)
    })
  },
  //滑动结束
  slide_chend(e) {
    var that = this
    var cliextX;
    if (that.data.slide_clientX < 1) {
      that.data.slide_status = 0
      return false
    }
    if (that.data.slide_clientX > 240) {
      cliextX = 240
    } else {
      cliextX = that.data.slide_clientX
    }
    if (((that.data.canfile_x + 5) > cliextX) && ((that.data.canfile_x - 5) < cliextX)) {
      that.setData({
        slide_status: 2,
        slide_clientX: that.data.canfile_x,
      })
      setTimeout(function () {
        that.setData({
          slidebel: false,
        })
      }, 1500)
    } else {
      that.setData({
        slide_status: 3,
      })
    }
    setTimeout(function () {
      that.setData({
        slide_status: 0,
        slide_clientX: 0,
      })
    }, 1500)
  },
})

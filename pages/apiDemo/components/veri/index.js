Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sildeBlockCont: {   //接受父组件值
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    canvas_width: 0,
    slidebel: false, //滑动弹窗
    canfile_image: '', //裁剪图片
    canfile_x: '', //被抠方块的水平位置
    canfile_y: '', //被抠方块的垂直位置
    slide_clientX: 0, //移动位置
    slide_status: 0, //0 停止操作   1 触发长按   2 正确   3 错误
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 弹窗
    visidlisd(e) {
      var that = this
      this.setData({
        slidebel: !this.data.slidebel
      })
      if (this.data.slidebel) {
        if (this.data.canvas_width != 0) {
          this.slide_tap()
          return
        }
        wx.nextTick(() => {
          let query = this.createSelectorQuery()
          query.select('#canvas_img').boundingClientRect(function (rect) {
            that.setData({
              canvas_width: rect.width
            })
            that.slide_tap()
          }).exec()
        })
      }
    },
    // 画布
    slide_tap(e) {
      var that = this
      var imgIndex = Math.round(Math.random() * 13 + 1)
      that.setData({
        canfile_x: Math.round(Math.random() * (this.data.canvas_width - 120) + 60),
        canfile_y: Math.round(Math.random() * (this.data.canvas_width * 13 / 28 - 60)),
        canfile_image: ''
      })
      setTimeout(function () {
        var context = wx.createCanvasContext('firstCanvas', that)
        context.width = that.data.canvas_width
        context.height = that.data.canvas_width * 13 / 28

        //  /imgs/puzzle-bg-${imgIndex}.jpg  为滑块背景图 从静态资源获取  如从接口获取可从that.properties.properties拿
        context.drawImage(`/imgs/puzzle-bg-${imgIndex}.jpg`, 0, 0, context.width, context.height)
        context.draw(false, (() => {
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
          }, that);
        }))
      }, 50)
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
      var maxX = this.data.canvas_width - 60
      if (that.data.slide_clientX < 1) {
        that.data.slide_status = 0
        return false
      }
      if (that.data.slide_clientX > maxX) {
        cliextX = maxX
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
        }, 500)
        wx.showToast({
          icon: 'success',
          title: '验证成功',
        })
        that.triggerEvent('puzzleVerify')
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
      }, 500)
    },
  },
  lifetimes: {
    created() {
      // 在组件实例刚刚被创建时执行
    },
    ready() {
      // 在组件在视图层布局完成后执行
      // console.log(this.properties.sildeBlockCont);
    },
  }
})

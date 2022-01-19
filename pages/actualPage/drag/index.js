var startPoint;
Page({
  data: {
    //按钮位置参数
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: '',
  },
  btnAction() {

  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
          buttonTop: res.windowHeight * 0.60, //这里定义按钮的初始位置
          buttonLeft: res.windowWidth * 0.80,
        })
      }
    })
  },
  //按钮拖动事件
  buttonStart: function (e) {
    startPoint = e.touches[0] //获取拖动开始点
  },
  buttonMove: function (e) {
    var endPoint = e.touches[e.touches.length - 1] //获取拖动结束点
    //计算在X轴上拖动的距离和在Y轴上拖动的距离
    var translateX = endPoint.clientX - startPoint.clientX
    var translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint //重置开始位置
    var buttonTop = this.data.buttonTop + translateY
    var buttonLeft = this.data.buttonLeft + translateX
    //判断是移动否超出屏幕
    if (buttonLeft + 50 >= this.data.windowWidth) {
      buttonLeft = this.data.windowWidth - 50;
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0;
    }
    if (buttonTop <= 0) {
      buttonTop = 0
    }
    if (buttonTop + 50 >= this.data.windowHeight) {
      buttonTop = this.data.windowHeight - 50;
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },
  buttonEnd: function (e) {}
})
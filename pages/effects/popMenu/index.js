// pages/effects/popMenu/index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    isShow: false,//是否已经弹出
    start: {},//旋转动画
    a1: {},
    a2: {},
    a3: {},
  },
  btnPop() {
    this.setData({
      isShow: !this.data.isShow
    })
    if (this.data.isShow) {
      startPop.call(this);
    } else {
      endPop.call(this);
    }
  },
})

//弹出动画
function startPop() {
  var start = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var a1 = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var a2 = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var a3 = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  start.rotateZ(180).step();
  
  a2.translate(-120, 0).rotateZ(360).opacity(1).step();
  a3.translate(-65, 70).rotateZ(360).opacity(1).step();
  this.setData({
    start: start.export(),
    a1: a1.export(),
    a2: a2.export(),
    a3: a3.export(),
  })
}
//收回动画
function endPop() {
  var start = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var a1 = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var a2 = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  var a3 = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease-out'
  })
  start.rotateZ(0).step();
  a1.translate(0, 0).rotateZ(0).opacity(0).step();
  a2.translate(0, 0).rotateZ(0).opacity(0).step();
  a3.translate(0, 0).rotateZ(0).opacity(0).step();
  this.setData({
    start: start.export(),
    a1: a1.export(),
    a2: a2.export(),
    a3: a3.export(),
  })
}

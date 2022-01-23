// pages/wxCase/popCustom/index.js
Page({


  data: {
    isShow: true,
    a: {},
  },
  show() {
    this.setData({
      isShow: false
    })
  },
  hide() {
    // var a = wx.createAnimation({
    //   duration: 500,
    //   timingFunction: 'ease-out'
    // })
    // a.scale(1.08, 1.08).opacity(1).rotateZ(40).scale(0.6).step();
    this.setData({
      // a: a.export(),
      isShow: true
    })
  }


})
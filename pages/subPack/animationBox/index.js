// pages/subPack/animationBox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '',
    animationData1: {},    // 三个动画栈
    animationData2: {},
    animationData3: {}

  },

  
  onLoad: function (options) {

  },

  
  onShow: function () {
    this.animation1 = wx.createAnimation({timingFunction: 'ease', duration: 50})
    this.animation2 = wx.createAnimation({timingFunction: 'ease', duration: 50})
    this.animation3 = wx.createAnimation({timingFunction: 'ease', duration: 50})

    // 初始化
    this.animation1.opacity(0.2).step()
    this.animation3.scale(0).step()

    // 导出动画栈
    this.animationData1 = this.animation1.export()
    this.animationData2 = this.animation2.export()
    this.animationData3 = this.animation3.export()

  },
  compound() {
    this.animation1.opacity(1).step()
    this.animation1.scale(0.1).step({duration: 2000, delay: 2900})

    this.animation2.rotate(360).step({duration: 3000})
    this.animation2.scale(0.1).step({duration: 2000})

    this.animation3.scale(1.2).step({duration: 1000, delay: 4000})
    this.animation3.scale(1).step({duration: 300})
    // 导出动画栈
    this.animationData1 = this.animation1.export()
    this.animationData2 = this.animation2.export()
    this.animationData3 = this.animation3.export()
  },


 
})
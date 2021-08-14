// pages/subPack/animationBox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData1: {},    // 三个动画栈
    animationData2: {},
    animationData3: {}
  },

  
  onLoad: function (options) {

  },

  
  onShow: function () {
    this.init();
  },
  init(){
    this.data.animation1 = wx.createAnimation({timingFunction: 'ease', duration: 50})
    this.data.animation2 = wx.createAnimation({timingFunction: 'ease', duration: 50})
    this.data.animation3 = wx.createAnimation({timingFunction: 'ease', duration: 50})

    // 初始化
    this.data.animation1.opacity(0.2).step() //scale必须放在opcity的后面

    this.data.animation2.scale(1).step({duration: 2000})

    this.data.animation3.scale(0).step()

    // 导出动画栈
    this.data.animationData1 =  this.data.animation1.export()
    this.data.animationData2 =  this.data.animation2.export()
    this.data.animationData3 =  this.data.animation3.export()
    this.setData({
      animationData1:this.data.animationData1,
      animationData2:this.data.animationData2,
      animationData3:this.data.animationData3
    })

  },
  toPart() {
    this.data.animation1.opacity(1).step()
    this.data.animation1.scale(0.1).step({duration: 2000, delay: 2900})

    this.data.animation2.rotate(360).step({duration: 3000})
    this.data.animation2.scale(0.1).step({duration: 2000})

    this.data.animation3.scale(1.2).step({duration: 1000, delay: 4000})
    this.data.animation3.scale(1).step({duration: 300})
    // 导出动画栈
    this.data.animationData1 =  this.data.animation1.export()
    this.data.animationData2 =  this.data.animation2.export()
    this.data.animationData3 =  this.data.animation3.export()

    this.setData({
      animationData1:this.data.animationData1,
      animationData2:this.data.animationData2,
      animationData3:this.data.animationData3
    })
  },


 
})
// pages/effects/clipRed/index.js
Page({


  data: {
    show: false,
    not_open: true,
    animationData: {},
    animationData1: {},
    animationData2: {},
  },
  closeModal() {
    this.slideIn(1);
    setTimeout(() => {
      this.setData({
        show: false
      })
    }, 200);
  },
  show() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(() => {
      this.setData({
        show: true
      }, (() => {
        this.slideIn(0)
      }))
      wx.hideLoading();
    }, 500);
  },
  slideIn(e) {
    var animation = wx.createAnimation({
      duration: 200, //动画的持续时间 默认400ms
      timingFunction: 'linear' //动画的效果 默认值是linear
    })
    this.animation = animation;
    if (e == 0) {
      this.animation.translate('-50%', '-50%').step();
    } else {
      this.animation.translate('-50%', '100%').step();
    }
    this.setData({
      animationData: this.animation.export(),
    })
  },
  open() {
    this.setData({
      not_open: false
    }, (() => {
      setTimeout(() => {
        this.setData({
          not_open: true,
        })
        this.fadeOut(() => {
          let animation = wx.createAnimation({
            duration: 0,
            timingFunction: 'step-end'
          })
          let animation1 = wx.createAnimation({
            duration: 0,
            timingFunction: 'step-end'
          })
          animation.opacity(1).step();
          animation1.opacity(1).step();
          this.setData({
            show: false,
            animationData1: animation.export(),
            animationData2: animation1.export(),
          })
        })
      }, 1000);
    }))
  },

  fadeOut(fun) {
    var animation1 = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-in-out'
    }),
      animation2 = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
    animation1.translateY('-350%').step();
    animation2.translateY('300%').step()
    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
    })
    setTimeout(() => {
      fun()
    }, 400);
  }


})
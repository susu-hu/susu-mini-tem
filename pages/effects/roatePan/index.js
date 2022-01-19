import Dial from "./utils/dial.js"

Page({
  data: {
    mode: 1, //1是指针旋转，2为转盘旋转
    areaNumber: 2, //抽奖间隔
    speed: 10 //转动速度
  },

  onLoad() {
    let self = this
    this.dial = new Dial(this, {
      areaNumber: self.data.areaNumber, //抽奖间隔
      speed: self.data.speed, //转动速度
      awardNumer: 4,
      mode: self.data.mode, //1是指针旋转，2为转盘旋转
      callback: () => {
        wx.showModal({
          title: '提示',
          content: '恭喜您，中奖了',
          showCancel: false,
          success: (res) => {
            self.dial.reset()
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })

  },

  onReady() {
    console.log("onReady")
  },

  onSwitchMode(event) {
    let mode = event.currentTarget.dataset.mode
    this.setData({
      mode
    })
    this.dial.switch(mode)
  },

  sliderSpeedChange(e) {
    let speed = e.detail.value;
    this.setData({
      speed
    });
    this.dial.sliderSpeedChange(speed)
  },

  sliderAreaNumChange(e) {
    let areaNumber = e.detail.value;
    this.setData({
      areaNumber
    });
    this.dial.sliderAreaNumChange(areaNumber)
  }

})
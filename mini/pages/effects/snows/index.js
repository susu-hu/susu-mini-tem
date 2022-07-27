// pages/effects/snows/index.js
var i = 0;
Page({


  data: {
    snows: [],
    animation: [],
    dateTime: "",
  },


  onLoad: function (options) {

  },


  onShow: function () {
    this.initSnow();
    this.data.snows = [];
    this.data.animation = [];
    let j = 50
    while (j--)
      this.data.snows.push(Math.floor(Math.random() * 700))
    this.setData({
      snows: this.data.snows
    })
  },


  onHide: function () {
    clearTimeout(this.data.dateTime)
    this.setData({
      snows: [],
      animation: []
    })
  },

  onUnload: function () {
    clearTimeout(this.data.dateTime)
    this.setData({
      snows: [],
      animation: []
    })
  },
  initSnow: function () {
    setTimeout(function () {
      let animation = wx.createAnimation({})
      animation.translateY(804).opacity(1).step({
        duration: 4000
      })
      animation.translateY(0).opacity(1).step({
        duration: 0
      })
      this.setData({
        ['snows[' + i + ']']: Math.floor(Math.random() * 700),
        ['animation[' + i + ']']: animation.export()
      })
      i++;
      if (i == 50)
        i = 0
    }.bind(this), 500)
    var dateTime = setTimeout(function () {
      this.initSnow()
    }.bind(this), 100)
    this.setData({
      dateTime,
    })
  },

})
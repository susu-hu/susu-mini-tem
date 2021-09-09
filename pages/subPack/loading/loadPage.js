var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    year: 2021,
  },


  onLoad: function () {
    this.setData({
      year: new Date().getFullYear()
    });
  },
  onShow: function () {

  },
  onReady: function () {
    var _this = this;
    setTimeout(function () {
      _this.setData({
        remind: ''
      });
    }, 1000);
  },
});
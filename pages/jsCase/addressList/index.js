var city_list = require('./city.js');

Page({
  data: {
    cityList: city_list.city,
    chooseCity: '您还未选择机场！',
    isShowLayer: false,
    chooseIndex: 0,
    codeY: 'A',
    codeHeight: null,
    cityHeight: null
  },
  onLoad(options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      codeHeight: (windowHeight - 50) / this.data.cityList.length,
      cityHeight: windowHeight - 50,
    });
  },
  getCurrentCode(e) {
    var self = this;
    this.setData({
      codeY: e.target.dataset.code,
      chooseIndex: e.target.dataset.index,
      isShowLayer: true
    })
    setTimeout(() => {
      self.setData({
        isShowLayer: false
      })
    }, 500);
  },
  getChooseCity(e) {
    this.setData({
      chooseCity: e.target.dataset.city
    });
  }
})
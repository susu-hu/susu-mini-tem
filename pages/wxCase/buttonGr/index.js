// pages/wxCase/buttonGr/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    console.log(this.randomRange(21,23))
  },
  randomRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  },
 
})
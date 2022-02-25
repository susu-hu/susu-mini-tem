// pages/wxCase/buttonGr/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: [
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
    ],
  },

  onLoad: function (options) {
    console.log(this.randomRange(21, 23))
  },
  randomRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  },

})
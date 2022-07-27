// pages/newYear2/newYear2.js
var fall = require('../utils/fall.js');
const W = wx.getSystemInfoSync().windowWidth;
const H = wx.getSystemInfoSync().windowHeight;
const newYearImgs = ['../img/no_eye.png', '../img/no_eye.png', '../img/no_eye.png', '../img/no_eye.png'];
Page({

  data: {
    canvasHeight: 0
  },
  //点透canvas   pointer-events: none;
  handleTap() {
    console.log('点透canvas');
  },

  onLoad: function (options) {
    let ctx = wx.createCanvasContext('myCanvas');
    fall(ctx, W, H, newYearImgs, {
      // duration: 15,
      G: 2
    });
  },

  
  onShow: function () {
    this.setData({
      canvasHeight: H
    });
  },

  
})
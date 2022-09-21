// pages/effects/popMenu/index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    isShow: null,//是否已经弹出
  },
  btnPop() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
})

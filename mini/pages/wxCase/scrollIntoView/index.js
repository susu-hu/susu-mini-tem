// pages/wxCase/scrollIntoView/index.js
Page({

  data: {

  },
  toDetail(e) {
    let {
      index
    } = e.currentTarget.dataset;
    console.log(index)
    wx.navigateTo({
      url: '/pages/wxCase/scrollIntoView/detail?index=' + index,
    })
  }

})
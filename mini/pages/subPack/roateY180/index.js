// pages/subPack/roateY180/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  showb1() {
    this.setData({
      styleA: 'transform:rotateY(180deg)',
      styleB: 'transform:rotateY(0deg)'
    })
  },
  showb2() {
    this.setData({
      styleA: 'transform:rotateY(0deg)',
      styleB: 'transform:rotateY(-180deg)'
    })
  }

})
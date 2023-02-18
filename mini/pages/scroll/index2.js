// pages/scroll/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: '',
  },
  clickToBottom() {
    const query = wx.createSelectorQuery();
    query.select('#h1').boundingClientRect()
    query.selectViewport().scrollOffset()
    let top = 0;
    query.exec(function (res) {
      console.log(res)
      res[0].top // #the-id节点的上边界坐标
      top = res[1].scrollTop // 显示区域的竖直滚动位置
      console.log(res[0].top, res[1].scrollTop)
      wx.pageScrollTo({
        scrollTop: res[0].top + res[1].scrollTop,
        duration: 300
      })

    })
    this.setData({
      scrollTop: top
    })

  },


})
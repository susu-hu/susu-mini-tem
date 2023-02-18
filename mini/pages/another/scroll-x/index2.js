// pages/another/scroll-x/index2.js
Page({
  data: {
    // 定义测试菜单
    list: [1, 2, 3, 4, 5, 6, 7, 22, 32],
    // 定义当前选中菜单的索引
    currentTab: 0,
    // scroll-view距离左边的距离
    sleft: 0,
  },
  // 处理菜单切换
  handleTabChange(e) {
    let { currnet } = e.currentTarget.dataset;
    if (this.data.currentTab == currnet || currnet == undefined) return;
    this.setData({
      currentTab: currnet
    })
  },
  //处理swiper 滑动事件
  handleSwiperChange(e) {
    this.setData({
      currentTab: e.detail.current
    });
    // 在处理swiper的滑动事件中，处理sleft的值
    this.getScrollLeft()
  },
  // 处理sleft的值
  getScrollLeft() {
    const query = wx.createSelectorQuery();
    query.selectAll(".item").boundingClientRect();
    query.exec(res => {
      let num = 0;
      for (let i = 0; i < this.data.currentTab; i++) {
        num += res[0][i].width;
      }
      this.setData({
        sleft: Math.ceil(num)
      })
    })
  }
})
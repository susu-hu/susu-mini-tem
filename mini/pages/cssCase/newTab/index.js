// pages/cssCase/newTab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: [
      {
        name: "选项一"
      },
      {
        name: "选项二"
      },
    ],
    nav_type: 0,
  },
  navTab(e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.type === index || index === undefined) {
      return false;
    } else {
      this.setData({
        nav_type: index,
      })
    }
  },


})
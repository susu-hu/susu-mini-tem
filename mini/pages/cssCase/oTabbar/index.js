// pages/cssCase/nTabbar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currIndex: 0,
    menu: [{
        name: "三明治",
        icon: "icon-susua-2-53"
      },
      {
        name: "汉堡",
        icon: "icon-susuhanbao"
      },
      {
        name: "冰沙",
        icon: "icon-susubingsha"
      },
      {
        name: "可乐",
        icon: "icon-susukele"
      },
    ]
  },
  tabClick(e) {
    let {
      index
    } = e.currentTarget.dataset;
    this.setData({
      currIndex: index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },


})
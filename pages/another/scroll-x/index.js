// pages/another/scroll-x/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRefresh: false,

    currentTab: 0,
    tabList: [
      {
      name: 'tab一'
    },
    {
      name: 'tab二'
    }, {
      name: 'tab三'
    }, 
    {
      name: 'tab四'
    },
    {
      name: 'tab五'
    }, 
    {
      name: 'tab六'
    },
    {
      name: 'tab七'
    },
  ]

  },

  tabNav(e) {
    let currentTab = e.currentTarget.dataset.index
    this.setData({
      currentTab
    })
  },
  handleSwiper(e) {
    let {current,source} = e.detail
    if (source === 'autoplay' || source === 'touch') {
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },
  handleTolower(e){
    wx.showToast({
      title: '到底啦'
    })
  },
  refresherpulling() {
    wx.showLoading({
      title: '刷新中'
    })
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
      wx.showToast({
        title: '加载完成'
      })
    }, 1500)
  },
  onLoad: function (options) {

  },


  onShow: function () {

  },

 
})
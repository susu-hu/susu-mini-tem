// pages/wxCase/popCust/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    hasData:true
  },


  onLoad: function (options) {

  },
  catmove(){
    return false;
  },

  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
})
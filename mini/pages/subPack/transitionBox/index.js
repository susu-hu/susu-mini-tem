// pages/subPack/transitionBox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: ['1'],
    lists: ['1'],
    page:1,
  },

 
  onLoad: function (options) {

  },
  onReady:function(e){
    this.setData({
     op: 1,
     mr:0
    })
   },
  
  onShow: function () {
  },

  
  onReachBottom: function () {
    // if (this.data.load_show) {
    //   this.setData({
    //     page: this.data.page + 1
    //   })
    //   this.loadData();
    // }
  },

  loadData:function(e){
    this.data.page ++;
    //模拟从后台获取到了下一页的数据，附加到原有数组上
    var lists = this.data.lists.concat(this.data.list)
    this.setData({
      lists:lists,
      page: this.data.page,
      op: 0,
      mr: -50
    })
    this.onReady()
   },
})
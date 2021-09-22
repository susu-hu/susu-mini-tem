// pages/jsCase/historySearch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot_list:['杜甫','李白','李清照','姜子牙','万事如意，心想事成'],
    list:[],
  },

 
  onShow: function () {

  },

  getSearch(e){
    let {index}=e.currentTarget.dataset,{hot_list}=this.data;
    console.log(hot_list[index])
  }
})
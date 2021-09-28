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
    if (wx.getStorageSync('search_history') ){
      this.setData({
        list:JSON.parse(wx.getStorageSync('search_history') ).slice(0, 15)
      })
    }
  },
  getData(e){
    let data = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");//去掉前后的空格
      if (data.trim() != '') {
        this.data.list.forEach((key, index) => {
          if (key == data) {
            this.data.list.splice(index, 1);
          }
        })
        this.data.list.unshift(data);
        this.setData({
          list:this.data.list.slice(0,15)
        })
        wx.setStorageSync('search_history', JSON.stringify(this.data.list))
      }
  },
  clear_input(){
    this.setData({
      search:''
    })
  },

  getSearch(e){
    let {index}=e.currentTarget.dataset,{hot_list}=this.data;
    let va=hot_list[index]
    this.setData({
      search:va
    })
    // 将标签存到历史搜索中
    this.data.list.forEach((item, index) => {
      if (item == va) {
        this.data.list.splice(index, 1);
      }
    })
    this.data.list.unshift(va);
    this.setData({
      list:this.data.list.slice(0,15)
    })
    wx.setStorageSync('search_history', JSON.stringify(this.data.list))
  },
   //清空历史
   clearHistory() {
    this.setData({
      list:[]
    })
    wx.removeStorageSync('search_history')
  },
  getSearchOne(e){
    let {index}=e.currentTarget.dataset,{list}=this.data;
    let va=list[index]
    this.setData({
      search:va
    })
    this.data.list.forEach((item, index) => {
      if (item == va) {
        this.data.list.splice(index, 1);
      }
    })
    this.data.list.unshift(va);
    this.setData({
      list:this.data.list.slice(0,15)
    })
    console.log(this.data.list)
    wx.setStorageSync('search_history', JSON.stringify(this.data.list))
  }
})
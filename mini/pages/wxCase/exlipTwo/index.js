// pages/wxCase/exlipTwo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ellipsis: true, // 文字是否收起，默认收起

  },
  ellipsis: function () {
    this.setData({
      ellipsis: !this.data.ellipsis
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('#text').boundingClientRect();
    query.exec((res) => {
      console.log("height==", res[0].height);
      this.setData({
        height: res[0].height
      })
      var height = res[0].height;
      //22px为css里设置的view的line-height
      this.data.colNum = Math.round(height / 22);
      console.log("行数==", this.data.colNum)
    })
  },

})
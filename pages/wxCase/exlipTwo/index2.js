// pages/wxCase/exlipTwo/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ellipsis:true,//默认收起
    rule: '<p>这是规苏苏苏苏苏苏苏苏苏苏苏则呢呵呵哈哈哈或哈哈哈红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p><p>这是规则呢红红火火恍恍惚惚</p>'
  },


  onLoad: function (options) {
    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('#text').boundingClientRect();
    query.exec((res) => {
      res[0].height;
      this.setData({
        height: res[0].height
      })
    })
  },
  /**
   * 收起/展开按钮点击事件
   */
  ellbtn: function () {
    this.setData({
      ellipsis: !this.data.ellipsis
    })
  },


})
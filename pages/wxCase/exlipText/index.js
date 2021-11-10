// pages/wxCase/exlipText/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ellipsis: true, // 文字是否收起，默认收起
    text:'<p>这是规则哈哈哈哈哈哈红红火火恍恍惚惚或或</p><br/><p>这是规则哈哈哈哈哈哈红红火火恍恍惚惚或或</p><br/><p>这是规则哈哈哈哈哈哈红红火火恍恍惚惚或或</p><br/><p>这是规则哈哈哈哈哈哈红红火火恍恍惚惚或或</p><br/><p>这是规则哈哈哈哈哈哈红红火火恍恍惚惚或或</p><br/><p>这是规则哈哈哈哈哈哈红红火火恍恍惚惚或或</p><br/>'
  },
  /**
   * 收起/展开按钮点击事件
   */
  ellipsis: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },


})
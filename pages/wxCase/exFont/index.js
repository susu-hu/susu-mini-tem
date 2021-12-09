// pages/wxCase/exFont/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: "<ol style='width:500px'><li>你好是否是大法官是的克己奉公的健身房给的数据分公司的痕迹方式的看见粉红色的就风扇电机发</li><li>23123123621721221272213213123213612321837128712983219832190831-02931-209321-312321</li></ol>"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content = this.data.a; //富文本
    content = content.replace(/<[^>]+>/, '<ol class="s2"')
    // let reg = getRegExp("<[^>]+>", "g");
    // content = content.replace(/<[^>]+>/gi, '< class="s2"')

    this.setData({
      a: content
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
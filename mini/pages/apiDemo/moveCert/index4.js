var guiCode = require('../utils/code');
const app = getApp()

Page({

  data: {
    guiCode: ''
  },

  onLoad: function (options) {
    this.guiCode = new guiCode({
      el: '#guiCodeCanvas',
      width: 70,
      height: 50,
      createCodeImg: ""
    })
  },

  bindinput() { },

  /**
   * 刷新图形验证码
   */
  guiCodeTap() {
    this.guiCode.refresh()
  },

  /**
   * 验证图形验证码
   */
  validateGuiCode() {
    if (!this.data.guiCode) {
      wx.showToast({
        title: '请输入图形验证码',
        icon: 'none'
      })
      return
    }
    let res = this.guiCode.validate(this.data.guiCode)
    if (!res) {
      wx.showToast({
        title: '图形验证码错误',
        icon: 'none'
      })
    }
  },

  /**
   * 立即验证按钮监听
   */
  toValidate() {
    //验证图形验证码
    this.validateGuiCode()
  },

})
// pages/subPack/customIpt/index.js
Page({
  data: {
    show_input: false,
    code: '',
  },
  // 获取input输入值
  getCodeValue(e) {
    this.setData({
      code: e.detail.value,
    })
  },
  //关闭弹框
  closeModal() {
    this.setData({
      show_input: false
    })
  },
  //弹出输入框
  showCode() {
    this.setData({
      show_input: true
    })
  }

})
// pages/subPack/customIpt/index.js
Page({

  data: {
    show_input: false,
    code: '', 

  },


  onShow: function () {

  },
  // 
  getCodeValue(e) {
    this.setData({
      code: e.detail.value,
    })
  },
  closeModal() {
    this.setData({
      show_input: false
    })
  },
  showCode() {
    this.setData({
      show_input: true
    })
  }

})
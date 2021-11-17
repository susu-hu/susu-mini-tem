// pages/wxCase/showEli/index.js
Page({


  data: {
    value:false
  },
  checkboxChange(e) {
    this.setData({
      value:!this.data.value
    })
  }
})
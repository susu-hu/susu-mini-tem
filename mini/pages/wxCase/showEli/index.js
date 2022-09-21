// pages/wxCase/showEli/index.js
const app = getApp()
Page({


  data: {
    a: '汴京发生了一宗离奇命案，众捕头全无头绪，一人出现了，大家登时欣喜若哈哈哈好好一聪明人，',
    value: false
  },
  checkboxChange(e) {
    this.setData({
      value: !this.data.value
    })
  },
  onLoad() {
    let a = this.data.a;
    console.log(a.length)
    if (a.length > 39) {
      a = a.slice(0, 50) + "...";
      this.setData({
        a
      })
    }


  },
  ssss() {
    app.addClickAudio()
  }
})
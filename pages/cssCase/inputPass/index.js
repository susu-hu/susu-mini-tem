// pages/cssCase/inputPass/index.js
Page({
  data: {
    open: false,//默认不显示密码
    focus:false,//是否获取焦点
  },
  switch() {
    this.setData({
      open: !this.data.open
    })
  },
  focus(){
    this.setData({
      focus:true
    })
  },
  blur(){
    this.setData({
      focus:false
    })
  }

})
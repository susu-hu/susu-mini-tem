// pages/cssCase/inputPass/index.js
Page({
  data: {
    open: false,//默认不显示密码
    open1: false,//默认不显示密码
    focus: false,//是否获取焦点
    pass: '',
    pass1: '',
  },
  switch() {
    this.setData({
      open: !this.data.open
    })
  },
  switch1() {
    this.setData({
      open1: !this.data.open1
    })
    if(this.data.open1){
      this.setData({
        pass:this.data.pass1
      })
    }else{
      this.setData({
        pass:this.data.pass
      })
    }
  },
  focus() {
    this.setData({
      focus: true
    })
  },
  blur() {
    this.setData({
      focus: false
    })
  },
  getValue(e) {
    let pass1=JSON.stringify(e.detail.value),
    pass=e.detail.value.replace(/./g, '*');
    this.setData({
      pass1,
      pass,
    })
  }

})
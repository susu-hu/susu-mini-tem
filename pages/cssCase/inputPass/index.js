// pages/cssCase/inputPass/index.js
Page({

  data: {
    typeName: 'password', // 密码框的类型,用于显示密码时更改类型可看见输入的密码而非*号
    passFlag: 1, // 密码第几次点击代表,用于显示不同的图标
    storePass: '', // 暂存密码,用于显示密码
  },
  showPass() { // 显示密码而非*号
    console.log(this.data.storePass)
    if (this.data.passFlag == 1) { // 第一次点击
      this.setData({
        passFlag: 2,
        typeName: 'text'
      });
    } else { // 第二次点击
      this.setData({
        passFlag: 1,
        typeName: 'password'
      });
    }
  },
  passWordInput(e) { // 监听密码input框并把输入的密码在变量storePass下暂存起来,用于在显示密码操作展示
    console.log(e.detail.value)

    this.setData({
      storePass: e.detail.value,
      passWord: e.detail.value
    })
  },
})
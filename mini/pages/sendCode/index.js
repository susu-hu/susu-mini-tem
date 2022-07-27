// pages/sendCode/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '13287653342', //手机号
    isCan: false, //是否可以提交
    code: '', //验证码
    isShow: true, //是否显示input框的提示文字
    count: 60, //倒计时
    num: 60, //常量，倒计时秒数，通常定义为60秒
    CodeText: '获取验证码',//在‘获取验证码’和‘重新获取验证码’之间切换
    isClick: false,//是否点击了（重新）获取验证码
  },

  //倒计时
  countDown() {
    let count = this.data.count;
    let timer = setInterval(() => {
      if (--count >= 0) {
        this.setData({
          count,
          isClick: true,
          CodeText: '（' + count + 's）重新获取'
        })
        if (this.data.count == 0) {
          clearInterval(timer);
          this.setData({
            count: this.data.num,
            isClick: false,
            CodeText: '重新获取验证码',
          })
        }
      }
    }, 1000)
  },
  //获取验证码
  int: function (e) {
    let val = e.detail.value,
      isShow = this.data.isShow;
    if (val.length == 0) {
      isShow = true;
    } else {
      isShow = false;
    }
    this.setData({
      code: val,
      isCan: val.length === 6,
      isShow
    })
  },

  //输入框聚焦时触发
  getFocus() {
    this.setData({
      isShow: false
    })
  },
  //输入框失去焦点时触发
  getBlur() {
    let isShow = this.data.isShow;
    if (this.data.code.length == 0) {
      isShow = true;
    } else {
      isShow = false
    }
    this.setData({
      isShow
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mPhone = this.data.phone.substr(0, 3) + '****' + this.data.phone.substr(7); 
    this.setData({
      phone:mPhone
    })

  },
  submit: function () {
    let code = this.data.code
    if (code.length < 6) {
      wx.showToast({
        title: '请输入验证码',
        icon:'none'
      })
      return
    } else {
      //进行操作
    }
  },
 
  //发送验证码
  sendCode() {
    if (!this.data.isClick) {
      this.setData({
        count: this.data.num,
        isClick: true,
        CodeText: '（' + this.data.num + 's）重新获取'
      })
      this.countDown();//倒计时
    }
  },
  tocode2(){
    wx.navigateTo({
      url: '/pages/sendCode2/index',
    })
  }
})
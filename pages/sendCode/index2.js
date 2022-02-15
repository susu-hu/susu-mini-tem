// pages/sendCode/index2.js
Page({
  onTabItemTap(item) {
    console.log(12312312)
    wx.showToast({
      title: '苏苏来了',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },
  showDialog() {
    //弹出组件,此处必须把this重新赋予变量不然callback内部会提示找不到this
    var _this = this;
    _this.verifycode.showView({
      phone: "15200000000",
      inputSuccess: function (phoneCode) {
        //调用组件关闭方法
        _this.verifycode.closeView();
        //设置数据
        _this.setData({
          code: phoneCode //验证码
        });
      }
    });
  },



  onLoad: function (options) {
    //选择组件对象
    this.verifycode = this.selectComponent("#verifycode");
    console.log('onload执行的不')
    console.log(`%c苏苏 `, ` color:red;
        font-size:25px;
   `)
  },


  onShow: function () {
    console.log('onShow执行的不')
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },


})
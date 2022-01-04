Page({

  /**
   * 页面的初始数据
   */
  data: {
    sel_pass: false,
    sel_phone: false,
    sel_code: false,
    phone: '',
    pass: '',
    ver_code: '',
    is_can_click: false,
    show: 0,
    acc: true,
    codeSend: 0,
    smsFlag: false,
    sendTime: '获取验证码',
    snsMsgWait: 60,
    loginType: 1,
    ifLogout: '',
    ifClick: true,
    sendBtn: true,
    currentTab: 0
  },
  clickTab(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.id,
      acc: true
    })
  },

  //前往忘记密码
  changePass: function () {
    wx.navigateTo({
      url: '/pages/forgotPwd/index'
    })
  },

  // 前往注册页
  goReg: function (e) {
    wx.navigateTo({
      url: '/pages/register/index',
    })
  },

  //获取焦点
  bindfocus: function (e) {
    let type = e.currentTarget.dataset.type;
    let val = e.detail.value;
    this.setData({
      sel_phone: type == 1 ? true : false,
      sel_pass: type == 2 ? true : false,
      show: val != '' ? type : 0,
    })
  },
  //失去焦点
  bindblur: function () {
    let that = this;
    that.setData({
      sel_pass: false,
      sel_phone: false,
      show: 0
    })
  },
  //手机号
  bindPhone: function (e) {
    let val = e.detail.value;
    let type = 0;
    if (val != "") {
      type = 1;
    }
    this.setData({
      phone: e.detail.value,
      show: type,
      codeSend: type
    })
    this.inputClick()
  },
  //密码
  bindPass: function (e) {
    let val = e.detail.value;
    let type = 0;
    if (val != "") {
      type = 2;
    }
    this.setData({
      pass: e.detail.value,
      show: type
    })
    this.inputClick()
  },
  //验证码
  bindCode: function (e) {
    this.setData({
      ver_code: e.detail.value,
      show: e.target.dataset.type
    })
    this.inputClick()
  },
  //切换登录方式
  changeCode: function (e) {
    let type = e.currentTarget.dataset.type;
    let val = this.data.phone
    //console.log(this)
    this.setData({
      acc: type == 2 ? false : true,
      pass: "",
      ver_code: "",
      show: 0,
      codeSend: val != '' ? 1 : 0,
      loginType: type
    })
    this.inputClick()
  },
  //验证不为空
  inputClick: function (e) {
    let status = true;
    if (this.data.phone == '') {
      status = false;
    }

    if (this.data.loginType == 1) {
      if (this.data.pass == '') {
        status = false;
      }
    } else {
      if (this.data.ver_code == '') {
        status = false
      }
    }
    this.setData({
      is_can_click: status
    })
  },
  //清空
  phone_empty: function (e) {
    let type = e.currentTarget.dataset.type;
    this.setData({
      phone: type == 1 ? "" : this.data.phone,
      pass: type == 2 ? "" : this.data.pass,
      ver_code: "",
      show: 0,
      codeSend: 0
    })
    this.inputClick()
  },
  // 获取验证码
  sendCode: function () {
    //60秒后重新获取验证码
    let phone = this.data.phone;
    let tmp = /^1[0-9]{10}$/;
    let that = this;
    if (!tmp.test(phone)) {
      return util.toolsFn.toastMsg('请输入正确的手机号！', 'none')
    }

    if (that.data.sendBtn) {
      that.data.sendBtn = false;
      ajax.httpReq('/retailer/login/send-verify-code', 'post', { phone: phone }, true).then(function (res) {
        that.resetBtn();
      })
    }
  },
  /**
   * 短信发送按钮倒计时
   */
  resetBtn: function () {
    var inter = setInterval(function () {
      this.setData({
        smsFlag: true,
        sendTime: '(' + this.data.snsMsgWait + 's)重新获取',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendTime: '获取验证码',
          snsMsgWait: 60,
          smsFlag: false,
          sendBtn: true,
        });
      }
    }.bind(this), 1000);
  },
  /**
   * 登录方法
   */
  btnLogin() {
    let phone = this.data.phone;
    let pass = this.data.pass;
    let ver_code = this.data.ver_code;
    let loginType = this.data.loginType;
    let currentTab = this.data.currentTab;
    let that = this;

    let tmp = /^1[0-9]{10}$/;
    if (!tmp.test(phone) && currentTab == 1) {
      return util.toolsFn.toastMsg('请输入正确的手机号！', 'none')
    }

    if (that.data.ifClick) {
      that.data.ifClick = false;
      wx.getUserProfile({
        desc: '用于完善会员资料',
        success: (res) => {
          var avatarUrl = res.userInfo.avatarUrl;
          var nickName = res.userInfo.nickName;
          wx.login({
            success(res) {
              if (res.code) {
                if (loginType == 1) {
                  var dataJson = {
                    'wx_code': res.code,
                    'avatar': avatarUrl,
                    'nickname': nickName,
                    'login_account': phone,
                    'password': pass,
                    'login_type': loginType,
                    'role_type': currentTab,
                  }
                } else {
                  var dataJson = {
                    'wx_code': res.code,
                    'avatar': avatarUrl,
                    'nickname': nickName,
                    'login_account': phone,
                    'ver_code': ver_code,
                    'login_type': loginType,
                    'role_type': currentTab,
                  };
                }
                ajax.httpReq('/retailer/login/confirm-login', 'post', dataJson, true).then(function (res) {
                  if (res.code == 1) {
                    if (res.data.error_jump == 0) {
                      that.data.ifClick = true;
                      wx.setStorageSync('access_token', res.data.token);
                      wx.switchTab({
                        url: '/pages/index/index',
                      })
                    } else if (res.data.error_jump == 1) {
                      //待审核
                      util.toolsFn.jump('/pages/regAss/index?type=' + res.data.error_jump);
                    } else if (res.data.error_jump == 2) {
                      //审核不通过
                      util.toolsFn.jump('/pages/regAss/index?type=' + res.data.error_jump + '&token=' + res.data.token);
                      //完善信息
                    } else if (res.data.error_jump == 3) {
                      util.toolsFn.jump('/pages/ranchInfoDetails/index?token=' + res.data.token);
                    }
                  } else {
                    that.data.ifClick = true;
                    util.toolsFn.toastMsg(res.msg, 'none');
                  }
                })
              } else {
                that.data.ifClick = true;
                util.toolsFn.toastMsg('微信code获取失败！', 'none');
              }
            }
          })
        },
        fail(res) {
          that.data.ifClick = true;
        }
      })
    }
  },
  
})

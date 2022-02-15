Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    swiperCurrent: 0,
    show_code: true, //展示会员id弹框

    navHeight: '', //导航栏整体高度,
    tabList: [{
        icon: '/img/my4.png',
        name: "附近门店",
        url: "/pages/store/index",
      },
      {
        icon: '/img/my5.png',
        name: "地址管理",
        url: "/pages/address/index",
      },
      {
        icon: '/img/my6.png',
        name: "个人信息",
        url: "/pages/userInfo/index",
      },
      {
        icon: '/img/my10.png',
        name: "条款政策",
        url: "/pages/policy/index",
      },
      {
        icon: '/img/my11.png',
        name: "兑换中心",
        url: "/pages/exchange/index",
      },
      {
        icon: '/img/my12.png',
        name: "我的订单",
        url: "/pages/myOrder/index",
      },
    ],
    code_uri: '',
    login_status: 0,
  },
  //轮播图切换
  swiperChange: function (e) {
    if (e.detail.source == "touch" || e.detail.source == "autoplay") {
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },
  closeModal() {
    this.setData({
      show_code: true
    })
  },
  showCode() {
    let login_status = this.data.login_status;
    if (login_status == 1) {
      this.setData({
        show_code: false
      })
    } else {
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }

  },

  onLoad: function (options) {
    this.getNavHeight()
  },
  //获取头部自定义导航栏高度
  getNavHeight() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let navHeight = res.statusBarHeight + menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2; //导航高度
        this.setData({
          navHeight,
        })
      },
    })
  },
  onShow: function () {
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4
      })
    }
    this.loadData();
  },
  loadData: function () {
    let _this = this;
    ajax.httpReq('/customer/index/user-center', 'get', {}).then(function (res) {
      if (res.code == 1) {
        _this.setData({
          phone: res.data.phone,
          hyid: res.data.hyid,
          coupon_num: res.data.coupon_num,
          gift_num: res.data.gift_num,
          banner: res.data.banner,
          code_uri: res.data.code_uri,
          login_status: res.data.login_status
        })
      } else {
        util.toolsFn.toastMsg(res.msg);
      }
    })
  },
  // 页面跳转
  toDetail(e) {
    let {
      url
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },
  //了解详情
  toMoreDetail() {
    wx.navigateTo({
      url: '/pages/productDesc/index',
    })
  },
  // 查看优惠券
  toCard() {
    wx.navigateTo({
      url: '/pages/coupon/index?coupon_type=2',
    })
  },
  // 查礼品券
  toGift() {
    wx.navigateTo({
      url: '/pages/coupon/index?coupon_type=1',
    })
  },
  copyCodeId: function () {
    wx.setClipboardData({
      data: this.data.hyid.toString(),
      success(res) {},
      fail(err) {}
    });
  },
  onShareAppMessage: function () {

  }
})
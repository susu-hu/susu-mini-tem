Component({
  data: {
    selected: 0,
    color: "#333333",
    selectedColor: "#6B1F72",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/img/tabbar/icon_index.png",
      selectedIconPath: "/img/tabbar/icon_index_sel.png",
      text: "首页"
    }, {
      pagePath: "/pages/charts/index",
      iconPath: "/img/tabbar/icon_order.png",
      selectedIconPath: "/img/tabbar/icon_order_sel.png",
      text: "饼图"
    }, {
      pagePath: "/pages/addImg/index",
      iconPath: "/img/tabbar/icon_safe.png",
      selectedIconPath: "/img/tabbar/icon_safe_sel.png",
      text: "上传图片"
    }, {
      pagePath: "/pages/sendCode/index2",
      iconPath: "/img/tabbar/icon_my.png",
      selectedIconPath: "/img/tabbar/icon_my_sel.png",
      text: "验证码"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url,
        success: (res) => {
          let page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad()
        }
      })
      this.setData({
        selected: data.index
      })
    }
  }
})
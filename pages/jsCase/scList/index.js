Page({

  data: {
    chosed_tab: '',
    chosed_theme: "",//选中的主题
    theme_list: [
      {
        id: 1,
        name: '就按时法苏发生绝对是僵尸粉金黄色的费是的分',
        content: '主是大好人法闪电黄蜂烧开后打飞机数据库的红富士康绝代风华水电费是第三方的'
      },
      {
        id: 2,
        name: '嘻嘻哈哈哈',
        content: '水电费还是得防火纱看见了的发谁看得见风和水电费还是得发结束动画飞上来的翻山倒海就扣分水电费 '
      },
    ]
  },
  choseTab(e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.chosed_tab === index || index === undefined) {
      return false;
    } else {
      this.setData({
        chosed_tab: index,
      })
    }
  },
  themeChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      chosed_theme: e.detail.value
    })
  },


  onLoad: function (options) {

  },


  onShow: function () {

  },

  /**
   * 确认选择按钮
   */
  submit() {
    let { chosed_theme, theme_list } = this.data;
    var theme = theme_list.filter(item => {
      return item.id == chosed_theme
    })[0];
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2]; // 前一个页面
    prePage.setData({
      theme,
    }, () => {
      wx.navigateBack({
        delta: -1,
      })
    })

  }


})
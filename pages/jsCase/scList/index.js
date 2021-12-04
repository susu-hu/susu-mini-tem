Page({

  data: {
    chosed_tab: '', //选中的主题
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
  },


  onLoad: function (options) {

  },


  onShow: function () {

  },


})
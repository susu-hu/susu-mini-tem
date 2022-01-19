Page({

  data: {
    checkd: false,
    tab_lsit: ['待领取', '已提现'],
    curTab: 0,
    hasData: true,
  },
  swithChange() {
    this.setData({
      checkd: !this.data.checkd
    })
  },
  tabNav(e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.curTab === index || index === undefined) {
      return false;
    } else {
      this.setData({
        curTab: index,
      })
    }
  },


  onLoad: function (options) {

  },


  onShow: function () {

  },


  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },
})
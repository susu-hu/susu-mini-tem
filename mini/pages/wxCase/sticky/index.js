// pages/wxCase/sticky/index.js
Page({
  data: {
    navList: ['正在进行', '即将开始', '已结束'],
    nav_type: 0,
    isFixed: false,
    navTop: 0, //距离顶部距离
    navHeight: 0,//nav高度
  },
  changeType(e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.nav_type === index || index === undefined) return;
    this.setData({
      nav_type: index,
    })
    if (this.data.isFixed) {
      wx.pageScrollTo({
        selector: '#content',
        // scrollTop: Number(this.data.navTop),
        duration: 0.5,//滚的到顶部需要的时间  动画
      })

    }
    wx.createSelectorQuery().select('#content').boundingClientRect((rect) => {
      console.log(rect)
    }).exec();
  },

  onReady: function () {
    if (this.data.navTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().select('#nav').boundingClientRect((rect) => {
        if (rect && rect.top > 0) {
          this.setData({
            navHeight: rect.height,
            navTop: parseInt(rect.top)
          });
        }
      }).exec();
    }
  },


  /**
   * 监听页面滑动事件
   */
  onPageScroll: function (e) {
    let scrollTop = parseInt(e.scrollTop),//滚动条距离顶部高度
      isFixed = scrollTop >= this.data.navTop;
    if (this.data.isFixed !== isFixed) {
      this.setData({
        isFixed,
      });
    }
  }
})
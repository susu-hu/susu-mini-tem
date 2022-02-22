// pages/wxCase/loadingBar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scwidth: 0,
    flag: false,
  },
  action() {
    if (!this.data.flag) {
      this.setData({
        scwidth: this.data.scwidth + 3,
      })
      if (this.data.scwidth < 100) {
        setTimeout(() => {
          this.action();
        }, 100)
      } else {
        this.setData({
          scwidth: 0,
          flag: true
        })
      }
    }

  },


  onShow: function () {

  },


})
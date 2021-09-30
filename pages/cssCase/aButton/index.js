// pages/cssCase/aButton/index.js
Page({

  data: {
    ischecked: undefined,
  },
  click() {
    this.setData({
      ischecked: !this.data.ischecked
    })
  },
  onShow: function () {
    wx.hideHomeButton({})
    // wx.hideHomeButton({
    //   success: function () {
    //     console.log("hide home success");
    //   },
    //   fail: function () {
    //     console.log("hide home fail");
    //   },
    //   complete: function () {
    //     console.log("hide home complete");
    //   },
    // });
  }

})
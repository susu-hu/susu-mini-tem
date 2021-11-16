// pages/cal2/index2.js
Page({


  data: {
    dateString: "",
    spot: ['2021/11/6', '2020/8/9', '2020/8/20', '2020/9/12']
  },
  dateChange(e) {
    this.setData({
      dateString: e.detail.dateString
    })
  },

  
  onLoad: function (options) {

  },

  
  onShow: function () {

  },

  
})
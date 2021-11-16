Page({
  data: {
    hasData: true,
  },
  dateChange(e) {
    this.setData({
      dateString: e.detail.dateString
    })
  },

  onLoad: function () {

  },

})
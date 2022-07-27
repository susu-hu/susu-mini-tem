Page({
  data: {
    hasData: true,
    spot: ['2021-11-18', '2021-11-16', '2021-11-5']
  },
  dateChange(e) {
    this.setData({
      dateString: e.detail.dateString
    })
  },

  onLoad: function () {

  },

})
Page({
  data: {
    readmore: {
      status: false,
      tip: '查看更多'
    }
  },
  onReady() {
    const query = wx.createSelectorQuery()
    let self = this
    query.select(".content").boundingClientRect(function (res) {
      const lineHeight = 18
      const height = res.height
      const status = "readmore.status"
      self.setData({
        [status]: height / lineHeight > 3
      })
    }).exec()
  },
  toggle() {
    const status = this.data.readmore.status
    this.setData({
      readmore: {
        status: !status,
        tip: status ? '收起' : '更多'
      }
    })
  },
})
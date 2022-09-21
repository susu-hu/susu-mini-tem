Page({
  data: {
    type: 0,
    scrollViewHeight: 0,
    barH: 0,// 自定义滚动条 滑块
    percent: 0,// 自定义滚动条 距离顶部的距离
    topPlace: 0,// 滚动条滑动百分比
  },

  onLoad() {
    
  },

  tapMethod(e) {
    this.setData({ type: e.currentTarget.dataset.type })
  },

  bindload() {
    wx.createSelectorQuery().select('#scroll-view').boundingClientRect(rect => {
      this.setData({
        topPlace: 1,
        scrollViewHeight: rect.height
      })
    }).exec();
  },

  bindscroll(e) {
    let scrollViewHeight = this.data.scrollViewHeight
    console.log('容器高', scrollViewHeight)
    let h = e.detail.scrollHeight
    console.log('总高', h)
    let t = e.detail.scrollTop
    console.log('当前滑动距离', t)

    let barHt = (scrollViewHeight / h * scrollViewHeight)
    let barTop = t / (h - scrollViewHeight) * (scrollViewHeight - barHt)
    let barTopBfb = (t / h * 100)

    this.setData({
      barH: barHt + 'px',
      percent: barTop + 'px'
      // percent: barTopBfb + '%'
    })
  },

  close() {
    this.setData({ type: 0 })
  }
})
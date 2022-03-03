//index.js
Page({
  data: {
    scrollInToView: '',
    scrollTop: 0
  },
  toTop (e) {
    var view = this.data.scrollInToView ? '' : e.currentTarget.dataset.toview;
    this.setData({
      scrollInToView: view,
      scrollTop: 0
    });
  },
  bindScroll: function (e) {
    console.log(e.detail.scrollTop)
    this.setData({
      scrollInToView: '',
    });
  },
  
})
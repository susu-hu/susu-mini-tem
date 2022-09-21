// pages/cssCase/progress/index.js
Page({

  data: {
    progress: 50,
  },


  prAdd(e) {
    console.log(e)
    let { type } = e.currentTarget.dataset;
    let { progress } = this.data;
    if (type == 0) {
      progress = progress + 3
    } else {
      progress = progress - 3
    }

    if (progress >= 100 || progress <= 0) return false
    this.setData({
      progress,
    })
  }


})
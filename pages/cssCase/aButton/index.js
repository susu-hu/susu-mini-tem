// pages/cssCase/aButton/index.js
Page({

  data:{
    ischecked:undefined,
  },
  click() {
    this.setData({
      ischecked:!this.data.ischecked
    })
  },
})
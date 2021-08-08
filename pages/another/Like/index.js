// pages/another/Like/index.js
Page({

 
  data: {
    num: 0
  },

  onLoad(e) {
    
  },

  tapLike() {
    console.log(1)
    this.setData({ num: this.data.num+1 })
  },

  
  onShow: function () {

  },

  
})
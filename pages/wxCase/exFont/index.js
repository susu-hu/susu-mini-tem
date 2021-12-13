// pages/wxCase/exFont/index.js
Page({


  data: {
    show: false
  },

  onLoad: function (options) {
    wx.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success: console.log
    })
    // this.getFonts().then(() => {
    //   this.setData({
    //     show: true
    //   })
    // })
  },
  getFonts() {
    let Wof = wx.loadFontFace({
      family: 'Wof',
      source: 'url("https://gitee.com/susuhhhhhh/su-sus-picture/blob/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%AD%97%E5%BF%83%E5%9D%8A%E6%A2%A6%E5%B9%BB%E5%93%A5%E7%89%B9%E4%BD%93(1).ttf")'
    })
    return Promise.all([Wof]).then((res) => {
      console.log(res)
    })
  }

})
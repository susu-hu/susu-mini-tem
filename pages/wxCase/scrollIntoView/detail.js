// pages/wxCase/scrollIntoView/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: "",
    list: [{
        back: 'rgb(223, 177, 116)'
      },
      {
        back: 'pink'
      },
      {
        back: 'rgb(121, 60, 70)'
      },
      {
        back: 'rgb(202, 81, 101)'
      },
    ]
  },

 
  onLoad: function (options) {
    let {
      index
    } = options
    console.log(index)
    if (index != null) {
      this.setData({
        current: index
      })
    }

  },

  
  onShow: function () {
    let a=Number('1231')
    console.log(a)
    console.log(typeof(a))
  },


 
})
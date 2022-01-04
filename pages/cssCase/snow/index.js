var i = 0;
Page({
  data: {
    left: [],
    animation: [],
    tm: 0


    
  },
  onShow: function () {
    this.donghua();
    let j = 14
    while (j--)
      this.data.left.push(Math.floor(Math.random() * 750 + 1))
    this.setData({
      tm: 1,
      left: this.data.left
    })
  },
  donghua: function () {
    setTimeout(function () {
      let animation = wx.createAnimation({})
      animation.translateY(604).opacity(0).step({
        duration: 4000
      })
      animation.translateY(0).opacity(1).step({
        duration: 0
      })
      this.setData({
        ['left[' + i + ']']: Math.floor(Math.random() * 750 + 1),
        ['animation[' + i + ']']: animation.export()
      })

      i++;
      if (i == 14)
        i = 0
    }.bind(this), 500)
    setTimeout(function () {
      this.donghua()
    }.bind(this), 500)

  },
  hide(e) {
    let index = e.currentTarget.dataset['index']
    console.log(index)
    let animation = wx.createAnimation({})
    animation.translateY(0).opacity(0).step({
      duration: 0
    })
    this.setData({
      ['animation[' + index + ']']: animation.export()
    })
  }
})
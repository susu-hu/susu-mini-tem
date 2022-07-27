// pages/another/Like/index.js
Page({

 
  data: {
    //点赞数目
    num: 0,

    // 弹幕
    barrage: '',
    // 弹幕top值
    scrollTop: 0,
    // 弹幕内容
    barrageData: [
      { name: 'Sam', val: 'Hello World', active: false },
      { name: 'Sam', val: 'Hello World Hello World Hello World Hello World Hello World Hello World', active: false },
      { name: 'Sam', val: 'Hello World', active: false },
      { name: 'Sam', val: 'Hello World', active: false },
      { name: '管理管理员', val: '欢迎大家', active: true },
      { name: 'Sam', val: 'Hello World', active: false },
      { name: 'Sam', val: 'Hello World', active: false },
      { name: 'Sam', val: 'Hello World', active: false },
      { name: 'Sam', val: 'Hello World', active: false },
    ]
  },

  onLoad(e) {
    
  },

  tapLike() {
    this.setData({ 
      num: this.data.num+1 
    })
  },
  tapSend() {
    let that = this
    that.data.barrageData.push({
      name: 'Sam',
      val: that.data.barrage,
      active: false
    })
    that.setData({ barrageData: that.data.barrageData })

    wx.createSelectorQuery().select('#message-item').boundingClientRect(function (rect) {
      that.setData({ scrollTop: rect.top * 3 });// 拉到最底部
    }).exec();
  },

  
  onShow: function () {

  },

  
})
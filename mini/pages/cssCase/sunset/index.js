// pages/cssCase/sunset/index.js
Page({


  data: {
    box: [],
  },
  onLoad: function (options) {
    let box = [];
    for (let i = 0; i < 46; i++) {
      box.push({ name: i })
    }
    box.map(item => {
      item.delay = -Math.random() * 4;
      item.width = 80 + ~~(Math.random() * 100);
      item.height = 8 + ~~(Math.random() * 7);
      item.duration = 3 + Math.random() * 3;
      return item;
    })
    this.setData({
      box,
    })

  },
})
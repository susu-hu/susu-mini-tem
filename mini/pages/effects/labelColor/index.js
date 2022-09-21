// pages/randomColor/randomColor.js
Page({
  data: {
    arr: [
      {
        name: '苏苏1.0',
      },
      {
        name: '苏苏2.0',
      },
      {
        name: '苏苏3.0',
      },
      {
        name: '苏苏4.0',
      },
      {
        name: '苏苏5.0',
      }, {
        name: '苏苏就是小苏苏',
      }, {
        name: '加油',
      },
      {
        name: '努力',
      },
      {
        name: '认真',
      },
      {
        name: '卷起来',
      },
    ],
    // 颜色列表
    colorArr: ["#7FFFAA", "#ff7070", "#EEC900", "#4876FF", "#ff6100", "#FFA500",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"
    ],
  },

  onLoad: function (options) {
    this.getData()
  },
  getData() {
    var { colorArr, arr } = this.data;
    arr.forEach(item => {
      item.color = colorArr[Math.floor(Math.random() * colorArr.length)]
    })
    this.setData({
      arr,
    })
    // do {
    //   let random = colorArr[Math.floor(Math.random() * colorArr.length)];
    //   randomColorArr.push(random);
    //   labLen--;
    // } while (labLen > 0)
  }

})
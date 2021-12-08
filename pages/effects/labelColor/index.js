// pages/randomColor/randomColor.js
Page({
  data: {

    //标签云
    labArr: ['曾小贤', '胡一菲', '吕子乔', '陈美嘉', '唐悠悠', '关谷神奇', '张益达', '诺澜', '雨墨', '陆展博'],

    // 颜色列表
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"
    ],
    // 存储随机颜色
    randomColorArr: []
  },

  onLoad: function (options) {
    let that = this,
      labLen = that.data.labArr.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      randomColorArr = [];
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      randomColorArr.push(random);
      labLen--;
    } while (labLen > 0)

    that.setData({
      randomColorArr: randomColorArr
    });
  },




})
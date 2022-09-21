// pages/jsCase/dateSel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
  },
  show() {
    this.setData({
      show: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.changeToRgb("#fff")
    console.log(this.changeToRgb("#fff"))
    console.log(this.getOpacityColor('#000', '.5'))
    var myHex = this.hexify('rgba(57,156,29,0.05)');
    console.log(myHex)
  },
  hexify(color) {
    var values = color
      .replace(/rgba?\(/, '')
      .replace(/\)/, '')
      .replace(/[\s+]/g, '')
      .split(',');
    var a = parseFloat(values[3] || 1),
      r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
      g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
      b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
    return "#" +
      ("0" + r.toString(16)).slice(-2) +
      ("0" + g.toString(16)).slice(-2) +
      ("0" + b.toString(16)).slice(-2);
  },


  getOpacityColor(thisColor, thisOpacity) {
    var theColor = thisColor.toLowerCase();
    //十六进制颜色值的正则表达式
    var r = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (theColor && r.test(theColor)) {
      if (theColor.length === 4) {
        var sColorNew = "#";
        for (var i = 1; i < 4; i += 1) {
          sColorNew += theColor.slice(i, i + 1).concat(theColor.slice(i, i + 1));
        }
        theColor = sColorNew;
      }
      //处理六位的颜色值
      var sColorChange = [];
      for (var i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + theColor.slice(i, i + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + thisOpacity + ")";
    }
    return theColor;
  },
  changeToRgb(color) {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = color.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";
        for (var i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      var sColorChange = [];
      for (var i = 1; i <= 6; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      //此处是返回的颜色 如需要透明度,0.3是指透明度30%，直接返回
      //"rgba(" + sColorChange.join(",") + ",0.3)"
      return "rgba(" + sColorChange.join(",") + ")";
    } else {
      return sColor;
    }
  },

  closeModal() {

  }
})
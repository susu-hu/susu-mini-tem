//index.js
const app = getApp()
var ctx;
var fontSize = 20 //字体大小
var fontFamily = "SimHei" //字体
var code = null //验证码文本

Page({
  data: {
    //验证码属性
    text: '',
    count: 4,
    width: 90,
    height: 35,
  },

  onLoad: function () {
    this.crash()
  },

  crash() {
    this.drawPic(this)
  },

  /**绘制验证码图片**/
  drawPic(that) {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        //清除画布
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillRect(0, 0, 91, 36)
        /**绘制背景色**/
        ctx.fillStyle = that.randomColor(180, 240); //颜色若太深可能导致看不清
        ctx.fillRect(0, 0, that.data.width, that.data.height)
        /**绘制文字**/
        var arr;
        var text = '';
        var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
        var code_temp = "";
        for (var i = 0; i < that.data.count; i++) {
          var txt = str[that.randomNum(0, str.length)];
          code_temp += txt;
          ctx.fillStyle = that.randomColor(50, 160); //随机生成字体颜色
          ctx.font = that.randomNum(fontSize, fontSize + 6) + 'px ' + fontFamily; //随机生成字体大小
          var x = 10 + i * 20;
          var y = that.randomNum(25, 30);
          var deg = that.randomNum(-30, 30);
          //修改坐标原点和旋转角度
          ctx.translate(x, y);
          ctx.rotate(deg * Math.PI / 180);
          ctx.fillText(txt, 5, 0);
          text = text + txt;
          //恢复坐标原点和旋转角度
          ctx.rotate(-deg * Math.PI / 180);
          ctx.translate(-x, -y);
        }
        code = code_temp;
        console.log(code)
        /**绘制干扰线**/
        for (var i = 0; i < 4; i++) {
          ctx.strokeStyle = that.randomColor(40, 180);
          ctx.beginPath();
          ctx.moveTo(that.randomNum(0, that.data.width), that.randomNum(0, that.data.height));
          ctx.lineTo(that.randomNum(0, that.data.width), that.randomNum(0, that.data.height));
          ctx.stroke();
        }
        /**绘制干扰点**/
        for (var i = 0; i < 20; i++) {
          ctx.fillStyle = that.randomColor(0, 255);
          ctx.beginPath();
          ctx.arc(that.randomNum(0, that.data.width), that.randomNum(0, that.data.height), 1, 0, 2 * Math.PI);
          ctx.fill();
        }
      })
  },
  randomNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  /**生成一个随机色**/
  randomColor: function (min, max) {
    var that = this
    var r = that.randomNum(min, max);
    var g = that.randomNum(min, max);
    var b = that.randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

})
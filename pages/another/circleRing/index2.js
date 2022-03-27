//获取应用实例
var app = getApp()
var timer;
Page({
  data: {
    no_click: true
  },
  drawCircle() {
    // if (timer) {
    // clearInterval(timer);
    // }
    function drawArc(s, e) {
      var ctx = wx.createCanvasContext('canvasArcCir');
      ctx.setFillStyle('#000');
      ctx.clearRect(0, 0, 200, 200);
      ctx.draw();
      var x = 100, y = 100, radius = 96;
      ctx.setLineWidth(5);
      ctx.setStrokeStyle('orange');
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(x, y, radius, s, e, false);
      ctx.stroke()
      ctx.draw()

    }
    var step = 1, startAngle = 1.5 * Math.PI, endAngle = 0;
    var animation_interval = 1000, n = 60;
    var animation = () => {
      if (step <= n) {
        endAngle = step * 2 * Math.PI / n + 1.5 * Math.PI;
        drawArc(startAngle, endAngle);
        step++;
        this.setData({
          no_click: false
        })
      } else {
        clearInterval(timer);
        this.setData({
          no_click: true
        })
      }
    };
    timer = setInterval(animation, animation_interval);
  },
  onReady: function () {
    //创建并返回绘图上下文context对象。
    var cxt_arc = wx.createCanvasContext('canvasCircle');
    cxt_arc.setLineWidth(6);
    cxt_arc.setStrokeStyle('#ececec');
    cxt_arc.setLineCap('round');
    cxt_arc.beginPath();
    cxt_arc.arc(100, 100, 96, 0, 2 * Math.PI, false);
    cxt_arc.stroke();
    cxt_arc.draw();
  },
  onUnload() {
    clearInterval(timer);
  }
})
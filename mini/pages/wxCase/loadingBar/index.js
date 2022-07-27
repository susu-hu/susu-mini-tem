// pages/wxCase/loadingBar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scwidth: 0,
    flag: false,
    step: 0
  },
  action() {
    if (!this.data.flag) {
      this.setData({
        scwidth: this.data.scwidth + 3,
        flag: true
      })
      if (this.data.scwidth < 100) {
        setTimeout(() => {
          this.actionDack();
        }, 100)
      } else {
        this.setData({
          scwidth: 0
        })
      }
    }
  },
  actionDack() {
    this.setData({
      scwidth: this.data.scwidth + 3,
    })
    if (this.data.scwidth < 100) {
      setTimeout(() => {
        this.actionDack();
      }, 100)
    } else {
      this.setData({
        scwidth: 0,
        flag: false
      })
    }
  },

  onReady: function () {
    var that = this;
    var cxt = wx.createCanvasContext('canvasCircle');
    cxt.setLineWidth(6);
    cxt.setStrokeStyle('#eaeaea');
    cxt.setLineCap('round');
    cxt.beginPath();
    cxt.arc(100, 100, 96, 0, 2 * Math.PI, false);
    cxt.stroke();
    cxt.draw();
    //加载动画
    var steps = 1, startAngle = 1.5 * Math.PI, endAngle = 0, speed = 100, sec = 100;
    function drawing(s, e) {
      var context = wx.createCanvasContext('canvasRing');
      context.setLineWidth(6);
      context.setStrokeStyle('orange');
      context.setLineCap('round');
      context.beginPath();
      context.arc(100, 100, 96, s, e, false);
      context.stroke();
      context.draw();
    }
    function drawLoading() {
      if (steps < 101) {
        that.setData({
          step: steps
        })
        endAngle = steps * 2 * Math.PI / speed + startAngle;
        drawing(startAngle, endAngle);
        steps++;
      } else {
        clearInterval(this.interval);
      }
    }
    this.interval = setInterval(drawLoading, sec);
  }

})
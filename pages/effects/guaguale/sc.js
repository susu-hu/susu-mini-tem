class Scratch {
  constructor(page, opts) {
    opts = opts || {};
    this.page = page;
    this.canvasId = opts.canvasId || 'canvas';
    this.width = opts.width || 300;
    this.height = opts.height || 300;
    this.maskColor = opts.maskColor || '#dddddd';
    this.size = opts.size || 15,
      //this.r = this.size * 2;
      this.r = this.size;
    this.area = this.r * this.r;
    //this.scale = opts.scale || 0.7;
    this.scale = opts.scale || .5;
    this.totalArea = this.width * this.height;

    this.init();
  }
  init() {
    this.show = false;
    this.clearPoints = [];
    this.ctx = wx.createCanvasContext(this.canvasId, this);
    this.drawMask();
    this.bindTouch();
  }
  drawMask() {
    this.ctx.setFillStyle(this.maskColor);
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.draw();
  }
  bindTouch() {
    this.page.touchStart = (e) => {
      this.eraser(e, true);
    }
    this.page.touchMove = (e) => {
      this.eraser(e, false);
    }
    this.page.touchEnd = (e) => {
      if (this.show) {
        this.page.clearCanvas();

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.draw();
      }
    }
  }
  eraser(e, bool) {
    let len = this.clearPoints.length;
    let count = 0;
    let x = e.touches[0].x,
      y = e.touches[0].y;
    let x1 = x - this.size;
    let y1 = y - this.size;
    if (bool) {
      this.clearPoints.push({
        x1: x1,
        y1: y1,
        x2: x1 + this.r,
        y2: y1 + this.r
      })
    }
    for (let item of this.clearPoints) {
      if (item.x1 > x || item.y1 > y || item.x2 < x || item.y2 < y) {
        count++;
      } else {
        break;
      }
    }
    if (len === count) {
      this.clearPoints.push({
        x1: x1,
        y1: y1,
        x2: x1 + this.r,
        y2: y1 + this.r
      });
    }

    //添加计算已清除的面积，达到标准值后，设置刮卡区域刮干净
    let clearNum = parseFloat(this.r * this.r * len) / parseFloat(this.scale * this.totalArea);
    if (!this.show) {
      this.page.setData({
        clearNum: parseFloat(this.r * this.r * len) / parseFloat(this.scale * this.totalArea)
      })
    }
    if (clearNum > .2) {
      //if (len && this.r * this.r * len > this.scale * this.totalArea) {
      this.show = true;
    }
    this.clearArcFun(x, y, this.r, this.ctx);
    this.ctx.draw(true);
  }
  clearArcFun(x, y, r, ctx) {
    let stepClear = 1;
    clearArc(x, y, r);

    function clearArc(x, y, radius) {
      let calcWidth = radius - stepClear;
      let calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);

      let posX = x - calcWidth;
      let posY = y - calcHeight;

      let widthX = 2 * calcWidth;
      let heightY = 2 * calcHeight;

      if (stepClear <= radius) {
        ctx.clearRect(posX, posY, widthX, heightY);
        stepClear += 1;
        clearArc(x, y, radius);
      }
    }
  }
}

export default Scratch
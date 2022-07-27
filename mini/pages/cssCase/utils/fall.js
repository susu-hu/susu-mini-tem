/**
 * 
 * @param {Object} ctx // canvas 上下文
 * @param {Number} W  //屏幕宽度
 * @param {Number} H  //屏幕高度
 * @param {Array} patternPaths // 图案路径 数组
 * option
 * @param {Array} patternSize // 图案大小
 * @param {Array} difference // 图案大小 差异值  最大的 和 最小的 图案 相差的 像素大小
 * @param {Number} duration // 动画持续是时间  单位秒  Infinity 无限循环
 * @param {Number} G // 下落的加速度 默认：0.05
 * @param {Number} fps // 一秒帧数 默认：60
 * @param {Number} SPEED_LIMIT_X // X方向最大速度 默认：1
 * @param {Number} SPEED_LIMIT_Y // Y方向最大速度 默认：1
 * @param {Number} deltaTime // 每一帧动画执行 增量  默认：23
 * @param {Number} tickCount //图案生成的阈值， 当 ticker 的值 > tickCount 时 生成一个 图案 实例 默认：600
 */

function fall(
  ctx, 
  W, H, 
  patternPaths,
  {
    patternSize = 10,
    difference = 5,
    duration = Infinity, 
    G = 0.05, 
    fps = 60, 
    SPEED_LIMIT_X = 1, SPEED_LIMIT_Y = 1, 
    deltaTime = 23, tickCount = 600
  } = {}
 ){

  let execDate = Date.now();  //第一次执行时间
  let ticker = 0;  //// 控制 一个图案 生成 初始值
  let snows = []; //存取所有 图案 实例


  // 飘落图案构造函数
  /*
    @params x 飘落图片 相对于 canvas 画布左上角 x坐标
    @params y 飘落图片 相对于 canvas 画布左上角 y坐标
    @params radius 调节图案大小
  */
  function Snow(ctx,x, y, radius) {
    this.ctx = ctx;
    // 每个图案的实例的
    this.x = x;     // x坐标
    this.y = y;     // y坐标
  
    this.sx = 0;    // 上一帧和下一帧 x 轴方向 偏移量(初始化)
    this.sy = 0;    // 上一帧和下一帧 y 轴方向 偏移量(初始化)  sy 偏移量会随着 下落递增 存在加速度G
    this.deg = 0;   // 旋转角度 (初始化)
    this.radius = radius;  // 半径
    this.ax = Math.random() < 0.5 ? 0.005 : -0.005; // 初始化 x 轴的方向  正 向右飘  负 向左飘   0.005 x轴上的运动增量 相当于 y 轴上的 G
    
    this.name = Math.floor( Math.random() * patternPaths.length ); //随机获取  新 年 快 乐 中的 任意一张图
  }

  Snow.prototype.draw = function() {
    const radius = this.radius;
    this.ctx.save();  //保存绘图上下文
    this.ctx.translate(this.x, this.y);  //对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。

    this.ctx.rotate(this.deg * Math.PI / 180); //旋转度数
    /**
     drawImage(imageResource, dx, dy, dWidth, dHeight)
       x 轴的位置 y 轴的位置 允许对绘制的imageResource进行缩放, ....
    */
    this.ctx.drawImage(patternPaths[this.name], -radius, radius * 1.8, radius * 2, radius * 2);  
    this.ctx.restore();  //恢复之前保存的绘图上下文
  }

  // 飘落  动起来
  Snow.prototype.update = function() {
    //随机图案运动过程中的 角度变化
    const deltaDeg = Math.random() * 0.6 + 0.2;   
    this.sx += this.ax; 
    //当x轴方向的加速度达到 速度上线时 进行反向运动
    if (this.sx >= SPEED_LIMIT_X || this.sx <= -SPEED_LIMIT_X) {
      this.ax *= -1;
    }

    if (this.sy < SPEED_LIMIT_Y) {  //下落速度 为达到速度上线，进行加速度
      this.sy += G;
    }
    this.deg += deltaDeg;
    this.x += this.sx;
    this.y += this.sy;
  }


  //重复生成 图案实例 函数
  function loop() {
    ctx.clearRect(0, 0, W, H);  // 清空画布
    ticker += deltaTime;
    if(!duration || duration === Infinity){
      if ( ticker > tickCount ) {
        snows.push(
          new Snow(ctx, Math.random() * W, 0, Math.random() * difference + patternSize)
        );
        ticker %= tickCount;
      }
    }else if ( ticker > tickCount && new Date() < new Date(execDate + duration * 1000) ) { //飘落时间限制
      snows.push(
        new Snow(ctx, Math.random() * W, 0, Math.random() * difference + patternSize)
      );
      ticker %= tickCount;
    }

    snows.map(function(s, i) {
      s.update();
      s.draw();
      //飘出 屏幕底部 的 实例 移除
      if (s.y >= H) {
        snows.splice(i, 1);
      }
    });
    // 绘制
    ctx.draw();
  }


  function init() {
    setInterval( loop , 1000/ fps);
  }
  init();
}

module.exports = fall

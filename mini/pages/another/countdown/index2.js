// pages/another/countdown/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finish_list: [{
        head_img: 'https://i.postimg.cc/76br1jzJ/susu1.jpg',
        nickname: '苏苏就是小苏苏'
      },
      {
        head_img: 'https://i.postimg.cc/76br1jzJ/susu1.jpg',
        nickname: 'susu!'
      },
      {
        head_img: 'https://i.postimg.cc/76br1jzJ/susu1.jpg',
        nickname: '黄猪猪!'
      }
    ]
  },
  onLoad: function () {
    // wx.getSystemInfo({
    //   success: (res) => {
    //     let canvasWidth = (res.screenWidth - 20) * 2 // 设置canvas宽度，屏幕宽度-20的2倍
    //     let canvasHeight = (res.screenHeight - 500) * 2 // 设置canvas高度，屏幕高度-500的2倍
    //     // 定义画布对象
    //     const MyCanvas = wx.createCanvasContext('MyCanvas')
    //     // 在画布上绘制文本
    //     MyCanvas.setFontSize(20) // 文本大小
    //     MyCanvas.fillText('哈哈哈哈', 20, 30) // 文本、x轴位置、y轴位置
    //     // 在画布上绘制矩形
    //     MyCanvas.rect(20, 40, 100, 50) // x轴位置、y轴位置、宽度、高度
    //     // 在画布上绘制圆形
    //     // 创建一个圆可以指定起始弧度为0，终止弧度为2 * Math.PI
    //     MyCanvas.arc(70, 150, 50, 0, 2 * Math.PI) // 圆心的x坐标、圆心的y坐标、圆的半径、起始弧度（在3点钟方向）、终止弧度
    //     MyCanvas.setFillStyle('#f00') // 填充背景颜色
    //     MyCanvas.fill() // 用fill方法真正的画到canvas中
    //     MyCanvas.draw() //绘制
    //     this.setData({
    //       canvasWidth: canvasWidth,
    //       canvasHeight: canvasHeight,
    //       screenWidth: canvasWidth / 2,
    //       screenHeight: canvasHeight / 2
    //     })
    //   },
    // })
  },
})
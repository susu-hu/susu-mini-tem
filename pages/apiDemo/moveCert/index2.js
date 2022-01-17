// pages/apiDemo/moveCert/index2.js
Page({

  data: {
    sildeBlockCont: '', //滑块背景图
  },
  onReady: function () {
    this.puzzleVerify = this.selectComponent("#puzzleVerify")
  },
  getCode() {
    this.puzzleVerify.visidlisd()
  },
  // 滑块验证成功操作
  countDown() { }
})
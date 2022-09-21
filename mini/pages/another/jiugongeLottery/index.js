Page({
  data: {
    dishClass: '',
    lock: false,//锁，防止重复点击
    luckys: {
      1: 'OPPO手机',
      2: '充电器',
      3: '888红包',
      4: '188红包',
      5: '88红包',
      6: '18.8红包',
      7: '8.8红包',
      8: '6.88红包',
    }
  },

  tapLucky() {
    let lock = this.data.lock
    let luckys = this.data.luckys
    let seed = parseInt(Math.ceil(8 * Math.random()))
    if (lock) return

    wx.showLoading({ title: '抽奖中···' })
    this.setData({ lock: true })
    setTimeout(() => {// 模拟接口请求
      wx.hideLoading()
      this.setData({ dishClass: 'lucky0' })// 清除动画
      setTimeout(() => { 
        this.setData({ dishClass: 'lucky' + seed })// 启动动画
      }, 100);
      setTimeout(() => {
        wx.showToast({ title: "抽中了" + luckys[seed], icon: 'none' })
        this.setData({ lock: false })
      }, 3000);
    }, 1000);
  }

})
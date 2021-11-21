// pages/jsCase/onLoaction/index.js
Page({

  // 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
  // 开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。
  // 地图相关使用的坐标格式应为 gcj02。高频率调用会导致耗电，如有需要可使用持续定位接口
  //  wx.onLocationChange
  data: {

  },
  show() {
    wx.showToast({
      title: 'xixihhasd a',
    })
  },


  onLoad: function () {
    //后台定位
    // wx.startLocationUpdateBackground({
    //   success(res) {
    //     console.log('开启后台定位', res)
    //   },
    //   fail(res) {
    //     console.log('开启后台定位失败', res)
    //   }
    // })
  },
  onReady() {
    // //获取变化的地址
    // wx.onLocationChange(function (res) {
    //     console.log("location has change!")
    //     console.log(res)
    //   }),
    //   //通过不断刷新页面，来获取新的地址
    //   setTimeout(this.onReady, 1000)
  },

  // // 这个函数 在 onLoad内触发 或 点击触发
  // async location() {
  //   const that = this;
  //   try {
  //     await that.getWxLocation()
  //   } catch (error) {
  //     wx.showModal({
  //       title: '温馨提示',
  //       tip: '获取权限失败，需要获取您的地理位置才能为您提供更好的服务！是否授权获取地理位置？',
  //       showCancel: true,
  //       confirmText: '前往设置',
  //       cancelText: '取消',
  //       sureCall() {
  //         that.toSetting()
  //       },
  //       cancelCall() {}
  //     })
  //     return
  //   }
  // },

  // // 获取位置信息
  // getWxLocation() {
  //   wx.showLoading({
  //     title: '定位中...',
  //     mask: true,
  //   })
  //   return new Promise((resolve, reject) => {
  //     const _locationChangeFn = (res) => {
  //       console.log('location change', res)
  //       wx.hideLoading()
  //       wx.offLocationChange(_locationChangeFn)
  //     }
  //     wx.startLocationUpdate({
  //       success: (res) => {
  //         wx.onLocationChange(_locationChangeFn)
  //         resolve()
  //       },
  //       fail: (err) => {
  //         reject()
  //       }
  //     })
  //   })
  // },

  // // 调起客户端小程序设置界面
  // toSetting() {
  //   wx.openSetting({
  //     success(res) {
  //       if (res.authSetting["scope.userLocation"]) {
  //         this.authorization()
  //       }
  //     }
  //   })
  // },






})
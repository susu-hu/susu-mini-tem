// pages/apiDemo/accelerometer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotateXY: 0,
    rotateYZ: 0,
    rotateZX: 0,
    backgroundColor: '#000000',
    degreesXY: 0,
    degreesYZ: 0,
    degreesZX: 0,
    isOnAccelerometerChange: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.onAccelerometerChange(function (res) {
      if (!that.data.isOnAccelerometerChange) {
        return
      }
      var rotateXY = Math.atan2(res.x, res.y) * 180 / Math.PI
      var rotateYZ = Math.atan2(res.y, res.z) * 180 / Math.PI
      var rotateZX = Math.atan2(res.z, res.x) * 180 / Math.PI
      if (rotateXY < 0) {
        that.setData({
          rotateXY: rotateXY,
          degreesXY: (rotateXY + 180).toFixed(2),
          rotateYZ: rotateYZ,
          rotateZX: rotateZX
        })
      } else {
        that.setData({
          rotateXY: rotateXY,
          degreesXY: -(180 - rotateXY).toFixed(2),
          rotateYZ: rotateYZ,
          rotateZX: rotateZX
        })
      }
    })
  },
  onUnload: function () {
    this.setData({
      isOnAccelerometerChange: false
    })
    wx.stopAccelerometer({
    })
  }
})


/**
 *
 * #小程序加速度计api一共就三个方法。
  1、wx.onAccelerometerChange(CALLBACK) 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，每调用一次就会注册一个。
  2、wx.startAccelerometer(OBJECT) 开始监听方法
  坑来了。。。没错就是第三方法
  3、wx.stopAccelerometer(OBJECT) 停止监听，这个方法是停止了监听，再晃动手机不会走回调方法了，但是它并不移除监听
  那么问题来了，在某个页面每调用一次第一个api它就会注册一个监听，第三个api并不能移除掉监听，导致你再次开启的时候就会有多个回调方法在同时进行。就会出现问题。那么怎么避免呢？
  解决方法：在微信小程序启动的时候就调用监听方法，在回到方法中通过pages能够获取到当前的页面，在当前页面调用你想回调的方法就好了。
  onLaunch: function () {
    wx.onAccelerometerChange((e) => {
      var pages = getCurrentPages()
      var currentPage = pages[pages.length - 1]
      if (currentPage.onAccelerometerChange) {
        currentPage.onAccelerometerChange(e)
      }
    })
  }
 */

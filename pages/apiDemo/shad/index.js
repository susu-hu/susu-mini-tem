var socketOpen = false;
var count = 0;
var SocketTask;
var url = 'xxxx'; //ws地址
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onReady: function () {
    var that = this;
    // 监听协议
    SocketTask.onOpen(res => {
      socketOpen = true;
      console.log('监听 WebSocket 连接打开事件。', res)
    })
    SocketTask.onClose(onClose => {
      console.log('监听 WebSocket 连接关闭事件。', onClose)
      socketOpen = false;
      that.webSocket()
    })
    SocketTask.onError(onError => {
      console.log('监听 WebSocket 错误。错误信息', onError)
      socketOpen = false
    })
    SocketTask.onMessage(res => {
      console.log('监听 WebSocket 连接打开事件。', res)
    })
  },
  onShow: function () {
    var that = this;
    that.initAnimation();
    //开始监听加速度数据
    wx.startAccelerometer({
      interval: 'ui'
    });
    //监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听
    wx.onAccelerometerChange(function (e) {
      if (e.x > .7 && e.y > .7) {
        ++count;
        if (count % 2 == 0) {
          setTimeout(function () {
            that.shake();
          }, 400);
          that.sendSocketMessage();
          console.log(count);
        }
      }
    });
    if (!socketOpen) {
      that.webSocket()
    }
  },
  onHide: function () {
    SocketTask.close(function (close) {
      console.log('关闭 WebSocket 连接。', close)
    })
    //停止监听加速度数据 
    wx.stopAccelerometer();
  },
  onUnload: function () {
    wx.stopAccelerometer();
  },
  //创建一个动画实例
  initAnimation: function () {
    var that = this;
    that.animation = wx.createAnimation({
      duration: 100,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: 'center bottom',
      success: function (res) {
        console.log(res)
      }
    });
  },
  // 动画
  shake: function () {
    var that = this;
    wx.vibrateLong();
    that.animation
      .translate(25).rotate(20).step()
      .translate(0).step()
      .translate(-25).rotate(-20).step()
      .translate(5).rotate(5).step()
      .translate(0).step()
      .translate(-5).rotate(-5).step()
      .translate(0).rotate(0).step();
    that.setData({
      animation: that.animation.export()
    });
  },
  webSocket: function () {
    // 创建Socket
    SocketTask = wx.connectSocket({
      url: url,
      data: 'data',
      header: {
        'content-type': 'application/json'
      },
      method: 'post',
      success: function (res) {
        console.log('WebSocket连接创建', res)
      },
      fail: function (err) {
        wx.showToast({
          title: '网络异常！',
        })
        console.log(err)
      },
    })
  },
  // 发送数据
  sendSocketMessage: function () {
    var that = this;
    var message = {
      "user_id": userid,
      "user_name": username,
      "user_avatar": useravatar,
      "user_phone": userphone
    }
    console.log('通过 WebSocket 连接发送数据', JSON.stringify(message))
    SocketTask.send({
      data: JSON.stringify(message)
    }, function (res) {
      console.log('已发送', res)
    })
  },
})
/**
 *
 *     wx.startAccelerometer({
      interval: 'game',
      success:function(){
        console.log('调取成功')
        wx.onAccelerometerChange(function(res){
          if(res.x > 3 || res.y >3 || res.z>3){
            console.log('进来了')
            wx.showToast({
              title: '摇一摇成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
 */
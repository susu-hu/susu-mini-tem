Page({


  data: {
    innerAudioContext: "",
    ifFlag: true,
  },
  onLoad() {
    // const innerAudioContext = wx.createInnerAudioContext()
    // innerAudioContext.autoplay = false  // 是否自动开始播放，默认为 false
    // innerAudioContext.loop = false  // 是否循环播放，默认为 false
    // wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
    //   obeyMuteSwitch: false,   // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
    //   success: function (e) {
    //   },
    //   fail: function (e) {
    //   }
    // })
    // innerAudioContext.src="/pages/jsCase/img/btnaudio.mp3"
    // // innerAudioContext.src = 'https://yjh-jlb.oss-cn-hangzhou.aliyuncs.com/dc86032b76143085bff649dd790f74fb.mp3';  // 音频资源的地址
    // this.setData({
    //   innerAudioContext,
    // })
  },
  audioPlay() {

    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false  // 是否自动开始播放，默认为 false
    innerAudioContext.loop = false  // 是否循环播放，默认为 false
    wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
      obeyMuteSwitch: false,   // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
      success: function (e) {
      },
      fail: function (e) {
      }
    })
    innerAudioContext.src="/pages/jsCase/img/btnaudio.mp3"
    innerAudioContext.play()
    innerAudioContext.onPlay(()=>{
      // 监听音频播放事件
      setTimeout(() => {
        innerAudioContext.stop()
      }, 1000);
    })
    // this.data.innerAudioContext.play()


    // if (this.data.ifFlag) {
    //   this.data.innerAudioContext.play()
    // } else {
    //   this.data.innerAudioContext.pause()
    // }
    // this.setData({
    //   ifFlag: !this.data.ifFlag
    // })
    // wx.navigateTo({
    //   url: '/pages/jsCase/keyWordHight/index',
    // })
    // this.data.innerAudioContext.seek(0)

    // if (this.data.innerAudioContext.play()) {
    //   setTimeout(() => {
    //     this.data.innerAudioContext.pause()
    //   }, 500)
    // }
    // innerAudioContext.onPlay(() => {  // 监听音频播放事件
    //   console.log('开始播放')
    // })
    // innerAudioContext.onError((res) => { // 监听音频播放错误事件
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })
  },
  onUnload() {
    // this.data.innerAudioContext.pause()
  },
  cantcatme() {
    wx.makePhoneCall({
      phoneNumber: '13423453456', //仅为示例，并非真实的电话号码
      success() {
        console.log('接口调用成功的回调函数')
      },
      fail() {
        console.log('接口调用失败的回调函数')
      },
      complete() {
        console.log('接口调用结束的回调函数（调用成功、失败都会执行）')
      }
    })

  }


})
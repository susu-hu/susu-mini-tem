// pages/effects/audioCust/index.js
Page({

  data: {
    checked: false,
  },

  onShow: function () {
    this.player(wx.getBackgroundAudioManager())
  },
  checkMusic() {
    console.log(11)
    this.setData({
      checked: !this.data.checked
    })
    if (this.data.checked) {
      wx.getBackgroundAudioManager().pause();
    } else {
      this.player(wx.getBackgroundAudioManager())
    }
  },
  player(e) {
    e.title = '苏苏的音乐'
    e.src = "http://music.163.com/song/media/outer/url?id=36587407.mp3"
    //音乐播放结束后继续播放此音乐，循环不停的播放
    e.onEnded(() => {
      this.player(wx.getBackgroundAudioManager())
    })
  },

  // 页面卸载时候暂停播放（不加页面将一直播放）
  onUnload: function () {
    wx.getBackgroundAudioManager().stop();
  },
  // 小程序隐藏时候暂停播放（不加页面将一直播放）
  onHide() {
    wx.getBackgroundAudioManager().stop();
  },
  toNext() {
    wx.navigateTo({
      url: '/pages/jsCase/draw/index',
    })
  }
})
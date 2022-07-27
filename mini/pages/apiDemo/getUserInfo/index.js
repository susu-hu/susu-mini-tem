import baseUrl from '../../../config'
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  onLoad(e) {
    console.log(baseUrl.host)
    // wx.request({
    //   url: baseUrl.host + '/a',
    //   data: 1,
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  },
  onChooseAvatar(e) {
    console.log(e)
    const {
      avatarUrl
    } = e.detail
    this.setData({
      avatarUrl,
    })
  }
})
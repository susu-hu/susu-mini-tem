Page({
  data: {
    bgTextStyle: 'dark',
    scrollTop: '200rpx',
    bgColor: '#ff0000',
    bgColorTop: '#00ff00',
    bgColorBottom: '#0000ff',
    nbTitle: '苏苏小苏苏',
    nbLoading: false,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ccc',
  },
  onLoad() {
    this.setData({
      nbTitle: '新标题',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
    setTimeout(()=>{
      this.setData({
        nbLoading:false
      })
    },3000)
  }
})
// pages/effects/popMenu2/index.js
Page({

  data: {
    isShow: true,
    menuList: [
      {
        name: '菜单一',
        src: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        url: ''
      },
      {
        name: '菜单二',
        src: 'https://i.postimg.cc/Gm7KjGmN/111.jpg',
        url: ''
      },
      {
        name: '菜单三',
        src: 'https://i.postimg.cc/Bv28vfkg/222.webp',
        url: ''
      },
      {
        name: '菜单四',
        src: 'https://i.postimg.cc/65STLQNc/333.webp',
        url: ''
      },
    ]
  },
  click() {
    this.setData({
      isShow: !this.data.isShow
    })
    if (this.data.isShow) {
      this.setData({
        maskAnimation: 'maskClose',
        btnAnimation: 'menuClose'
      })
    } else {
      this.setData({
        maskAnimation: 'maskOpen',
        btnAnimation: 'menuOpen'
      })
    }
  },
  preventdefault() {
    return false;
  }
})
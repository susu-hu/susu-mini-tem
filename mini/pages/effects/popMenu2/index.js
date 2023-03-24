// pages/effects/popMenu2/index.js
Page({

  data: {
    hidden: true,//是否隐藏菜单
    // 菜单列表
    menuList: [
      {
        name: "菜单一",
        src: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        url: ''
      },
      {
        name: "菜单二",
        src: 'https://i.postimg.cc/Gm7KjGmN/111.jpg',
        url: ''
      },
      {
        name: "菜单三",
        src: 'https://i.postimg.cc/Bv28vfkg/222.webp',
        url: ''
      },
      {
        name: "菜单四",
        src: 'https://i.postimg.cc/65STLQNc/333.webp',
        url: ''
      },
      {
        name: "菜单6",
        src: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        url: ''
      },
    ],
    className: '',//样式名称
  },

  handleClick() {
    let { hidden } = this.data;
    this.setData({
      hidden: !hidden,
      className: !hidden ? 'hide' : 'show'
    })
  }
})
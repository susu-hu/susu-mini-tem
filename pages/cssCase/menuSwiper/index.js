const app = getApp()

Page({
  data: {
    lists: []
  },
  onShow() {
    this.getData()
  },
  /**
   * 获取菜单
   * @param {*} e 
   */
  getData() {
    let dataList = [
      {
        name: '菜单1',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单2',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单3',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单4',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单5',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单6',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单7',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单8',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单9',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单10',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单11',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单12',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单13',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单14',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单15',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单16',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
      {
        name: '菜单17',
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
      },
    ],
      arrLen = 8, lists = [];
    for (var i = 0; i < dataList.length; i += arrLen) {
      lists.push(dataList.slice(i, i + arrLen));
    }
    this.setData({
      lists,
    })

  },
  /**
   * 轮播图切换
   * @param {*} e 
   */
  swiperChange: function (e) {
    if (e.detail.source == "touch" || e.detail.source == "autoplay") {
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },
})
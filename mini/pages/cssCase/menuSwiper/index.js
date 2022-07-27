const app = getApp()
const listMenu = [
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
];
Page({
  data: {
    swiperCurrent: 0,//当前所在滑块的 index
    lists: [],
    arrLen: 10,//分组数 最大值10,当为奇数时候，默认加1提示为偶数
    oneLen: 0,//一行展示多少
  },
  onShow() {
    this.getData()
  },
  /**
   * 获取菜单
   * @param {*} e 
   */
  getData() {
    let dataList = listMenu,
      { arrLen, oneLen } = this.data, lists = [],
      isOdd = (arrLen % 2) === 0;
    if (!isOdd && arrLen > 5) arrLen = arrLen + 1;
    arrLen = arrLen > 10 ? 10 : arrLen;
    oneLen = arrLen > 5 ? arrLen / 2 : arrLen;
    for (var i = 0; i < dataList.length; i += arrLen) {
      lists.push(dataList.slice(i, i + arrLen));
    }
    this.setData({
      lists, arrLen,
      oneLen,
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
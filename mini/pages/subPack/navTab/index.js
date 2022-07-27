// pages/subPack/navTab/index.js
Page({
  data: {
    navList: ['正在进行', '即将开始', '已结束'],
    nav_type: 0,
    list: [
      {
        color: "linear-gradient(to right, #a8edea 0%, #fed6e3 100%);"
      },
      {
        color: "linear-gradient(to right, #acb6e5 , #86fde8 );"
      },
      {
        color: "linear-gradient(to right, #ed4264 , #ffedbc );"
      },
    ],
    bg_color: 'linear-gradient(to right, #a8edea 0%, #fed6e3 100%)',
    show: false,
  },
  changeType: function (e) {
    let {
      index
    } = e.currentTarget.dataset, { list } = this.data;
    if (this.data.type === index || index === undefined) {
      return false;
    } else {
      this.setData({
        nav_type: index,
        bg_color: list[index].color,
        show: true
      }, setTimeout(() => {
        this.setData({
          show: false
        })
      }, 600))
    }
  },



})
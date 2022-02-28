// pages/wxCase/pubuliu3/index.js
let leftHeight = 0,
  rightHeight = 0; //分别定义左右两边的高度
let query;
Page({
  data: {
    list: [{
        title: '1',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png',
      },
      {
        title: '2',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png',
      },
      {
        title: '3',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/3.png',
      },
      {
        title: '4',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/4.png',
      },
      {
        title: '5',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/5.png',
      },
      {
        title: '6',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/6.png',
      },
      {
        title: '7',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png'
      }, {
        title: '8',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/3.png',
      }, {
        title: '9',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png'
      }, {
        title: '7',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/5.png'
      }, {
        title: '8',
        url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/6.png'
      },
    ],
    leftList: [],
    rightList: []
  },
  onReady() {
    this.isLeft();
  },
  async isLeft() {
    const {
      list,
      leftList,
      rightList
    } = this.data;
    query = wx.createSelectorQuery();
    for (const item of list) {
      leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item); //判断两边高度，来觉得添加到那边
      await this.getBoxHeight(leftList, rightList);
    }
  },
  getBoxHeight(leftList, rightList) { //获取左右两边高度
    return new Promise((resolve, reject) => {
      this.setData({
        leftList,
        rightList
      }, () => {
        query.select('#left').boundingClientRect();
        query.select('#right').boundingClientRect();
        query.exec((res) => {
          setTimeout(() => {
            leftHeight = res[0].height; //获取左边列表的高度
            rightHeight = res[1].height; //获取右边列表的高度
            console.log('左边', leftHeight, '右边', rightHeight)
            resolve();
          }, 200)
        });
      });
    })
  }
})
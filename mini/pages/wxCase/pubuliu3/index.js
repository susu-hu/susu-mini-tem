// pages/wxCase/pubuliu3/index.js
let leftHeight = 0,
  rightHeight = 0; //分别定义左右两边的高度
let query;
Page({
  data: {
    list: [{
        name: '苏苏',
        num: '1',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: 'https://img1.baidu.com/it/u=610726533,1686239110&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
        avatar: 'https://img1.baidu.com/it/u=610726533,1686239110&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
      },
      {
        name: '苏苏6',
        num: '1',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: 'https://img0.baidu.com/it/u=1555018837,2431012166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        avatar: 'https://img0.baidu.com/it/u=1555018837,2431012166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
      },
      {
        name: '苏苏2',
        num: '1',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: 'https://img2.baidu.com/it/u=2656232546,4221523240&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=777',
        avatar: 'https://img2.baidu.com/it/u=2656232546,4221523240&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=777'
      },

      {
        name: '苏苏3',
        num: '1',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: 'https://img1.baidu.com/it/u=2602506082,2229028687&fm=253&fmt=auto&app=138&f=JPEG?w=796&h=500',
        avatar: 'https://img1.baidu.com/it/u=2602506082,2229028687&fm=253&fmt=auto&app=138&f=JPEG?w=796&h=500'
      },
      {
        name: '苏苏4',
        num: '1',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: 'https://img1.baidu.com/it/u=3462460603,3220043498&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=458',
        avatar: 'https://img1.baidu.com/it/u=3462460603,3220043498&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=458'
      },
      {
        name: '苏苏5',
        num: '1',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: 'https://img0.baidu.com/it/u=3184989322,3773788620&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
        avatar: 'https://img0.baidu.com/it/u=3184989322,3773788620&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667'
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
    query = wx.createSelectorQuery().in(this);
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
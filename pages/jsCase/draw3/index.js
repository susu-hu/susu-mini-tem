Page({

  /**
   * 页面的初始数据
   */
  data: {
    remian_num: 5, //剩余抽奖的次数
    prize_list: [{
        id: "001",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
      },
      {
        id: "002",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '谢谢惠顾',
      },
      {
        id: "003",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
      },
      {
        id: "004",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
      },
      {
        id: "005",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
      },
      {
        id: "006",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',

      },
      {
        id: "007",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
      },
      {
        id: "008",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
      },
    ],
    lock: false, //防止重复点击
    prizeListIndex: [0, 1, 2, 4, 7, 6, 5, 3], //抽奖顺序的索引
    prizeListIndex1: [0, 1, 2, 7, 3, 6, 5, 4], //奖品索引
  },

  onShow: function () {
    this.getData();
  },
  getData() {
    let prize_list = this.data.prize_list;
    let pIndex = this.data.prizeListIndex1;
    for (let i in prize_list) {
      console.log(i)
      prize_list[i].active = false;
      prize_list[i].index = pIndex[i];
    }
    this.setData({
      prize_list
    })
  }

})
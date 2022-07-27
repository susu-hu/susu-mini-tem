Page({

  /**
   * 页面的初始数据
   */
  data: {
    remian_num: 5, //剩余抽奖的次数
    prize_list: [],
    lock: false, //防止重复点击
    prizeListIndex: [0, 1, 2, 4, 7, 6, 5, 3], //抽奖顺序的索引
    prizeListIndex1: [0, 1, 2, 7, 3, 6, 5, 4], //奖品索引
    over: false, //是否加载完奖品数据
  },

  onShow: function () {
    this.getDraw();
  },
  getDraw() {
    var cacheData = wx.getStorageSync('draw_data'),
      prize_list = cacheData ? JSON.parse(cacheData) : {} //缓存数据，防止页面空白
    this.setData({
      prize_list,
    })
    this.getData()
  },
  getData() {
    var list = [{
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
    ];
    setTimeout(() => {
      let prize_list = list;
      let pIndex = this.data.prizeListIndex1;
      for (let i in prize_list) {
        prize_list[i].active = false;
        prize_list[i].index = pIndex[i];
      }
      this.setData({
        prize_list,
        over: true
      })
      wx.setStorageSync('draw_data', JSON.stringify(prize_list))
    }, 500)
  },

  // 范围随机数
  randomRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  },
  // 抽奖动画
  Timer: null,
  LotteryEnd: false, //抽奖结束
  nowRunIndex: 0, //ative样式的索引，
  luckChose(luckIndex) {
    return new Promise((resolve, reject) => {
      let that = this
      let maxTime = this.randomRange(2500, 4000) //抽奖的时间2.5s-4s之间
      let time_speed = 0.01; //速率
      if (this.nowRunIndex == 0) { //初始化从索引0开始显示抽奖激活的边框
        this.setData({
          'prize_list.[0].active': true
        })
      }

      function lotteryRun(time) {
        that.Timer = setTimeout(() => {
          let list = that.data.prize_list;
          ++that.nowRunIndex;
          that.nowRunIndex >= that.data.prizeListIndex.length ? that.nowRunIndex = 0 : '';
          let Pindex = that.data.prizeListIndex[that.nowRunIndex];
          list.map((item, index) => {
            item.active = Pindex == index;
          })
          that.setData({
            prize_list: list
          })
          if (that.LotteryEnd && luckIndex == that.nowRunIndex) {
            clearTimeout(that.Timer);
            that.LotteryEnd = false;
            that.setData({
              lock: false
            })
            resolve(list.filter(v => {
              return v.active
            }))
          } else {
            time_speed += 0.5;
            lotteryRun(time + (time_speed));
          }
        }, time);
      }

      lotteryRun(80);
      setTimeout(() => {
        this.LotteryEnd = true;
      }, maxTime);
    })
  },
  // 抽奖活动
  lottery() {
    if (!this.data.over) return
    // 防止重复点击
    if (this.data.lock) return
    this.setData({
      lock: true
    })
    let {
      prize_list
    } = this.data;
    if (this.data.remian_num.length <= 0 || this.data.prize_list.length === 0) return;
    setTimeout(() => {
      console.log('12312')
      let id = "007",
        currIndex = "";
      for (let i in prize_list) {
        if (id == prize_list[i].id) {
          currIndex = prize_list[i].index
        }
      }
      console.log(currIndex)
      this.luckChose(currIndex).then(res => {
        console.log(res)
        wx.showToast({
          title: '你抽中了' + res[0].name,
          icon: 'none'
        })
      })
    }, 500)
  },

})
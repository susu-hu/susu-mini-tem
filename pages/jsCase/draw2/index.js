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
        active: false,
      },
      {
        id: "002",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '谢谢惠顾',
        active: false,
      },
      {
        id: "003",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        id: "004",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        id: "005",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        id: "006",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        id: "007",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        id: "008",
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
    ],
    lock: false, //防止重复点击
    prizeListIndex: [0, 1, 2, 4, 7, 6, 5, 3], //抽奖顺序的索引
    luckIndex: null, //抽中的索引
  },


  onLoad: function (options) {

  },

  onShow: function () {

  },
  // 禁止弹框底层滑动
  catchTouchMove: function () {
    return false;
  },
  // 范围随机数
  randomRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  },
  // 抽奖活动
  lottery() {
    // 防止重复点击
    if (this.data.lock) return
    this.setData({
      lock: true
    })
    // 清空上一次选中的索引
    this.setData({
      luckIndex: null
    })
    this.runLuck(80);
    // 调用抽奖接口，拿到相应的商品选中的索引luckIndex
    // 测试1s之后拿到索引
    setTimeout(() => {
      let id = "007"; //假设返回的中奖选项的id为这个,决定中奖项
      this.data.prize_list.forEach((item, index) => {
        if (item.id == id) {
          console.log('根据id拿到的当前的索引是', index)
          this.data.prizeListIndex.forEach((item0, index0) => {
            if (item0 == index) {
              console.log('获取相应的抽奖索引', index0)
              this.setData({
                luckIndex: index0,
              })
            }
          })
        }
      })
    }, 1000)
  },
  // 抽奖动画
  Timer: null,
  LotteryEnd: false, //抽奖结束
  nowRunIndex: 0, //ative样式的索引，
  luckChose(luckIndex) {
    return new Promise((resolve, reject) => {
      console.log('中奖索引啊啊啊啊啊啊啊啊啊啊啊啊啊啊', luckIndex)
      let that = this;
      let maxTime = this.randomRange(2500, 4000) //抽奖的时间2.5s-4s之间
      let time_speed = 0.01; //速率
      function lotteryRun(time) {
        let list = that.data.prize_list;
        that.Timer = setTimeout(() => {
          that.setList()
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
  // 抽奖开始时候，未选中状态
  runLuck(time) {
    let that = this;
    if (this.nowRunIndex == 0) { //初始化从索引0开始显示抽奖激活的边框
      this.setData({
        'prize_list[0].active': true
      })
    }
    that.Timer = setTimeout(() => {
      that.setList()
      if (this.data.luckIndex == null || this.data.luckIndex == undefined) {
        that.runLuck(80)
      } else {
        that.luckChose(this.data.luckIndex).then(e => {
          wx.showToast({
            title: '抽中了' + e[0].name,
            icon: 'none'
          })
        })
      }
    }, time);
  },
  setList() {
    let list = this.data.prize_list;
    ++this.nowRunIndex;
    // console.log('现在的索引', this.nowRunIndex)
    this.nowRunIndex >= this.data.prizeListIndex.length ? this.nowRunIndex = 0 : '';
    let Pindex = this.data.prizeListIndex[this.nowRunIndex];
    // console.log('奖品列表对应的索引', Pindex)
    list.map((item, index) => {
      item.active = Pindex == index;
    })
    this.setData({
      prize_list: list
    })
  }
})
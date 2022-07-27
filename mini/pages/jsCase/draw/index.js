Page({

  /**
   * 页面的初始数据
   */
  data: {
    remian_num: 5, //剩余抽奖的次数
    prize_list: [{
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '谢谢惠顾',
        active: false,
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
      {
        icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        name: '扫地机器人',
        active: false,
      },
    ],
    lock: false, //防止重复点击
    prizeListIndex: [0, 1, 2, 4, 7, 6, 5, 3], //抽奖顺序的索引
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
    this.luckChose(this.randomRange(0, 7)).then(e => {
      wx.showToast({
        title: '成抽中了' + e[0].name,
        icon: 'none'
      })
    })
  },
  // 抽奖动画
  Timer: null,
  LotteryEnd: false, //抽奖结束
  nowRunIndex: 0, //ative样式的索引，
  luckChose(luckIndex) {
    return new Promise((resolve, reject) => {
      console.log("中奖索引>>>", luckIndex)
      let that = this
      let maxTime = this.randomRange(2500, 4000) //抽奖的时间2.5s-4s之间
      console.log(maxTime)
      let rI = 0.01
      console.log(this.nowRunIndex)
      if (this.nowRunIndex == 0) { //初始化从索引0开始显示抽奖激活的边框
        this.setData({
          'prize_list[0].active': true
        })
      }

      function runAni(_t) {
        that.Timer = setTimeout(() => {
          let list = that.data.prize_list;
          ++that.nowRunIndex;
          that.nowRunIndex >= that.data.prizeListIndex.length ? that.nowRunIndex = 0 : '';
          console.log(that.nowRunIndex >= that.data.prizeListIndex.length)
          console.log(that.nowRunIndex)
          let Pindex = that.data.prizeListIndex[that.nowRunIndex];
          list.map((item, index) => {
            item.active = Pindex == index;
          })
          that.setData({
            prize_list: list
          })
          console.log(that.LotteryEnd)
          console.log(luckIndex == that.nowRunIndex)
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
            rI += 0.5;
            runAni(_t + (rI));
          }
        }, _t);
      }
      runAni(80);
      setTimeout(() => {
        this.LotteryEnd = true;
      }, maxTime);
    })
  },

  onPageScroll:function(e){
    console.log(e)
  }

})
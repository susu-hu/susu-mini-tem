// pages/jsCase/draw4/easy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //大小，位置
    width: 550,
    height: 550,
    //横向的球
    num: 5,
    //纵向的球
    num1: 7,
    //两边的空间为
    top: 30,
    left: 30,
    //球的大小
    qiu: 20,
    //渲染页面的列表
    list: [],
    //控制走马灯的颜色
    red: ['red', 'dot'],
    //控制显示的index
    li: [1, 2, 3, 4, 5, 6, 7, 8],
    //循环的次数
    time: 2,
    //目前的圈数
    qun: 0,
    //速度
    spe: 50,
    index: '',
    //是随机拿到的li里面的值，用于判断是否中奖
    kk: 0,
  },


  onShow: function () {
    this.getspan()
  },

  //生成一排小球

  getspan() {
    let {
      width,
      height,
      num,
      num1,
      top,
      left,
      qiu
    } = this.data;
    this.getlist(width, num, qiu, left, top)
    let top1 = height - top - qiu
    let len = width - top - qiu
    this.getlist1(height, num1, qiu, len, top)
    this.getlist(width, num, qiu, left, top1)
    this.getlist1(height, num1, qiu, left, top)
  },
  getlist(h, num, qiu, lf, lt) {
    let len = (h - (lf + qiu) * 2 - num * 20) / (num + 1)
    //5为上面的5个球，20位球的大小，除以6是因为间距为6
    //第一个距离为:
    let len1 = qiu + lf + len;
    //第2个距离为:
    let len2 = len + len1 + qiu;
    //第3个距离为:
    let len3 = len + len2 + qiu;
    //第4个距离为:
    let len4 = len + len3 + qiu;
    //第4个距离为:
    let len5 = len + len4 + qiu;
    let list1 = [{
      zl: len1 + 'rpx',
      zh: lt + 'rpx'
    }, {
      zl: len2 + 'rpx',
      zh: lt + 'rpx'
    }, {
      zl: len3 + 'rpx',
      zh: lt + 'rpx'
    }, {
      zl: len4 + 'rpx',
      zh: lt + 'rpx'
    }, {
      zl: len5 + 'rpx',
      zh: lt + 'rpx'
    }]
    this.setData({
      list: this.data.list.concat(list1),
    })
  },
  //竖起来的球
  getlist1(h, num, qiu, lf, lt) {
    //num 7ge，
    let len = (h - lt * 2 - num * 20) / (num - 1)
    //解析一下
    console.log(len);
    //第一个距离为:
    let len1 = qiu + lt + len;
    //第2个距离为:
    let len2 = len + len1 + qiu;
    //第3个距离为:
    let len3 = len + len2 + qiu;
    //第4个距离为:
    let len4 = len + len3 + qiu;
    //第4个距离为:
    let len5 = len + len4 + qiu;
    let len6 = len + len5 + qiu;
    let list1 = [{
      zh: 30 + 'rpx',
      zl: lf + 'rpx'
    }, {
      zh: len1 + 'rpx',
      zl: lf + 'rpx'
    }, {
      zh: len2 + 'rpx',
      zl: lf + 'rpx'
    }, {
      zh: len3 + 'rpx',
      zl: lf + 'rpx'
    }, {
      zh: len4 + 'rpx',
      zl: lf + 'rpx'
    }, {
      zh: len5 + 'rpx',
      zl: lf + 'rpx'
    }, {
      zh: len6 + 'rpx',
      zl: lf + 'rpx'
    }]
    this.setData({
      list: this.data.list.concat(list1),
    })
  },
  chou() {
    //圈数，速度

    let {
      time,
      index,
      li
    } = this.data;
    if (time <= 4) {
      let kk = Math.floor(Math.random() * li.length);
      this.setData({
        kk,
        index: 1
      })
      this.scol()
    }
  },
  scol() {
    this.qun();
    this.setm();
  },
  //控制index的,
  qun() {

    let {
      index,
      qun
    } = this.data
    index++;
    qun++;
    if (index >= 8) {
      index = 1
    }
    this.setData({
      qun,
      index
    })
  },
  //控制圈数
  setm() {
    let {
      spe,
      qun,
      time,
      kk,
      index,
      timer,
      red
    } = this.data;
    //走马灯显示
    if (red[0] == 'red') {
      this.setData({
        red: ['dot', 'red']
      })
    } else {
      this.setData({
        red: ['red', 'dot']
      })
    }
    //清除定时器条件  
    if (qun >= time && kk == index) {
      clearTimeout(timer)
      this.setData({
        qun: 0,
        spe: 50,
        index
      });
      wx.showModal({
        title: '中奖提示',
        content: '恭喜您抽中的是' + kk + '奖品',
        success: (res) => {
          if (res.confirm) {
            this.setData({
              index: 0
            })
          } else if (res.cancel) {
            this.setData({
              index: 0
            })
          }
        }
      })
    } else {
      //易错点
      if (qun < time) {
        spe += 10
        this.setData({
          spe
        })
      }
      timer = setTimeout(this.scol, spe)
    }
  },

})
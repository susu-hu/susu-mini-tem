Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    bg: "https://i.postimg.cc/mgsKJGLw/susu1.jpg",
    // 老虎机抽奖显示1,隐藏2
    luckDrawID: 1,
    // 抽奖button状态
    drawId: 1,
    showDefault: false,
    itemImgs: [{
      id: 1,
      url: "https://i.postimg.cc/XJmpTvCD/susu2.jpg"
    }, {
      id: 2,
      url: "https://i.postimg.cc/XJmpTvCD/susu2.jpg"
    }, {
      id: 3,
      url: "https://i.postimg.cc/XJmpTvCD/susu2.jpg"
    }],
    tab1: { // 第一列当前显示的图片
      id: 1,
      url: "https://i.postimg.cc/XJmpTvCD/susu2.jpg"
    },
    tab2: { // 第二列当前显示的图片
      id: 2,
      url: "https://i.postimg.cc/XJmpTvCD/susu2.jpg"
    },
    tab3: { // 第三列当前显示的图片
      id: 3,
      url: "https://i.postimg.cc/XJmpTvCD/susu2.jpg"
    },
    animationData1: {}, // 第一列动画
    animationData2: {}, // 第二列动画
    animationData3: {}, // 第三列动画
    // 保存结果，将每一列的结果保存下来，如果有三个值，，说明摇奖结束
    resNum: []
  },
  /* 
   *初始化加载数据
   */
  onLoad(options) {
 
  },
  /* 
   *"抽奖点击事件"
   */
  getAnmiation: function() {
 
    // 随即生成0-10之间的数，0-2：结果为1,3-5：结果为2,6-8：结果为3,8-10：不中奖
    let randomNum = Math.random() * 10;
    randomNum = parseInt(randomNum, 10);
    // 隐藏默认图片
    this.setData({
      drawId: 2,
      showDefault: true,
      resNum: [] // 将结果数组置为空
    })
 
    this.getOpenAnimation(1, randomNum); // 第一个动画
    this.getOpenAnimation(2, randomNum); // 第二个动画
    this.getOpenAnimation(3, randomNum); // 第二个动画
 
    var page = this;
    // 校验最终的游戏结果，如果三个结果值都有值，并且全部一致，视为中奖，不一样，视为未中奖
    var resTime = setInterval(function() {
      if (page.data.resNum.length === 3) {
        // 延迟1秒给出提示
        setTimeout(function() {
          console.error("最新数据==?", page.data.tab1);
          // 第一层奖品
          var tab1 = page.data.tab1.id;
          // 第二层奖品
          var tab2 = page.data.tab2.id;
          // 第三层奖品
          var tab3 = page.data.tab3.id;
          console.log("状态==?", tab1, tab2, tab3);
          var switchName;
          if (tab1 == tab2 && tab1 == tab3 && tab2 == tab3) {
            if (tab1 == 1 && tab2 == 1 && tab3 == 1) {
              switchName = "您获得3元优惠券";
            } else if (tab1 == 2 && tab2 == 2 && tab3 == 2) {
              switchName = "您获得5元优惠券";
            } else if (tab1 == 3 && tab2 == 3 && tab3 == 3) {
              switchName = "您获得8元优惠券";
            }
            wx.showModal({
              title: '提示',
              content: switchName,
            })
          } else {
            switchName = "感谢您参与该活动再接再厉，祝您下次中奖！";
            wx.showModal({
              title: '提示',
              content: switchName,
            })
          }
        }, 1000);
        clearInterval(resTime);
      }
    }, 1000);
  },
  /**
   * 处理动画动作
   */
  getOpenAnimation: function(line, resNum) {
    var page = this;
    // 创建动画
    let animation = wx.createAnimation({
      duration: 300, // 执行一次动画的时间
      timingFunction: 'ease', // 动画的效果，平滑
    })
 
    // 随即生成摇奖区滚动的总共时长，范围5000-6000
    let randomTotalTime = Math.random() * 1000 + 5000;
    randomTotalTime = parseInt(randomTotalTime, 10);
 
    // 随即生成每次循环间隔的时间,500-600之间的随机数
    let tempRandom = Math.random() * 300 + 250;
    tempRandom = parseInt(tempRandom, 10);
 
    let num = 0; // 设定计数标签，从0开始
    let count = 1; // 循环计数
    // 设定循环
    let loop = setInterval(function() {
      num++; // 每次循环加1
      count++;
      if (num > 2) {
        // 如果计数标签大于2，置为0
        num = 0;
      }
      if (count * tempRandom >= randomTotalTime) {
        // 到达预定的时间点，停止循环，将图片定位到显示区域中间位置
        animation.translateY(85).step({
          duration: 0
        });
        handleSet(page);
 
        if (resNum >= 0 && resNum < 3) {
          num = 0;
        } else if (resNum >= 3 && resNum < 6) {
          num = 1;
        } else if (resNum >= 6 && resNum < 9) {
          num = 2;
        }
 
        handleSet(page);
        count = 0;
        // 更新结果数组
        let tempArr = page.data.resNum;
        tempArr.push(num);
        page.setData({
          resNum: tempArr
        })
        clearInterval(loop); // 停止循环
      } else {
        animation.translateY(300).step().translateY(0).step({
          duration: 0
        });
        handleSet(page);
      }
 
      function handleSet(page) {
        if (line === 1) {
          page.setData({
            tab1: page.data.itemImgs[num], // 修改显示的图片
            animationData1: animation.export()
          })
        } else if (line === 2) {
          page.setData({
            tab2: page.data.itemImgs[num], // 修改显示的图片
            animationData2: animation.export()
          })
        } else if (line === 3) {
          page.setData({
            tab3: page.data.itemImgs[num], // 修改显示的图片
            animationData3: animation.export()
          })
        }
      }
    }, tempRandom);
  },
  /**
   * getBack[返回首页]
   */
  getBack: function() {
    wx.reLaunch({
      url: '../index/index',
    })
 
  },
  /**
   * getOrderbase[查看订单]]
   */
  getOrderbase: function() {
    wx.reLaunch({
      url: '/pages/order/index',
    })
  },
  /**
   * 已经抽奖
   */
  btnDisable: function() {
    wx.showToast({
      title: '您已经抽奖过一次',
      icon: "none",
      duration: 2000
    })
  },
  /**
   * 打开优惠券页面
   */
  getOPenselectCoupon() {
    wx.showModal({
      title: '提示',
      content: '工程师正开发中...',
    })
    return;
    wx.reLaunch({
      url: '../shopCar/selectCoupon/selectCoupon',
    })
  }
 
})
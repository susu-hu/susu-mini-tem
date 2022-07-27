// pages/another/countdown/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      windowHeight: 654, 
      maxtime: "", 
      isHiddenLoading: true, 
      isHiddenToast: true, 
      dataList: {}, 
      countDownDay: 1, 
      countDownHour: 12, 
      countDownMinute: 12, 
      countDownSecond: 12, 


      //公告滚动
 
    text: "通知：即日起在小程序商城消费满一百元可享受免费包邮服务!",
    marqueePace: 1,   //滚动速度
    marqueeDistance: 0,   //初始滚动距离
    size: 28,
    marqueeWidth: 660,
    marqueeMargin: 40

      

  },
//事件处理函数 
  bindViewTap: function() { 
    wx.navigateTo( { 
    url: '../logs/logs'
    }) 
    }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData( { 
      windowHeight: wx.getStorageSync( 'windowHeight' ) 
     }); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var circleCount = 0; 
    // 心跳的外框动画 
    this.animationMiddleHeaderItem = wx.createAnimation({ 
    duration:1000, // 以毫秒为单位 
    /** 
    * http://cubic-bezier.com/#0,0,.58,1 
    * linear 动画一直较为均匀 
    * ease 从匀速到加速在到匀速 
    * ease-in 缓慢到匀速 
    * ease-in-out 从缓慢到匀速再到缓慢 
    * 
    * http://www.tuicool.com/articles/neqMVr 
    * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过 
    * step-end 保持 0% 的样式直到动画持续时间结束  一闪而过 
    */
    timingFunction: 'linear', 
    delay: 100, 
    transformOrigin: '50% 50%', 
    success: function (res) { 
    } 
    }); 
    setInterval(function() { 
    if (circleCount % 2 == 0) { 
     this.animationMiddleHeaderItem.scale(1.15).step(); 
    } else { 
     this.animationMiddleHeaderItem.scale(1.0).step(); 
    } 
    this.setData({ 
     animationMiddleHeaderItem: this.animationMiddleHeaderItem.export() 
    }); 
    circleCount++; 
    if (circleCount == 1000) { 
     circleCount = 0; 
    } 
    }.bind(this), 1000); 








    var totalSecond = 1505540080 - Date.parse(new Date())/1000; 
 var interval = setInterval(function () { 
  // 秒数 
  var second = totalSecond; 
  // 天数位 
  var day = Math.floor(second / 3600 / 24); 
  var dayStr = day.toString(); 
  if (dayStr.length == 1) dayStr = '0' + dayStr; 
  // 小时位 
  var hr = Math.floor((second - day * 3600 * 24) / 3600); 
  var hrStr = hr.toString(); 
  if (hrStr.length == 1) hrStr = '0' + hrStr; 
  // 分钟位 
  var min = Math.floor((second - day * 3600 *24 - hr * 3600) / 60); 
  var minStr = min.toString(); 
  if (minStr.length == 1) minStr = '0' + minStr; 
  // 秒位 
  var sec = second - day * 3600 * 24 - hr * 3600 - min*60; 
  var secStr = sec.toString(); 
  if (secStr.length == 1) secStr = '0' + secStr; 
  this.setData({ 
  countDownDay: dayStr, 
  countDownHour: hrStr, 
  countDownMinute: minStr, 
  countDownSecond: secStr, 
  }); 
  totalSecond--; 
  if (totalSecond < 0) { 
  clearInterval(interval); 
  wx.showToast({ 
   title: '活动已结束', 
  }); 
  this.setData({ 
   countDownDay: '00', 
   countDownHour: '00', 
   countDownMinute: '00', 
   countDownSecond: '00', 
  }); 
  } 
 }.bind(this), 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var length = that.data.text.length * that.data.size;     //计算文字的长度
    console.log(length)
    that.setData({
      length: length,
      // 当文字长度小于屏幕长度时，需要增加补白
      marqueeMargin: length < that.data.marqueeWidth ? (that.data.marqueeWidth - length) / 4 : that.data.marqueeMargin
    })
    if (that.data.length > that.data.marqueeWidth) {
      that.run1();
    }

    console.log(this.formatSeconds(12909))

  },
  bindCellViewTap: function (e) { 
    var id = e.currentTarget.dataset.id; 
    wx.navigateTo({ 
     url: '../babyDetail/babyDetail?id=' + id 
    }); 
    } ,

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
   // 标题超过限制宽度时做滚动播放
  //  run1: function () {
  //   var that = this;
  //   var mytime = setInterval(function () {
  //     if (-that.data.marqueeDistance < that.data.length) {
  //       that.setData({
  //         marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
  //       })
  //     } else {
  //       clearInterval(mytime);
  //       that.setData({
  //         marqueeDistance: that.data.marqueeWidth
  //       });
  //       that.run1();
  //     }
  //   }, 5)
  // },


/**
 * 格式化秒
 * @param int  value 总秒数
 * @return string result 格式化后的字符串
 */
 formatSeconds(value) { 
  var theTime = parseInt(value);// 需要转换的时间秒 
  var theTime1 = 0;// 分 
  var theTime2 = 0;// 小时 
  var theTime3 = 0;// 天
  if(theTime > 60) { 
   theTime1 = parseInt(theTime/60); 
   theTime = parseInt(theTime%60); 
   if(theTime1 > 60) { 
    theTime2 = parseInt(theTime1/60); 
    theTime1 = parseInt(theTime1%60); 
    if(theTime2 > 24){
     //大于24小时
     theTime3 = parseInt(theTime2/24);
     theTime2 = parseInt(theTime2%24);
    }
   } 
  } 
  var result = '';
  if(theTime > 0){
   result = ""+parseInt(theTime)+"秒";
  }
  if(theTime1 > 0) { 
   result = ""+parseInt(theTime1)+"分"+result; 
  } 
  if(theTime2 > 0) { 
   result = ""+parseInt(theTime2)+"小时"+result; 
  } 
  if(theTime3 > 0) { 
   result = ""+parseInt(theTime3)+"天"+result; 
  }
  if(theTime3 == 0){
    result = ""+0+"天"+result; 
  }
  return result; 
 } ,

 
})
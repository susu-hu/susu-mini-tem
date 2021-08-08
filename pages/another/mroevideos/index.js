// pages/another/mroevideos/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频
    v1_play:true,//默认的显示播放的按钮
    v1_pause:true,//默认不显示暂停的按钮

    v2_play:true,//默认的显示播放的按钮
    v2_pause:true,//默认不显示暂停的按钮
    danmuList:[
      {
        text: '苏苏的弹幕 打卡哈哈',
        color: '#fff',
        time: 1
      }, {
        text: '嘻嘻不错还可以的啦',
        time: 1
      },
      {
        text: '啊啊啊啊啊',
        time: 1
      },
      {
        text: '啊啊啊啊啊',
        time: 1
      },
      {
        text: '啊啊啊啊啊',
        time: 1
      },
      {
        text: '啊啊啊啊啊',
        time: 2
      },
      {
        text: '啊啊啊啊啊',
        time: 12
      },
      {
        text: '啊啊啊啊啊',
        time: 2
      },
      {
        text: '啊啊啊啊啊',
        time:2
      }

    ],
    danmu:"",
  
  },

  
  onLoad: function (options) {

  },

  
  onReady: function () {

  },
  //随机生成弹幕的颜色
  getRandomColor() {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length === 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  },
  onShow: function () {

  },
  getValue(e){
    let val=e.detail.value;
    this.setData({
      danmu:val
    })
  },
  //发送弹幕
  bindSendDanmu() {
     // 利用循环和随机数调整位置
      var ranNum = Math.floor(Math.random()*10);
      var danmuList = [];
      for (let index = 0; index < 10; index++) {
        danmuList.push('');
      }
      danmuList[ranNum] = this.data.danmu;
      for (let index = 0; index < danmuList.length; index++) {
          wx.createVideoContext('myVideo1').sendDanmu({
          text: danmuList[index],
          color: this.getRandomColor()
        });
      }


    //位置固定
    // wx.createVideoContext('myVideo1').sendDanmu({
    //   text: this.data.danmu,
    //   color: this.getRandomColor()
    // })
  },
  //控制视频播放
  tobePlay(e){
    let {type}=e.currentTarget.dataset;
    let data_va1='',data_va2="";

    if(type=="v1"){
      wx.createVideoContext('myVideo0').play();
      wx.createVideoContext('myVideo0').requestFullScreen()
      data_va1='v1_play';
      data_va2="v1_pause";
    }
    if(type=="v2"){
      wx.createVideoContext('myVideo1').play();
      data_va1='v2_play';
      data_va2="v2_pause";
    }
    if(type=="v3"){
      wx.createVideoContext('myVideo2').play();
      data_va1='v3_play';
      data_va2="v3_pause";
    }

    setTimeout(()=>{
      this.setData({
        [data_va1]:false,
        [data_va2]:false,
      },setTimeout(()=>{
        this.setData({
          [data_va2]:true,
        })
      },3000))
    },100)
  },
  //显示播放的按钮
  showPlaybtn(e){
    let {type}=e.currentTarget.dataset;
    let data_va='';

    if(type=="v1"){
      if(this.data.v1_play){
        return false
      }
      data_va='v1_pause'
    }
    if(type=="v2"){
      if(this.data.v2_play){
        return false
      }
      data_va='v2_pause'
    }
    if(type=="v3"){
      if(this.data.v3_play){
        return false
      }
      data_va='v3_pause'
    }

    this.setData({
      [data_va]:false,
    },setTimeout(()=>{
      this.setData({
        [data_va]:true,
      })
    },3000))
  },
  //暂停视频的播放
  tobePause(e){
    let {type}=e.currentTarget.dataset;
    let data_va1='',data_va2="";
    
    if(type=="v1"){
      wx.createVideoContext('myVideo0').pause();
      data_va1="v1_play";
      data_va2="v1_pause";
    }
    if(type=="v2"){
      wx.createVideoContext('myVideo1').pause();
      data_va1="v2_play";
      data_va2="v2_pause";
    }
    if(type=="v3"){
      wx.createVideoContext('myVideo2').pause();
      data_va1="v3_play";
      data_va2="v3_pause";
    }

    setTimeout(()=>{
      this.setData({
        [data_va1]:true,
        [data_va2]:true,
      })
    },100)
  },

  //视频播放到末尾触发的事件 视频播放结束 显示暂停的按钮
  showEndBtn(e){
    //显示暂停按钮 隐藏播放按钮
    let {type}=e.currentTarget.dataset;
    let data_va='',data_va1="";
    if(type=="v1"){
      data_va="v1_play",
      data_va1="v1_pause"
    }
    if(type=="v2"){
      data_va="v2_play",
      data_va1="v2_pause"
    }
    if(type=="v3"){
      data_va="v3_play",
      data_va1="v3_pause"
    }
    this.setData({
      [data_va]:true,
      [data_va1]:true,
    })
  },

  

  
})
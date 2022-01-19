var app = getApp();

import Scratch from './sc'

let cjIn = false; //防止多次点击

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gjEnd: false, //是否刮奖结束
    showGjBth: true, //是否显示刮奖按钮
    again: false, //是否显示再来一次按钮

    cjNum: '', //抽奖机会

    resaultSrc: '', //中奖显示图
    hasPrize: '', //是否中奖
    prizeName: '', //奖品名称
  },


  //刮奖设置
  gj() {
    let This = this;

    if (!This.data.cjNum) {
      wx.showModal({
        title: '很抱歉',
        content: '没有机会啦~',
        showCancel: false,
        success(res) {

        }
      })
      return;
    }

    if (cjIn) {
      return;
    } else {
      cjIn = true;
    }


    let timeOutTime = 0; //再次 刮奖时要先显示CANVAS，如果显示CANVAS 与 初始化刮奖界面同时进行的话，则不能重置刮奖层状态
    if (This.data.gjEnd) {
      //先显示CANVAS
      This.setData({
        gjEnd: false, //是否刮奖结束
      });
      timeOutTime = 100;
    }
    setTimeout(function () {
      //初始化刮奖界面 ，重置刮奖层状态
      new Scratch(This, {
        canvasId: 'canvas-demo',
        width: 570,
        height: 213,
        //maskColor:'#dddddd',
        //size:15,
        //scale:1,
        scale: .5,
      })

      setTimeout(function () {
        //重置刮奖层状态后，再绑定 获取到的结果 数据，否则会出现结果先出来导致“闪动”的状态
        This.setData({
          showGjBth: false, //是否显示刮奖按钮
          again: false, //是否显示再来一次按钮
          //cjNum: 0, //抽奖机会
          cjNum: 1, //抽奖机会
          resaultSrc: '', //中奖显示图
          hasPrize: true, //是否中奖
          prizeName: '奖品名称XXX', //奖品名称
        });
      }, 100)
    }, timeOutTime)

  },
  //刮卡已刮干净
  clearCanvas() {
    let This = this;
    setTimeout(function () {
      //隐藏CANVAS
      This.setData({
        gjEnd: true, //是否刮奖结束
      });
    }, 100)
    if (!This.data.again) {
      cjIn = false;

      console.log('刮卡已刮干净啦！');

      //刮卡刮干净后 显示的界面 ，显示再刮一次按钮（页面中已注释）
      This.setData({
        again: true,
      });
    }
  },


  //获取抽奖机会次数
  getNum() {
    let This = this;

    This.setData({
      cjNum: 1,
    });
  },


  onShow: function () {
    cjIn = false;
    let This = this;

    This.setData({
      gjEnd: false, //是否刮奖结束
      showGjBth: true, //是否显示刮奖按钮
      again: false, //是否显示再来一次按钮

      resaultSrc: '', //中奖显示图
      hasPrize: '', //是否中奖
    });

    This.getNum(); //获取抽奖机会次数
  },


})
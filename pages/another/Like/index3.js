// pages/another/Like/index3.js
var barrage_style_arr = [];
var barrage_style_obj ={};
var phoneWidth = 0;
var timers = [];
var timer ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://i.postimg.cc/j57Lwdy3/123.png',
      'https://i.postimg.cc/j57Lwdy3/123.png',
      'https://i.postimg.cc/j57Lwdy3/123.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    barrageTextColor:"#D3D3D3",
    barrage_inputText:"none",
    barrage_shoottextColor:"black",
    bind_shootValue:"",
    barrage_style:[],
    barragefly_display:"none",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){
    var that = this;
    //获取屏幕的宽度
      wx.getSystemInfo({
        success: function(res) {
           that.setData({
                barrage_phoneWidth:res.windowWidth-100,
           })
        }
      })
      phoneWidth = that.data.barrage_phoneWidth;
      console.log(phoneWidth);
  },//是否打开弹幕... 
  barrageSwitch: function(e){
    console.log(e);
    //先判断没有打开
    if(!e.detail.value){
    //清空弹幕
      barrage_style_arr = [];
      //设置data的值
      this.setData({
        barrageTextColor:"#D3D3D3",
        barrage_inputText:"none",
        barragefly_display:"none",
        barrage_style:barrage_style_arr,
      });
      //清除定时器
      clearInterval(timer);
    }else{
      this.setData({
        barrageTextColor:"#04BE02",
        barrage_inputText:"flex",
        barragefly_display:"block",
      });
      //打开定时器
        timer= setInterval(this.barrageText_move,800)
    }
  },

  //发射按钮
  shoot: function(e){

    //字体颜色随机
    var textColor = "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
    // //设置弹幕字体的水平位置样式
    // var textWidth = -(this.data.bind_shootValue.length*0);
    //设置弹幕字体的垂直位置样式
    var barrageText_height = (Math.random())*266;
     barrage_style_obj = {
      // textWidth:textWidth,
      barrageText_height:barrageText_height,
      barrage_shootText:this.data.bind_shootValue,
      barrage_shoottextColor : textColor,
      barrage_phoneWidth:phoneWidth
    };
    barrage_style_arr.push(barrage_style_obj);
    this.setData({ 
      barrage_style:barrage_style_arr,        //发送弹幕
      bind_shootValue:""                    //清空输入框
    })

      //定时器  让弹幕动起来
      //  this.timer= setInterval(this.barrageText_move,800);

  },

//定时器  让弹幕动起来
  barrageText_move: function(){
    var timerNum = barrage_style_arr.length;
    var textMove ;
    for(var i=0;i<timerNum;i++){
       textMove = barrage_style_arr[i].barrage_phoneWidth;
       console.log("barrage_style_arr["+i+"].barrage_phoneWidth----------:"+barrage_style_arr[i].barrage_phoneWidth);
       textMove = textMove -20;
      barrage_style_arr[i].barrage_phoneWidth = textMove;
      //走完的移除掉
      if(textMove<=-100){
 //         clearTimeout(this.timer);
          barrage_style_arr.splice(0,1);
          i--;
          //全部弹幕运行完
          if(barrage_style_arr.length==0){
            this.setData({
              barrage_style:barrage_style_arr, 
            })
            // clearInterval(this.timer);
            return;
          }
      }
      console.log("第"+i+"个定时器:",textMove);
      this.setData({
        barrage_style:barrage_style_arr, 
      })
    }


  },

  //绑定发射输入框，将值传递给data里的bind_shootValue，发射的时候调用
  bind_shoot:function(e){
    this.setData({
      bind_shootValue:e.detail.value
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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

  }
})
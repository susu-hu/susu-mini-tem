// pages/wxCase/cutImage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    var aa = 'https://i.postimg.cc/mgsKJGLw/susu1.jpg';　//获取当前屏幕宽度
    var phoneW = 350;
    // Number(util.nowPhoneWH()[0]*90)/100;
    var cutH = 150;
    wx.getImageInfo({
     src: aa,
     success: function (res) {
      var w = phoneW;
      var h = (phoneW/Number(res.width))*Number(res.height)
      ctx.save() 
      ctx.drawImage(aa, 0, 0, w, h)
      ctx.restore()
      ctx.setFillStyle('red')
      ctx.fillRect(0, 0, phoneW, cutH)
      ctx.draw()
      that.setData({
       canvasW:w,
       canvasH:h,
       img:aa,
       cutH:cutH
      })
     }
    })
   },
   // 点击确认裁剪图片
 okCutImg:function(){
  var that = this;
  var canvasW = that.data.canvasW;
  var canvasH = that.data.canvasH;
  var nowCutW = that.data.cutType?canvasW:that.data.nowCutW;
  var nowCutH = that.data.cutType?that.data.cutH:that.data.nowCutH;
  var cutX = that.data.cutX;
  var cutY = that.data.cutY;
  const ctx = wx.createCanvasContext('cutImg');
  ctx.setGlobalAlpha(1)
  ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
  ctx.draw()
  wx.canvasToTempFilePath({
   x: cutX,
   y: cutY,
   width: nowCutW,
   height: nowCutH,
   destWidth: nowCutW,
   destHeight: nowCutH,
   canvasId: 'cutImg',
   success: function(res) {
     console.log(res.tempFilePath)
    var aa = res.tempFilePath
    that.setData({
     cutImgUrl:aa,
     prienFlag:false,
     alreay:false
    })
   } 
  })
 },
// 点击红框开始移动
canvasMove:function(e){
  var that = this;
  var canvasW = that.data.canvasW;
  var canvasH = that.data.canvasH;
  var nowCutW = that.data.cutType?canvasW:that.data.nowCutW;
  var nowCutH = that.data.cutType?that.data.cutH:that.data.nowCutH
  var touches = e.touches[0];  
  var x = touches.x;
  var y = touches.y-(Number(nowCutH)/2);
  that.data.cutType?x=0:x=x-(Number(nowCutW)/2);
  that.setData({
   cutX:x,
   cutY:y
  })
  const ctx = wx.createCanvasContext('cutImg');
  ctx.setGlobalAlpha(0.4)
  ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
  ctx.setFillStyle('red')
  ctx.fillRect(x, y, nowCutW, nowCutH)
  ctx.draw()
 },
 //等屏裁剪
 etcType:function(){
  var that = this;
  var propor = 100;
  var canvasW = that.data.canvasW;
  var canvasH = that.data.canvasH;
  var cutH = that.data.cutH;
  var nowCutW = (Number(canvasW)*propor)/100
  var nowCutH = (Number(cutH)*propor)/100
  const ctx = wx.createCanvasContext('cutImg');
  ctx.setGlobalAlpha(0.4)
  ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
  ctx.setFillStyle('red')
  ctx.fillRect(0, 0, nowCutW, nowCutH)
  ctx.draw()
  that.setData({
   nowCutW:nowCutW,
   nowCutH:nowCutH,
   cutType:true
  })
 },
 areaType:function(){
  var that = this;
  var propor = that.data.propor;
  var canvasW = that.data.canvasW;
  var canvasH = that.data.canvasH;
  var cutH = that.data.cutH;
  var nowCutW = (Number(canvasW)*propor)/100
  var nowCutH = (Number(cutH)*propor)/100
  const ctx = wx.createCanvasContext('cutImg');
  ctx.setGlobalAlpha(0.4)
  ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
  ctx.setFillStyle('red')
  ctx.fillRect(0,0, nowCutW, nowCutH)
  ctx.draw()
  that.setData({
   nowCutW:nowCutW,
   nowCutH:nowCutH,
   cutType:false
  })
 },
 areaChange:function(e){
  var that = this;
  var propor = e.detail.value;
  var canvasW = that.data.canvasW;
  var canvasH = that.data.canvasH;
  var cutH = that.data.cutH;
  var nowCutW = (Number(canvasW)*propor)/100
  var nowCutH = (Number(cutH)*propor)/100
  const ctx = wx.createCanvasContext('cutImg');
  ctx.setGlobalAlpha(0.4)
  ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
  ctx.setFillStyle('red')
  ctx.fillRect(that.data.cutX||0, that.data.cutY||0,nowCutW, nowCutH)
  ctx.draw()
  that.setData({
   nowCutW:nowCutW,
   nowCutH:nowCutH,
   propor:propor
  })
 },
// 重新裁剪
againBtn:function(){
  var that = this;
  var data = that.data
  this.setData({
   prienFlag:true,
   alreay:true
  })
  const ctx = wx.createCanvasContext('cutImg');
  ctx.setGlobalAlpha(0.4)
  ctx.drawImage(data.img, 0, 0, data.canvasW, data.canvasH)
  ctx.setFillStyle('red')
  ctx.fillRect(that.data.cutX||0, that.data.cutY||0, data.nowCutW||data.canvasW, data.nowCutH||data.cutH)
  ctx.draw()
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
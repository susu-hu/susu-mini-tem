// pages/logistic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasData:true,
    wuliu_no:'532465645645646',
    //物流情况
    expresslist:{
      list:[
        {
          status:0,//状态完成
          status_name:'派送中',
          text:'业务员苏苏（13211122211）正在为您派件，【95123 为顺丰快递外呼专属号码，请放心接听！】业务员周陆陆（13211122211）正在为您派件，【95123 为顺丰快递外呼专属号码，请放心接听！】',
          time:'2020-06-20 18:33:42'
        },
        {
          status:1,//
          status_name:'运输中',
          text:'业务员苏苏（13211122211）正在为您派件，【95123 为顺丰快递外呼专属号码，请放心接听！】',
          time:'2020-06-20 18:33:42'
        },
        {
          status:1,//状态完成
          status_name:'已发货',
          text:'业务员苏苏（13211122211）正在为您派件，【95123 为顺丰快递外呼专属号码，请放心接听！】',
          time:'2020-06-20 18:33:42'
        },
        {
          status:1,//状态完成
          status_name:'配货中',
          text:'业务员苏苏（13211122211）正在为您派件，【95123 为顺丰快递外呼专属号码，请放心接听！】',
          time:'2020-06-20 18:33:42'
        },
      ]
    }
  },

 
  onLoad: function (options) {

  },

  
  onShow: function () {

  },

  copyId(){
    wx.setClipboardData({
      data: this.data.wuliu_no,
      success() {
       
      }
    })
  }
})
// pages/logistics/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aa:0,
    loading:true,
    //物流情况
    expresslist:{
      order_no:'1q213232132',
      de_company:'顺丰',
      wuliu_no:'73584y357349',
      list:[
        {
          status:0,//状态完成
          display:'0',//已签收 
          status_name:'已签收',
          text:'【揭阳市】已离开 广东揭阳分拨中心：发往啦啦啦啦说的话凤凰大：发往啦啦啦啦说的话凤凰大啦啦说的话凤凰大厦附近收到回复的就是',
          time:'2020-06-20 18:33:42'
        },
        {
          status:1,//
          display:'1',
          status_name:'待取件',
          text:'【揭阳市】已离开 广东揭阳分拨中心：发往啦啦啦啦说的话凤凰大厦附近收到回复的就是',
          time:'2020-06-20 18:33:42'
        },
        {
          status:1,//状态完成
          display:'2',
          status_name:'派送中',
          text:'【揭阳市】已离开 广东揭阳分拨中心：发往啦啦啦啦说的话凤凰大厦附近收到回复的就是',
          time:'2020-06-20 18:33:42'
        },
        {
          display:'3',
          status:1,//状态完成
          status_name:'运输中',
          text:'【揭阳市】已离开 广东揭阳分拨中心：发往啦啦啦啦说的话凤凰大厦附近收到回复的就是',
          time:'2020-06-20 18:33:42'
        },
      ]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(()=>{
      this.setData({
        loading:false
      })
    },1500)
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
  aa(){
    console.log(111)
    this.setData({
      aa:1
    })
  },
  blur(){
    this.setData({
      aa:0
    })
  }

})
// pages/wxCase/newsSwiper/index.js
Page({


  data: {
    data_list:[
      '测试数据一', '测试数据2', '测试数据3', '测试数据4', '测试数据5', '测试数据6',
    ],
    d_num:'',
  },

  
  onLoad: function (options) {
    let len=this.data.data_list.length;
    console.log(len)
    this.setData({
      d_num:len>2?3:len
    })
  },

  
  onShow: function () {

  },

  
})
// pages/wxCase/statusList/index.js
// import api from "../utils/api.js"
Page({


  data: {

    list: [
      {
        status: 1,
        name: '状态一'
      },
      {
        status: 2,
        name: '状态2'
      },
      {
        status: 3,
        name: '状态3'
      },
      {
        status: 4,
        name: '状态4哈哈哈'
      },
      {
        status: 5,
        name: '状态5嘻嘻哈哈哈'
      },
      {
        status: 6,
        name: '状态6嘻嘻哈GG哈哈'
      },
    ]
  },


  onLoad: function (options) {

  },


  onShow: function () {
    this.getData()
  },

  getData() {
    let { list } = this.data;
    list.forEach(item => {
      switch (item.status) {
        case 1:
          item.style = "s1";
          break;
        case 2:
          item.style = "s2";
          break;
        case 3:
          item.style = "s3";
          break;
        case 4:
          item.style = "s4";
          break;
        case 5:
          item.style = "s5 ";
          break;
        default:
          item.style = "s0"
      }
    })
    this.setData({
      list,
    })
    // wx.request({
    //   url: 'https://susu/test/dataList',
    //   data:{},
    //   header:{},
    //   method:"GET",
    //   dataType:'json',
    //   responseType:'text',
    //   success:(res)=>{
    //     console.log(res)
    //   },
    //   fail:(res)=>{
    //     console.log(res)
    //   }
    // })
    // let user=api.users;
    // console.log(user)
  }

})
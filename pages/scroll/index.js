// pages/scroll/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollheight: '',
    chosed_index:0,
    cateList:[
      {
        id:1,
        name:'类别1'
      },
      {
        id:2,
        name:'类别2'
      },
      {
        id:3,
        name:'类别3'
      },
      {
        id:4,
        name:'类别4'
      },
      {
        id:5,
        name:'类别5'
      },
    ],
    chosed_cate_id:'',
    goods_list:[
      {
        type_id:1,
        type_name:'类别1',
        list:[
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的01',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的02',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的03',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的04',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
        ]
      },
      {
        type_id:2,
        type_name:'类别2',
        list:[
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的05',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的06',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的07',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的08',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
        ]
      },
      {
        type_id:3,
        type_name:'类别3',
        list:[
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的09',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的10',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的11',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的12',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
        ]
      },
      {
        type_id:4,
        type_name:'类别4',
        list:[
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的13',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的14',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的15',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的16',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
        ]
      },
      {
        type_id:5,
        type_name:'类别5',
        list:[
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的17',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的18',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
          {
            goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的20',
            img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price:356.00,
          },
        ]
      }
    ],
    toTitle: "",
    scrollTop: 0,
    top: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
        scrollheight: windowHeight * 750 / windowWidth - 370
    })
    this.setData({
      chosed_cate_id:this.data.cateList[0].id
    })

  },

  
  onReady: function () {

  },

 
  onShow: function () {

  },
    /**
     * 选中分类
     */
    choseCate(e) {
      let {id,index} = e.currentTarget.dataset
      this.setData({
          chosed_cate_id: id,
          chosed_index:index,
          toTitle: "title-" + id,
      })
  },
  //滚动
  onScroll(e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    var length = this.data.top.length;
    for (var i = 0; i < this.data.top.length; i++) {
      if (this.data.top[i] - this.data.top[0] <= this.data.scrollTop && (i < length - 1 && this.data.top[i + 1] - this.data.top[0] > this.data.scrollTop)) {
        if (this.data.currentIndex != i) {
          this.setData({
            currentIndex: i,
          });
        }
      }
    }
  },
  
})
// pages/scroll/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollheight: '',
    chosed_index: 0,
    cateList: [
      {
        id: 1,
        name: '类别1'
      },
      {
        id: 2,
        name: '类别2'
      },
      {
        id: 3,
        name: '类别3'
      },
      {
        id: 4,
        name: '类别4'
      },
      {
        id: 5,
        name: '类别5'
      },
      {
        id: 6,
        name: '类别6'
      },
    ],
    chosed_cate_id: '',
    goods_list: [
      {
        type_id: 1,
        type_name: '类别1',
        list: [
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的01',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的02',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },


        ]
      },
      {
        type_id: 2,
        type_name: '类别2',
        list: [
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的05',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的06',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的07',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的08',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
        ]
      },
      {
        type_id: 3,
        type_name: '类别3',
        list: [
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的09',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的10',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的11',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的12',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
        ]
      },
      {
        type_id: 4,
        type_name: '类别4',
        list: [
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的13',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的14',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的13',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的14',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
        ]
      },
      {
        type_id: 5,
        type_name: '类别5',
        list: [
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的17',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          {
            goods_name: '巴啦啦门路沙地柏阿实践活动氨基酸的18',
            img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
            price: 356.00,
          },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // }, {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的19',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的20',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的20',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
          // {
          //   goods_name:'巴啦啦门路沙地柏阿实践活动氨基酸的20',
          //   img:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          //   price:356.00,
          // },
        ]
      },
      {
        type_id: 6,
        type_name: '类别6',
        list: []
      },
    ],
    toTitle: "",
    top: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    console.log(windowHeight)
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    wx.createSelectorQuery().select('#top').boundingClientRect((rect) => {
      console.log(rect)
      this.setData({
        scrollheight: windowHeight - rect.height
      })
    }).exec();

    this.setData({
      chosed_cate_id: this.data.cateList[0].id
    })
    // 设置每个分类的开始高度
    let top = [];
    for (var i = 0; i < this.data.goods_list.length; i++) {
      wx.createSelectorQuery().select('#title-' + this.data.goods_list[i].type_id).boundingClientRect(function (rect) {
        var isTop = Number(rect.top);
        top.push(isTop);
      }).exec();
    }
    this.setData({
      top: top
    });
  },
  /**
   * 选中分类
   */
  choseCate(e) {
    let { id, index } = e.currentTarget.dataset;
    this.setData({
      chosed_cate_id: id,
      chosed_index: index,
      toTitle: "title-" + id,
    })
  },
  //滚动
  onScroll(e) {
    let { scrollTop } = e.detail;
    let length = this.data.top.length;
    for (var i = 0; i < this.data.top.length; i++) {
      if (this.data.top[i] - this.data.top[0] <= scrollTop && (i < length - 1 && this.data.top[i + 1] - this.data.top[0] > scrollTop)) {
        if (this.data.chosed_index != i) {
          this.setData({
            chosed_index: i,
          });
        }
      }
    }
    if (scrollTop >= this.data.top[length - 1] - this.data.top[0]) {
      console.log(this.data.top[length - 1] - this.data.top[0])
      this.setData({
        chosed_index: length - 1,
      });
    }
  }

})
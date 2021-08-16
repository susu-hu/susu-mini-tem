// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list:[
      {
        showmore:true,
        name:'主包',
        list:[
          {
            name:'物流页面+skeleton条',
            url:'/pages/demo/index'
          },
          {
            name:'物流的第二种写法(伪元素after)',
            url:'/pages/demo/index2'
          },
          {
            name:'日历样式一',
            url:'/pages/cal/index'
          },
          {
            name:'日历样式二',
            url:'/pages/cal2/index'
          },
          {
            name:'日历样式三',
            url:'/pages/cal/index2'
          },
          {
            name:'日历样式四',
            url:'/pages/cal2/index2'
          }
        ]
      }, 
      {
        showmore:false,
        name:'分包another',
        list:[
          {
            name:'swiper3D轮播图',
            url:'/pages/another/swiper-threeD/index'
          },
          {
            name:'圆环进度条一',
            url:'/pages/another/circleRing/index'
          },
          {
            name:'圆环进度条2',
            url:'/pages/another/circleRing/index2'
          }
        ]
      },
      {
        showmore:false,
        name:'分包subPack',
        list:[
          {
            name:'animation动画，五福合成效果',
            url:'/pages/subPack/animationBox/index'
          },
          {
            name:'日历样式五',
            url:'/pages/subPack/calen/index2'
          },
          {
            name:'日历样式六',
            url:'/pages/subPack/calen/index3'
          },
        ]
      }
    ]

  },
  
  toDetail(e){
    let {url}=e.currentTarget.dataset;
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
 
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {

  },


  onShow: function () {
     //自定义的tabbar
     if (typeof this.getTabBar === 'function' &&
     this.getTabBar()) {
     this.getTabBar().setData({
       selected: 0
     })
   }
  
  },
  showMore(e){
    let {index}=e.currentTarget.dataset,{page_list}=this.data;
    page_list[index].showmore=!page_list[index].showmore
    this.setData({
      page_list:page_list
    })
  }


 


})
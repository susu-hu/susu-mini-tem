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
      {
        id:6,
        name:'类别6'
      },
      {
        id:7,
        name:'类别7'
      },
    ],
    chosed_cate_id:'',
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
    // console.log(windowHeight, this.data.scrollheight)
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
          contentActive: 'content' + id
      }, 
      // function () {
      //     //计算位移距离
      //     this.getRect(`#sidebar-item-${id}`)
      // }
      )
  },
  
})
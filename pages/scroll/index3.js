Page({
  data: {
   
    navList:['商品','评论','详情'],
    type:0,

    labelList:[
      {
        name:'全部',
        num:120,
      },
      {
        name:'有图',
        num:40,
      },
      {
        name:'好评',
        num:60,
      },
      {
        name:'中评',
        num:30,
      },
      {
        name:'差评',
        num:30,
      },
    ],
    type_li:0,

    toView:'productBox',
    nowstatus:'productBox',

    //导航栏自定义
    navHeight:'',
    navTop:'',
    navRight:'',
    navBottom:'',
    winHeight:'',
    //富文本
    desc:"<p><img style=\"max-width:100%;height:auto\"  src=\"https://i.postimg.cc/Gm7KjGmN/111.jpg\" title=\"1619506647918932.jpg\" alt=\"详情1_790_1148.jpg\"/>"+
    "<img style=\"max-width:100%;height:auto\"  src=\"https://i.postimg.cc/Bv28vfkg/222.webp\" title=\"1619506679526659.jpg\" alt=\"详情2_790_698.jpg\"/><img style=\"max-width:100%;height:auto\"  src=\"https://i.postimg.cc/65STLQNc/333.webp\" title=\"1619506852450556.jpg\" alt=\"详情8_790_982.jpg\"/>"
    +"</p><p style=\"margin-top: 10px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: center; list-style: decimal; color: rgb(153, 153, 153); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, 微软雅黑, tahoma, simsun, 宋体; font-size: 14px; white-space: normal;\"><strong><span style=\"color: rgb(0, 0, 0);\">包装与生产日期</span></strong></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">1. 商品若出现新、老版本更替，可能与商详页展示内容细节有所不同（如包装颜色、式样等变化；批次产地不同等），但不影响商品品质</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">3. 经跨国长途运输，商品外包装可能出现压痕、微损、封签（若有）脱开、喷印日期因刮蹭碰撞导致磨损等现象，但通常不影响商品品质</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">4. 跨境商品包装上一般不标注保质期限，通常只在产品包装上标注生产日期或到期日，也存在仅标注出厂批号的情况，比如日本、欧洲洗护以及化妆品，但一般可通过批号识别生产或者失效日期。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">5. 各国家或地区商品有效期的书写方式，可在考拉pc页面底部-新手指南-常见问题中查看详情。跨境食品一般表示&quot;Best before date&quot;，即最佳赏味日期。该日期不是&quot;最终保质期&quot;，意为在此日期前食用能保证食物新鲜，故在&quot;最佳赏味日期&quot;前食用风味更佳。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; list-style: decimal; color: rgb(153, 153, 153);\"></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; list-style: decimal; color: rgb(153, 153, 153);\"></p></li></ul><p><br/></p>"
  },

  tabNav(e) {
    let {index} = e.currentTarget.dataset;
    if (this.data.type === index || index === undefined) {
        return false;
    } else {
        this.setData({
            type: index,
            toView: e.target.dataset.type,
        })
    }
  },

  //切换评价
  choose(e) {
    let {index} = e.currentTarget.dataset;
    if (this.data.type_li === index || index === undefined) {
        return false;
    } else {
        this.setData({
            type_li : index,
        })
    }
  },
  onLoad: function (options) {
    //获取头部自定义导航栏高度
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    console.log(menuButtonObject)
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        let statusBarHeight = res.statusBarHeight,//导航栏头部那块 显示手机信息的位置
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2,//导航高度
          navRight=res.windowWidth-menuButtonObject.right +menuButtonObject.width,// 胶囊按钮与右侧的距离 = windowWidth - right。 胶囊+右侧距离为windowWidth - right+width
          navBottom=menuButtonObject.top - statusBarHeight
        this.setData({
          navHeight,
          navTop,
          navRight,
          navBottom,
          winHeight: res.windowHeight - (res.windowWidth * navHeight/ 750) + 'px'
        })
      },
      fail(err) {
        console.log(err);
      }
    })

    //处理富文本
    const regex =new RegExp('<img','gi'),
     re1=RegExp('<p','gi'),
     re2=RegExp('<span','gi');
    let content=this.data.desc,
      content1=content
      //方法1
      .replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
      .replace(/<p([\s\w"=\/\.:;]+)((?:(class="[^"]+")))/ig, '<p')
      .replace(/<p>/ig, '<p class="p1_class">')
      //方法2
      // .replace(re1, '<p class="p2_class"')
      .replace(re2, '<span class="span_class"')
      //图片
      .replace(regex, '<img class="img_class"')
    this.setData({
      desc:content1
    })



    let query = wx.createSelectorQuery();
    query.select('#type1').boundingClientRect(res => { //获取评论距离页面顶部高度
      this.setData({
        commentBoxTop: res.top
      })
    }).exec()
    query.select('#type2').boundingClientRect(res => { //获取详情部分距离页面顶部高度
      this.setData({
        infoBoxTop: res.top
      })
    }).exec()
  },
  onPageScroll: function (e) {
    console.log(e.detail.scrollTop)
    if(e.detail.scrollTop < this.data.commentBoxTop -this.data.navHeight){
      this.setData({
        type:'0'
      })
    }
    if (e.detail.scrollTop >= this.data.commentBoxTop -this.data.navHeight){
      this.setData({
        type:'1'
      })
    }
    if (e.detail.scrollTop > this.data.infoBoxTop - this.data.navHeight){
      this.setData({
        type: '2'
      })
    }
  },
  //回退
  _navBack: function () {
    wx.navigateBack({
      delta: 1,
      fail: function() {
        wx.switchTab({
          url: '/pages/index2/index'
        })
      }
    })      
  },
  //回主页
  _toIndex: function () {
    wx.switchTab({
      url: '/pages/index2/index'
    })
  },
})
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
    scrollTop:'',

    //导航栏自定义
    navHeight:'',
    navTop:'',
    navRight:'',
    navBottom:'',
    winHeight:'',
    //富文本
    desc:"<p><img style=\"max-width:100%;height:auto\"  src=\"https://i.postimg.cc/Gm7KjGmN/111.jpg\" title=\"1619506647918932.jpg\" alt=\"详情1_790_1148.jpg\"/>"+
    "<img style=\"max-width:100%;height:auto\"  src=\"https://i.postimg.cc/Bv28vfkg/222.webp\" title=\"1619506679526659.jpg\" alt=\"详情2_790_698.jpg\"/><img style=\"max-width:100%;height:auto\"  src=\"https://i.postimg.cc/65STLQNc/333.webp\" title=\"1619506852450556.jpg\" alt=\"详情8_790_982.jpg\"/>"
    +"</p><p style=\"margin-top: 10px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: center; list-style: decimal; color: rgb(153, 153, 153); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, 微软雅黑, tahoma, simsun, 宋体; font-size: 14px; white-space: normal;\"><strong><span style=\"color: rgb(0, 0, 0);\">包装与生产日期</span></strong></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">1. 商品若出现新、老版本更替，可能与商详页展示内容细节有所不同（如包装颜色、式样等变化；批次产地不同等），但不影响商品品质</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">3. 经跨国长途运输，商品外包装可能出现压痕、微损、封签（若有）脱开、喷印日期因刮蹭碰撞导致磨损等现象，但通常不影响商品品质</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">",


    desc1:"<p style=\\\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\\\"><span  style=\\\"color: rgb(102, 102, 102); font-size: 12px;\">1. 商品若出现新、老版本更替，可能与商详页展示内容细节有所不同（如包装颜色、式样等变化；批次产地不同等），但不影响商品品质</span></p><p style=\\\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\\\"><br/></p><p style=\\\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\\\"><span style=\\\"color: rgb(102, 102, 102); font-size: 12px;\\\">2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</span></p><p style=\\\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\\\"><br/></p><p style=\\\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\\\">",

    desc2:"<p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span style=\"color: rgb(102, 102, 102); font-size: 12px;\">3. 经跨国长途运输，商品外包装可能出现压痕、微损、封签（若有）脱开、喷印日期因刮蹭碰撞导致磨损等现象，但通常不影响商品品质</span></p>",

    desc3:"<p><span>2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</span></p><br/><p><span>3. 经跨国长途运输，商品外包装可能出现压痕、微损、封签（若有）脱开、喷印日期因刮蹭碰撞导致磨损等现象，但通常不影响商品品质</span></p>",

    desc4:"<p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span class=\"p2_class\" style=\"color: rgb(102, 102, 102); font-size: 12px;\">2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 23px; text-align: left; list-style: decimal; color: rgb(153, 153, 153);\"><span class=\"p2_class\" style=\"color: rgb(102, 102, 102); font-size: 12px;\">3. 经跨国长途运输，商品外包装可能出现压痕、微损、封签（若有）脱开、喷印日期因刮蹭碰撞导致磨损等现象，但通常不影响商品品质</span></p>",
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

    //处理富文本1
    const regex =new RegExp('<img','gi'),
     re1=RegExp('<p','gi'),
     re2=RegExp('<span','gi');
    let content=this.data.desc,
      content1=content
      //方法1
      .replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
      .replace(/<p([\s\w"=\/\.:;]+)((?:(class="[^"]+")))/ig, '<p')
      .replace(/<p>/ig, '<p class="ppp_class">')
      //方法2
      // .replace(re1, '<p class="p2_class"')
      .replace(re2, '<span class="span_class"')
      //图片
      .replace(regex, '<img class="img_class"')
    this.setData({
      desc:content1
    })
    console.log(typeof(this.data.desc))

    //富文本2
    const  re3=RegExp('<span','gi');
    let desc1=this.data.desc1.replace(/[\'\"\\\/\b\f\n\r\t]/g, '')
    .replace(re3, '<span class="desc2_class"')
    this.setData({
      desc1:desc1
    })


    //f富文本3
    let desc2=this.data.desc2.replace(/\<span/gi,'<span class="s2"')
    this.setData({
      desc2:desc2
    })

    //富文本4
    const  re4=RegExp('<span','gi');
    let desc4=this.data.desc4.replace(re4, '<span\ class="sp_class')
    this.setData({
      desc4:desc4
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
  onScrollxiix: function (e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    console.log(e.detail.scrollTop)
    if(e.detail.scrollTop < this.data.commentBoxTop -this.data.navHeight){
      this.setData({
        type:'0'
      })
    }
    if (e.detail.scrollTop >= this.data.commentBoxTop -this.data.navHeight && e.detail.scrollTop<this.data.infoBoxTop - this.data.navHeight){
      this.setData({
        type:'1'
      })
    }
    if (e.detail.scrollTop >= this.data.infoBoxTop - this.data.navHeight){
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
    //分享
    onShareAppMessage(e) {
      if (e.from == 'button') {
        return {
          title: "丸子妹可爱表情包，只要9.9包邮哦下单", // 分享后的信息显示标题 | 默认是当前小程序名称
          //imageUrl:'',//// 分享的信息中显示的图片，可以是程序内的图片，也可以是网络图片 | 默认是当前页面的前半部分
          path: '/pages/scroll/index3'//// 用户点击分享后的信息时，进入的小程序页面路径：绝对路径 | 默认是当前页面
        }
      }
    },
    //去掉特殊字符
    excludeSpecial (s) { 
      // 去掉转义字符    
      s = s.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');    
      // 去掉特殊字符   
      s = s.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/);    
      return s; 
    }

})
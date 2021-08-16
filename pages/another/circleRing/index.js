// pages/targetPlan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    showDialog:true,//筛选弹框默认隐藏

    hasData:true,//是否有数据

    data_list:['30','60','80','100','','','','','','',],//数据列表

    // 时间类型
    typeList:[],
    //月度选择
    monthList:[],
    show_more:undefined,
    //目标分类
    targetList:[],
    completeList:[
      {
        name:'未完成'
      },
      {
        name:'已完成'
      }
    ],
    statusList:[
      {
        name:'未完成'
      },
      {
        name:'进行中'
      },
      {
        name:'已结束'
      }
    ],
    peList:[
      {
        name:'我的'
      },
      {
        name:'下属人员'
      },
    ],
    salesList:[],
  },

  onLoad: function (options) {

  },
  onShow: function () {
    this.data.data_list.forEach((item,index)=>{
      this.canvasRing = this.selectComponent("#canvasRing"+index);
      this.canvasRing.showCanvasRing()
    })
    
  },
  getData(){
    let typeList=[
      {
        type_id:0,
        type_name:'年度目标'
      },
      {
        type_id:1,
        type_name:'季度目标'
      },
      {
        type_id:2,
        type_name:'月度目标'
      },
    ];
    let monthList=[
      {
        value:'2021-01'
      },
      {
        value:'2021-02'
      },
      {
        value:'2021-03'
      },
      {
        value:'2021-04'
      },
      {
        value:'2021-05'
      },{
        value:'2021-06'
      },
      {
        value:'2021-07'
      },
      {
        value:'2021-08'
      },
    ];
    let targetList=[
      {
        type_name:'拓展新客'
      },
      {
        type_name:'回款目标'
      },
      {
        type_name:'出货金额目标'
      },
      {
        type_name:'出货数量目标'
      },
    ];
    let salesList=[
      {
        id:0,
        name:'张三'
      },
      {
        id:1,
        name:'张三1'
      },
      {
        id:2,
        name:'张三2'
      }
    ]
    this.setData({
      typeList,
      monthList,
      targetList,
      salesList,
      show_more:monthList.length>6?true:undefined
    })

  },
  //显示弹框
  showDialog(){
    //获取筛选数据
    this.getData()
    this.setData({
      showDialog:!this.data.showDialog
    })
  },
  closePop(){
    this.setData({
      showDialog:true
    })
  },
  //展开收起
  showMore(e){
    this.setData({
      show_more:!this.data.show_more
    })
  },
  //选择（多选）
  choseKey(e){
    let {index,list}=e.currentTarget.dataset;
    this.data[list][index].chosed=!this.data[ list ][index].chosed;
    this.setData({
      [list]:this.data[list]
    })
  },
  //单选 业务员
  choseAlone(e){
    let {index}=e.currentTarget.dataset,{peList}=this.data;
    peList.forEach(item=>{
      item.chosed=false
    })
    peList[index].chosed=true;
    this.setData({
      peList
    })

  },

 
  onPullDownRefresh: function () {

  },

 
  onReachBottom: function () {

  },

  toDetail(){
    wx.navigateTo({
      url: '/pages/targetDetail/index',
    })
  }
})
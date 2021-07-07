Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '月份',//用户选中的日期
    endDate:'',//当前日期

    navList:['全部','待审批','待执行','待反馈','已完成','已取消'],
    type:0,

    hasData:true,

    showDialog:true,//筛选弹框默认隐藏

    choseList:[],//筛选列表
    chosedType:0,

    

  },
  tabNav(e) {
    let {index} = e.currentTarget.dataset;
    if (this.data.type === index || index === undefined) {
        return false;
    } else {
        this.setData({
            type: index,
        })
    }
  },
  //显示弹框
  showDialog(){
    //获取筛选列表
    this.getChoseData()
    this.setData({
      showDialog:!this.data.showDialog
    })
  },
  getChoseData(){
    let choseList= [{
      name:'活动类型',
      list:[
        {
          id:1,
          value:'线下妈妈帮'
        },
        {
          id:2,
          value:'主题风格'
        },
        {
          id:3,
          value:'季节活动'
        },
        {
          id:4,
          value:'节假活动'
        },
        {
          id:5,
          value:'开春季'
        },
      ],
    },
    {
      name:'业务员',
      list:[
        {
          id:1,
          value:'我的'
        },
        {
          id:2,
          value:'下属人员'
        },
      ]
    },
    {
      name:'下属人员',
      list:[
        {
          id:1,
          value:'VENV'
        },
        {
          id:2,
          value:'NANA'
        },
        {
          id:3,
          value:'JJUB'
        },
        {
          id:4,
          value:'RFFD'
        },
      ]
    }];
    choseList.forEach(item=>{
      if(item.list.length>=4){
        item.isMore=true
      }
    })
    this.setData({
      choseList:choseList
    })
  },
  //展开收起
  showMore(e){
    let {choseList}=this.data,
        {index}=e.currentTarget.dataset,
        choseInfo=choseList[index];
    choseInfo.isMore=!choseInfo.isMore;
    console.log(choseInfo)
    this.setData({
      choseList:choseList
    })
  },
  //选择 筛选项目
  choseOne(e){
    let  {index}=e.currentTarget.dataset;
    console.log(index)

  },
  //关闭弹框
  closePop(){
    this.setData({
      showDialog:true
    })
  },


  onLoad: function (options) {
    this.getEndDate()//获取当前的日期
  },

  
  onShow: function () {

  },

  

  
  onPullDownRefresh: function () {

  },

  
  onReachBottom: function () {

  },
  //获取当前日期
  getEndDate() {
    let endDate = this.data.endDate,//结束日期
      date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      endDate = year + '-' + month;
    this.setData({
      endDate,//今年-这个月
    })
  },
  //获取年月
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
    })
  },

  
})
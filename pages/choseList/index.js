Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '时间',//用户选中的日期
    endDate:'',//当前日期

    navList:['全部','选项一','选项二','选项三','选项四','选项五'],
    type:0,

    hasData:false,

    showDialog:true,//筛选弹框默认隐藏

    choseList:[],//筛选列表
    tap:false

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
    this.setData({
      showDialog:!this.data.showDialog,
      tap:false
    })
  },
  getChoseData(){
    let choseList= [{
      name:'选项一',
      list:[
        {
          id:1,
          value:'选项1-1'
        },
        {
          id:2,
          value:'选项1-2'
        },
        {
          id:3,
          value:'选项1-3'
        },
        {
          id:4,
          value:'选项1-4'
        },
        {
          id:5,
          value:'选项1-5'
        },
      ],
    },
    {
      name:'选项二',
      list:[
        {
          id:1,
          value:'选项2-1'
        },
        {
          id:2,
          value:'选项2-2'
        },
      ]
    },
    {
      name:'选项三',
      list:[
        {
          id:1,
          value:'选项3-1'
        },
        {
          id:2,
          value:'选项3-2'
        },
        {
          id:3,
          value:'选项3-3'
        },
        {
          id:4,
          value:'选项3-4'
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
    this.setData({
      choseList:choseList
    })
  },
  //选择 筛选项目
  choseOne(e){
    let tap=true;
    let  {index,index1}=e.currentTarget.dataset, {choseList}=this.data,
    choseInfo=choseList[index];
    choseInfo.list.forEach((item,index)=>{
      if(index==index1){
        item.chosed=true
      }else{
        item.chosed=false
      }
    })
    this.setData({
      choseList,
      tap:tap
    })
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
    //获取筛选列表
    this.getChoseData()
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
  reset(){
    this.data.choseList.forEach(item=>{
      item.list.forEach(item1=>{
        item1.chosed=false
      })
    })
    this.setData({
      choseList: this.data.choseList,
      tap:false
    })
  },
  obsubmit(){
    this.setData({
      showDialog:true
    })
  }

  
})
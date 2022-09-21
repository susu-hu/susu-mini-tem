// pages/cal2/index.js
import cal from "./cal.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 日历
    arr: [],
    sysW: 92,
    marLet:'',//左边边距
    weekArr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    monthIndex:'',
    months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月 '],
    booklist: ['4',"5","11"],//配送完成
    waitList:['19','12','18'],//等待配送，
    stopList:['26','25'],//暂停配送
    chosedMonth:'',//当前选中的月份

  },

  
  onShow: function () {
     
    var date = new Date();
    this.getTime(date);//获取时间
    this.setData({
      chosedMonth:date
    })

  },
  getTime(date){
    this.dataTime(date);
    //先清空数组，根据得到今月的最后一天日期遍历 得到所有日期
    if (this.data.arr) {
        this.data.arr = [];
    }
    for (var i = 0; i < this.data.lastDay; i++) {
        var obj = {};
        obj.day = i + 1;
        obj.isbook=0//无状态
        obj.chosed=false;//选中的状态为false  当true之后 显示选中的边框
        this.data.arr.push(obj);
        this.data.booklist.forEach(item=>{
            if(this.data.arr[i].day==item){
              this.data.arr[i].isbook = 1//已经配送完毕的
            }
        })
        this.data.waitList.forEach(item=>{
          if(this.data.arr[i].day==item){
            this.data.arr[i].isbook = 2//等待配送完毕的
          }
        })
        this.data.stopList.forEach(item=>{
          if(this.data.arr[i].day==item){
            this.data.arr[i].isbook = 3//暂停配送完毕的
          }
        })
    }
    this.setData({
        marLet: this.data.firstDay,
        arr: this.data.arr,
        monthIndex: this.data.monthIndex,
    });
  },
  //选择某一天
  choseOneDay(e){
    //设置选中的边框效果
    let day=e.currentTarget.dataset.day
    this.data.arr.forEach(item=>{
      if(item.day==day){
        item.chosed=true
      }else{
        item.chosed=false
      }
    })
    //根据日期 进行了数据的查询
    this.setData({
      arr:this.data.arr
    })

  },
  //上个月
  toLastMon(){
    let date=this.data.chosedMonth;
    date.setMonth(date.getMonth()-1);
    console.log(date)
    this.getTime(date)
    this.setData({
        chosedMonth:date
    })
  },
  //下个月
  toNextMon(){
    let date=this.data.chosedMonth;
    date.setMonth(date.getMonth()+1);
    this.getTime(date)
    this.setData({
        chosedMonth:date
    })
  },
  //获取日历相关参数
  dataTime: function (date) {
    //   var date = new Date('2021-7-2');
      var year = date.getFullYear();
    
      var month = date.getMonth();  //0（一月） 到 11（十二月） 
      var months = date.getMonth() + 1;//这个是当前的月份

      this.data.monthIndex=month;//当前月份的索引
      this.data.getDate = date.getDate();//获取当前的日期 8号

      var d = new Date(year, months, 0);//Wed Jun 30 2021 00:00:00 GMT+0800 (中国标准时间)  2021年6月30日 周三
      this.data.lastDay = d.getDate();//这是当前月份的所有天数 30

    
      let firstDay = new Date(year, month, 1);//Tue Jun 01 2021 00:00:00 GMT+0800 (中国标准时间)
      this.data.firstDay = firstDay.getDay();// 第一天开始前的位置
  },


  
})
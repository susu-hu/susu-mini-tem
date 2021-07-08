
Page({
  data: {
      getToday:'',//当前日期
      chosedMonth:'',
      arr: [],
      sysW: 92,
      marLet:'',//左边边距
      weekArr: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      monthIndex:'',
      months:['January','February','March','April','May','June',
      'July','August','September','October','November','December '],
      booklist: ["5","12"],//状态一
      waitList:['19'],//状态二
      stopList:['26'],//状态三
  },
  //上个月
  toLastMon(){
    let date=this.data.chosedMonth;

    date.setMonth(date.getMonth()-1);

    let getToday='';
    if((new Date()).getMonth()==(date.getMonth())){
      getToday=(new Date()).getDate()
    }

    this.getTime(date)
    this.setData({
        chosedMonth:date,
        getToday:getToday
    })
  },
  //下个月
  toNextMon(){
    let date=this.data.chosedMonth;
   
    date.setMonth(date.getMonth()+1);

    let getToday='';
    if((new Date()).getMonth()==(date.getMonth())){
      // -11
      getToday=(new Date()).getDate()
    }
    this.getTime(date)
    this.setData({
        chosedMonth:date,
        getToday:getToday
    })
  },
  //获取日历相关参数
  dataTime: function (date) {
    //   var date = new Date('2021-7-2');
      var year = date.getFullYear();
    
      var month = date.getMonth();  //0（一月） 到 11（十二月） 
      var months = date.getMonth() + 1;//这个是当前的月份

      this.data.year=year //当前的年份
      this.data.monthIndex=month;//当前月份的索引
      this.data.getToday = date.getDate();//获取当前的日期 8号

      var d = new Date(year, months, 0);//Wed Jun 30 2021 00:00:00 GMT+0800 (中国标准时间)  2021年6月30日 周三
      this.data.lastDay = d.getDate();//这是当前月份的所有天数 30

    
      let firstDay = new Date(year, month, 1);//Tue Jun 01 2021 00:00:00 GMT+0800 (中国标准时间)
      this.data.firstDay = firstDay.getDay();// 第一天开始前的位置
  },

  onShow: function (options) {
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
        this.data.arr.push(obj);
        this.data.booklist.forEach(item=>{
            if(this.data.arr[i].day==item){
              this.data.arr[i].isbook = 1//状态一
            }
        })
        this.data.waitList.forEach(item=>{
          if(this.data.arr[i].day==item){
            this.data.arr[i].isbook = 2//状态2
          }
        })
        this.data.stopList.forEach(item=>{
          if(this.data.arr[i].day==item){
            this.data.arr[i].isbook = 3//状态3
          }
        })
    }
    this.setData({
        marLet: this.data.firstDay,
        arr: this.data.arr,
        monthIndex: this.data.monthIndex,
        getToday:this.data.getToday,
        year:this.data.year
    });
  },

});
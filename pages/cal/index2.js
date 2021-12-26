Page({
  data: {
    year: 0,
    month: 0,
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0
  },
  onLoad: function () {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    this.dateInit();
    this.setData({
      year: year,
      month: month,
      isToday: '' + year + month + now.getDate()
    })
  },
  dateInit: function (setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1 
    let dateArr = [];            //需要遍历的日历数组数据 
    let arrLen = 0;             //dateArr的数组长度 
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();         //没有+1方便后面计算当月总天数 
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay();             //目标月1号对应的星期 
    let dayNums = new Date(year, nextMonth, 0).getDate();       //获取目标月有多少天 
    let obj = {};
    let num = 0;

    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })

    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;

    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  lastMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1 
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  nextMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1 
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },

  onShow() {
    let date_list = this.getDaysInMonth(2021, 2);
    console.log(date_list)

    let a = this.GetCurrentDateTime();
    console.log(a)
    let d = this.hdnongli()
    console.log(d)


  },
  hdnongli() {

  },
  //根据年月获取当月有多少天
  getDaysInMonth(year, month) {
    //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。 
    month = parseInt(month, 10);
    var temp = new Date(year, month, 0);
    return temp.getDate();
  },
  //获取当前的日期+时间+星期几
  GetCurrentDateTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var week = d.getDay();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ms = d.getMilliseconds();
    var curDateTime = year;
    if (month > 9)
      curDateTime = curDateTime + "年" + month;
    else
      curDateTime = curDateTime + "年0" + month;
    if (date > 9)
      curDateTime = curDateTime + "月" + date + "日";
    else
      curDateTime = curDateTime + "月0" + date + "日";
    if (hours > 9)
      curDateTime = curDateTime + " " + hours;
    else
      curDateTime = curDateTime + " 0" + hours;
    if (minutes > 9)
      curDateTime = curDateTime + ":" + minutes;
    else
      curDateTime = curDateTime + ":0" + minutes;
    if (seconds > 9)
      curDateTime = curDateTime + ":" + seconds;
    else
      curDateTime = curDateTime + ":0" + seconds;
    var weekday = "";
    if (week == 0)
      weekday = "星期日";
    else if (week == 1)
      weekday = "星期一";
    else if (week == 2)
      weekday = "星期二";
    else if (week == 3)
      weekday = "星期三";
    else if (week == 4)
      weekday = "星期四";
    else if (week == 5)
      weekday = "星期五";
    else if (week == 6)
      weekday = "星期六";
    curDateTime = curDateTime + " " + weekday;
    return curDateTime;
  },




}) 
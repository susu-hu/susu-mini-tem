//logs.js
const util = require('../../../utils/util.js')

Page({
  data: {
    sysW: null,
    lastDay: null,
    year: null,
    hasEmptyGrid: false,
    cur_year: '',
    cur_month: '',
    firstDay: null,
    getDate: null,
    month: null,
    display: "none",
    week: [{
      wook: "一"
    }, {
      wook: "二"
    }, {
      wook: "三"
    }, {
      wook: "四"
    }, {
      wook: "五"
    }, {
      wook: "六"
    }, {
      wook: "日"
    }, ],
    day: [],
    days: [],
    ornot: false, //今天是否签到
    continuity: 18, //签到天数
    sign: false, //签到弹窗
  },
  getProWeekList: function () {
    let that = this
    let date = new Date()
    let dateTime = date.getTime(); // 获取现在的时间
    let dateDay = date.getDay(); // 获取现在的
    let oneDayTime = 24 * 60 * 60 * 1000; //一天的时间
    let proWeekList;
    let weekday;
    for (let i = 0; i < 7; i++) {
      let time = dateTime - (dateDay - 1 - i) * oneDayTime;
      proWeekList = new Date(time).getDate(); //date格式转换为yyyy-mm-dd格式的字符串
      weekday = "day[" + i + "].wook"
      that.setData({
        [weekday]: proWeekList,
      })
      //that.data.day[i].wook = new Date(time).getDate();
    }
  },
  dateSelectAction: function (e) {
    let cur_day = e.currentTarget.dataset.idx;
    this.setData({
      todayIndex: cur_day
    })
    console.log(`点击的日期:${this.data.cur_year}年${this.data.cur_month}月${cur_day + 1}日`);
  },

  setNowDate: function () {
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const todayIndex = date.getDate();
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.setData({
      cur_year: cur_year,
      cur_month: cur_month,
      weeks_ch,
      todayIndex,
    })
  },

  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  calculateDays(year, month) {
    let getDate = this.data.getDate //多少号
    let cur_year = this.data.cur_year //年
    let cur_month = this.data.cur_month //月
    let thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      if (this.data.opentime[1] < month && month == this.data.shuttime[1]) { //小于开始月份
        this.data.days.push({
          wook: i,
          src: i <= getDate ? '/pages/images/newspaper.png' : ''
        });
      } else if (this.data.opentime[1] == month && month == this.data.shuttime[1]) {
        if ((this.data.opentime[2] <= i) && (i <= this.data.shuttime[2])) {
          this.data.days.push({
            wook: i,
            src: '/pages/images/newspaper.png'
          });
        } else {
          this.data.days.push({
            wook: i,
            src: ''
          });
        }
      } else if (this.data.opentime[1] == month && month < this.data.shuttime[1]) {
        this.data.days.push({
          wook: i,
          src: this.data.opentime[2] <= i ? '/pages/images/newspaper.png' : ''
        });
      } else if (this.data.opentime[1] < month && month < this.data.shuttime[1]) {
        this.data.days.push({
          wook: i,
          src: '/pages/images/newspaper.png'
        });
      } else {
        this.data.days.push({
          wook: i,
          src: ''
        });
      }
    }
    this.setData({
      days: this.data.days,
    })
  },
  //上下月
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;

    this.setData({
      days: []
    })

    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      let firstDay = new Date(newYear, newMonth - 1, 1);
      this.data.firstDay = firstDay.getDay();
      this.setData({
        cur_year: newYear,
        cur_month: newMonth,
        marLet: this.data.firstDay
      })
      if (this.data.month == newMonth) {
        this.setData({
          judge: 1
        })
      } else {
        this.setData({
          judge: 0
        })
      }
    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);
      let firstDay = new Date(newYear, newMonth - 1, 1);
      this.data.firstDay = firstDay.getDay();
      this.setData({
        cur_year: newYear,
        cur_month: newMonth,
        marLet: this.data.firstDay
      })
      if (this.data.month == newMonth) {
        this.setData({
          judge: 1
        })
      } else {
        this.setData({
          judge: 0
        })
      }
    }
  },
  dataTime: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var months = date.getMonth() + 1;

    //获取现今年份
    this.data.year = year;

    //获取现今月份
    this.data.month = months;

    //获取今日日期
    this.data.getDate = date.getDate();

    //最后一天是几号
    var d = new Date(year, months, 0);
    this.data.lastDay = d.getDate();

    //第一天星期几
    let firstDay = new Date(year, month, 1);
    this.data.firstDay = firstDay.getDay();
    this.setData({
      marLet: this.data.firstDay
    })
  },
  onshow: function () {
    this.setData({
      display: "block",
    })
  },
  onhide: function () {
    this.setData({
      display: "none",
    })
  },
  onLoad: function (options) {
    var that = this;
    this.setNowDate();
    this.getProWeekList()
    this.dataTime();
    var res = wx.getSystemInfoSync();
    this.setData({
      sysW: res.windowHeight / 12 - 5, //更具屏幕宽度变化自动设置宽度
      getDate: this.data.getDate,
      judge: 1,
      month: this.data.month,
    });
    this.sigarr();
  },
  //获取数组参数
  sigarr: function (e) {
    let that = this
    let ornot = that.data.ornot ? 0 : 1 //当天是否签到
    let continuity = that.data.continuity //连续签到天数
    let obinl = parseInt(util.getWeekByDate(new Date())); //今天周几
    let cur_year = that.data.cur_year; //年份
    let cur_month = that.data.cur_month - 1; //月份
    if (cur_month < 1) { //月份小于1年份减1
      cur_year = cur_year - 1;
      cur_month = 12;
    }
    let num = obinl < continuity ? (obinl + 1) : continuity
    //七日签到数组
    for (let i = 0; i < num; i++) {
      if (i <= (obinl + 1)) {
        if (ornot == 0) {
          if (0 <= (obinl - i)) {
            that.data.day[obinl - i].src = "/pages/images/newspaper.png"
          }
        } else {
          if (0 <= (obinl - i - 1)) {
            that.data.day[obinl - i - 1].src = "/pages/images/newspaper.png"
          }
        }
      } else {
        return false
      }
    }
    //签到数组
    that.setData({
      day: that.data.day, //七天签到
      shuttime: [that.data.cur_year, that.data.cur_month, (that.data.getDate - ornot)], //结束签到时间
    })
    if (that.data.getDate < continuity) { //当前天数不够减去连续签到天数
      let qindao = continuity - that.data.getDate //签到天数
      let rili = parseInt(that.getThisMonthDays(cur_year, cur_month)) //上月天数
      if ((rili + that.data.getDate) < continuity) { //连续签到天数大于上个月加当前日期的和
        cur_month = cur_month - 1
        if (cur_month < 1) {
          cur_year = cur_year - 1;
          cur_month = 12;
        }
        let guil = parseInt(that.getThisMonthDays(cur_year, cur_month)) //上月天数
        that.setData({
          opentime: [cur_year, cur_month, (guil - (qindao - rili) + 1 - ornot)], //开始签到时间
        })
      } else {
        that.setData({
          opentime: [cur_year, cur_month, (rili - qindao + 1 - ornot)], //开始签到时间
        })
      }
    } else {
      that.setData({
        opentime: [that.data.cur_year, that.data.cur_month, (that.data.getDate - continuity + 1 - ornot)], //开始签到时间
      })
    }
    this.calculateDays(that.data.cur_year, that.data.cur_month); //数组获取
  },
  //打卡签到
  dakainc: function (e) {
    let that = this
    let date = new Date();
    that.setData({
      ornot: true,
      continuity: that.data.continuity + 1,
      days: [],
      cur_year: date.getFullYear(),
      cur_month: date.getMonth() + 1,
      todayIndex: date.getDate(),
      judge: 1,
    })
    that.dataTime() //年月份排版
    that.calculateEmptyGrids(that.data.cur_year, that.data.cur_month) //年月份排版
    that.sigarr(); //获取数组参数
    that.popup(); //显示签到弹窗
  },
  //显示签到弹窗
  popup: function (e) {
    this.setData({
      sign: !this.data.sign
    })
  },
  //七日数组显示文字
  wenlin: function (e) {
    let index = e.currentTarget.dataset.index
    this.data.day[index].check = this.data.day[index].check ? false : true
    this.setData({
      day: this.data.day
    })
  },
  //数组显示文字
  wenldisp: function (e) {
    let index = e.currentTarget.dataset.index
    this.data.days[index].check = this.data.days[index].check ? false : true
    this.setData({
      days: this.data.days
    })
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
})
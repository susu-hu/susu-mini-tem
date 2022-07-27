Component({
  properties: {
    // 是否展示日期选择
    isShow: {
      type: Boolean,
      value: false
    },
    // 开始时间
    timeStart: {
      type: String,
      value: '',
      observer: function (e) {
        if (this.data.data.length) {
          this.setDate()
        } else {
          setTimeout(() => {
            this.setDate()
          }, 50);
        }
      }
    },
    // 结束时间
    timeEnd: {
      type: String,
      value: '',
      observer: function (e) {
        if (this.data.data.length) {
          this.setDate()
        } else {
          setTimeout(() => {
            this.setDate()
          }, 50);
        }
      }
    },
    // 最小日期
    minDate: {
      type: String,
      value: '2018/1/1'
    },
    // 主题色
    theme_color: {
      type: String,
      value: '#2493F8'
    }
  },
  data: {
    currentDate: '', //scrollintoview的id
    year: '', // 年
    month: '', // 月
    date: '', // 日
    today: {}, // 今天的年月日
    data: [ // 容器
      // {
      //   year: '',
      //   month: '',
      //   date: '',
      //   weeks: [
      //     {
      //       year: '',
      //       month: '',
      //       date: '', 
      //       noDay: true,// 是否可以选择
      //       noLessMonth: true,// 是否小于本月日期
      //       isStart: false,// 是否是开始状态
      //       isEnd: false,// 是否是结束状态
      //       isMatter: false,// 是否开始结束中间状态
      //       isFront: false,// 是否本月第一天
      //       isBack: false,// 是否本月最后一天
      //     }
      //   ],// 数据
      // }
    ],
    // 未选择 已选择开始时间 已选择结束时间
    type: '未选择',
  },
  methods: {
    // 颜色转换
    hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    // rgba+透明度转换到是十六进制
    hexify(color) {
      var values = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',');
      var a = parseFloat(values[3] || 1),
        r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
        g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
        b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
      return "#" +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2);
    },
    reset() {
      this.data.data.forEach((item, index) => {
        item.weeks.forEach((item1, index1) => {
          item1.forEach((item2, index2) => {
            item2.isStart = false;
            item2.isEnd = false;
            item2.isMatter = false;
          })
        })
      })
      this.setData({
        data: this.data.data
      })
      // this.triggerEvent('reset', {});
    },
    showture() {
      return false
    },
    // 初始化
    init() {
      let _date = new Date(this.data.minDate) //最小日期
      let new_date = new Date(); //当前月
      let year = _date.getFullYear()
      let month = _date.getMonth() + 1
      let date = _date.getDate()
      let month_num = this.MonthsBetw(_date, new_date)
      let currentDate = 'view' + month_num;
      // 初始化当月数据
      this.setData({
        currentDate: currentDate,
        year,
        month,
        date,
        today: {
          year,
          month,
          date
        }
      })
      this.getCalendar(month_num)
    },
    // 计算最小时期与当前日期之前的时间差
    MonthsBetw(date1, date2) {
      let start = new Date(date1);
      let end = new Date(date2);
      let startYear = start.getFullYear();
      let startMonth = start.getMonth();
      let endYear = end.getFullYear();
      let endMonth = end.getMonth();
      let months = (endYear - startYear) * 12 + endMonth - startMonth;
      return months
    },
    // 获取日历（每次获得半年的月份）
    async getCalendarNext(e) {
      for (let i = 0; i < 6; i++) {
        // set每月的数据
        this.data.data.push(await this.showThisDay(this.data.year, this.data.month, this.data.date))
        if (this.data.month == 12) { // 加一年 1月
          this.data.year = this.data.year + 1
          this.data.month = 1
        } else { // 月份加一
          this.data.month = this.data.month + 1
        }
      }
      this.setData({
        data: this.data.data
      })
      // console.log('滚动的数据', this.data.data)
    },
    // 获取日历初始化
    async getCalendar(loop_num) {
      // console.log(loop_num)
      this.setData({
        loop_num: loop_num
      })
      for (let i = 0; i < loop_num + 1; i++) {
        // set每月的数据
        this.data.data.push(await this.showThisDay(this.data.year, this.data.month, this.data.date))
        if (this.data.month == 12) { // 加一年 1月
          this.data.year = this.data.year + 1
          this.data.month = 1
        } else { // 月份加一
          this.data.month = this.data.month + 1
        }
      }
      this.setData({
        data: this.data.data
      })
    },
    // 获取每月的数据
    showThisDay(_year, _month) {
      return new Promise((resolve, reject) => {
        let canlender = []
        let year = _year,
          month = _month
        let firstDay = new Date(year, month - 1, 1).getDay()
        let lastMonthDays = []
        // 上个月需要显示的天数
        for (let i = firstDay - 1; i >= 0; i--) {
          lastMonthDays.push({
            'year': year,
            'date': parseInt(new Date(year, (month - 1), -i).getDate()),
            'month': parseInt(month) - 1,
            'noDay': true,
          })
        }

        let currentMonthDys = [];
        let eachLast = new Date(year, month, 0).getDate()
        //  这个月显示的天数进行判断  如果已经过去则没法点击
        for (let i = 1; i <= eachLast; i++) {
          let info = {
            'year': year,
            'date': i,
            'month': month,
            'noDay': false,
            'isFront': i == 1 ? true : false,
            'isBack': i == eachLast ? true : false,
          }

          if (this.data.today.year == year && this.data.today.month == month) {
            if (i < this.data.today.date) {
              // 是否小于本月日期
              info.noLessMonth = true
            }
          }
          currentMonthDys.push(info)
        }

        let nextMonthDays = []
        // 下个月显示的天数
        let endDay = new Date(year, month, 0).getDay();
        for (let i = 1; i < 7 - endDay; i++) {
          nextMonthDays.push({
            'year': year,
            'date': i,
            'month': parseInt(month) + 1,
            'noDay': true,
          })
        }

        canlender = canlender.concat(lastMonthDays, currentMonthDys, nextMonthDays)
        let weeks = []

        for (let i = 0; i < canlender.length; i++) {
          if (i % 7 == 0) {
            weeks[parseInt(i / 7)] = new Array(7);
          }
          weeks[parseInt(i / 7)][i % 7] = canlender[i]
        }

        let info = {
          'weeks': weeks,
          'year': _year,
          'month': _month,
        }
        resolve(info)
      })
    },
    // 监听开始时间和结束时间修改
    setDate() {
      let item1 = this.data.timeStart.split('-')
      let _item1 = {
        year: item1[0],
        month: item1[1],
        date: item1[2]
      }
      let item2 = this.data.timeEnd.split('-')
      let _item2 = {
        year: item2[0],
        month: item2[1],
        date: item2[2]
      }

      for (let item of this.data.data) {
        for (let weeks of item.weeks) {
          for (let i of weeks) {
            let status1 = (i.year == _item1.year && i.month == _item1.month && i.date == _item1.date)
            let status2 = (i.year == _item2.year && i.month == _item2.month && i.date == _item2.date)
            if (status1 && status2) {
              // 开始日期标记
              i.isStart = true
              // 结束日期标记
              i.isEnd = true
            } else if (status1) {
              // 开始日期标记
              i.isStart = true
            } else if (status2) {
              // 结束日期标记
              i.isEnd = true
            } else {
              i.isStart = false
              i.isEnd = false
            }
          }
        }
      }

      // 开始结束中间日期状态标记
      this.editItem5(_item1, _item2)
      this.setData({
        type: '已选择结束时间',
        data: this.data.data
      })
    },

    // 清除日期
    clearDate() {
      return new Promise((resolve, reject) => {
        for (let item of this.data.data) {
          for (let weeks of item.weeks) {
            for (let i of weeks) {
              i.isStart = false
              i.isEnd = false
              i.isMatter = false
            }
          }
        }
        resolve()
      })
    },

    // 修改当前点击状态为'开始' type改为'已选择开始时间'
    editItem1(param) {
      let {
        index,
        i1,
        i2
      } = param
      this.data.data[index].weeks[i1][i2].isStart = true
      this.setData({
        type: '已选择开始时间',
        data: this.data.data
      })
    },

    // 选择结束时间
    editItem2(param) {
      let {
        data
      } = this.data
      let {
        index,
        i1,
        i2
      } = param

      if ((getDate1() - getDate2()) >= 0) {
        // 当前点击时间晚于或等于开始时间
        // 修改当前点击状态为'结束' 开始结束中间日期状态修改为'true' type改为'已选择结束时间'
        this.editItem3({
          index,
          i1,
          i2
        })
      } else {
        // 当前点击时间早于开始时间
        // 修改之前开始状态改为'结束' 修改当前点击状态为'开始' 开始结束中间日期状态修改为'true' type改为'已选择结束时间'
        this.editItem4({
          index,
          i1,
          i2
        })
      }

      // 当前选中日期时间戳
      function getDate1() {
        let item1 = data[index].weeks[i1][i2]
        let _month1 = item1.month < 10 ? ('0' + item1.month) : item1.month
        let _date1 = item1.date < 10 ? ('0' + item1.date) : item1.date
        let date1 = Date.parse(new Date(`${item1.year}-${_month1}-${_date1}`.replace(/-/g, "/")))
        return date1
      }

      // 之前选中日期时间戳
      function getDate2() {
        let item2 = {}
        for (let item of data) {
          for (let weeks of item.weeks) {
            for (let i of weeks) {
              if (i.isStart) {
                item2 = i
              }
            }
          }
        }
        let _month2 = item2.month < 10 ? ('0' + item2.month) : item2.month
        let _date2 = item2.date < 10 ? ('0' + item2.date) : item2.date
        let date2 = Date.parse(new Date(`${item2.year}-${_month2}-${_date2}`.replace(/-/g, "/")))
        return date2
      }
    },

    // 修改当前点击状态为'结束' 开始结束中间日期状态修改为'true' type改为'已选择结束时间'
    editItem3(param) {
      let {
        index,
        i1,
        i2
      } = param
      // 修改当前点击状态为'结束'
      this.data.data[index].weeks[i1][i2].isEnd = true
      let _item1 = {}
      let _item2 = this.data.data[index].weeks[i1][i2]
      for (let item of this.data.data) {
        for (let weeks of item.weeks) {
          for (let i of weeks) {
            if (i.isStart) {
              _item1 = i
            }
          }
        }
      }
      // console.log('开始日期', _item1)
      // console.log('结束日期', _item2)
      // 开始结束中间日期状态修改为'true'
      this.editItem5(_item1, _item2)

      this.setData({
        type: '已选择结束时间',
        data: this.data.data
      })
    },

    // 修改之前开始状态改为'结束' 修改当前点击状态为'开始' 开始结束中间日期状态修改为'true' type改为'已选择结束时间'
    editItem4(param) {
      let {
        index,
        i1,
        i2
      } = param
      let _item1 = this.data.data[index].weeks[i1][i2]
      let _item2 = {}
      for (let item of this.data.data) {
        for (let weeks of item.weeks) {
          for (let i of weeks) {
            if (i.isStart) {
              i.isStart = false
              // 修改之前开始状态改为'结束'
              i.isEnd = true
              _item2 = i
            }
          }
        }
      }
      // console.log('开始日期', _item1)
      // console.log('结束日期', _item2)
      // 修改当前点击状态为'开始' 
      this.data.data[index].weeks[i1][i2].isStart = true
      // 开始结束中间日期状态修改为'true'
      this.editItem5(_item1, _item2)

      this.setData({
        type: '已选择结束时间',
        data: this.data.data
      })
    },

    // 开始结束中间日期状态修改为'true'
    editItem5(_item1, _item2) {
      for (let item of this.data.data) {
        for (let weeks of item.weeks) {
          for (let i of weeks) {

            // 筛选年范围
            if (_item1.year == _item2.year) {
              // 开始日期和结束日期在同一年(2021~2021)
              if (i.month >= _item1.month && i.month <= _item2.month) {
                // 筛选月范围
                if (_item1.month == _item2.month) {
                  // 开始日期和结束日期在同一月
                  if ((i.date > _item1.date) && (i.date < _item2.date)) {
                    i.isMatter = true
                  }
                } else {
                  // 不在同一月
                  if (i.month == _item1.month) {
                    // 开始日期当月
                    if (i.date > _item1.date) {
                      i.isMatter = true
                    }
                  } else if (i.month == _item2.month) {
                    // 结束日期当月
                    if (i.date < _item2.date) {
                      i.isMatter = true
                    }
                  } else {
                    // 开始日期和结束日期中包含的月
                    i.isMatter = true
                  }
                }
              }
            } else if (i.year == _item1.year) {
              // 开始日期年(2021~2023 中的2021)
              if (i.month > _item1.month) {
                i.isMatter = true
              } else if (i.month == _item1.month && i.date > _item1.date) {
                i.isMatter = true
              }
            } else if (i.year == _item2.year) {
              // 结束日期年(2021~2023 中的2023)
              if (i.month < _item2.month) {
                i.isMatter = true
              } else if (i.month == _item2.month && i.date < _item2.date) {
                i.isMatter = true
              }
            } else {
              // 开始日期和结束日期包含的年(2021~2023 中的2022)
              i.isMatter = true
            }

          }
        }
      }
    },

    // 选择日期
    getThisData(e) {
      let {
        data,
        type
      } = this.data
      let {
        title,
        index,
        i1,
        i2
      } = e.currentTarget.dataset
      // console.log('点击参数接收值:', {
      //   title,
      //   index,
      //   i1,
      //   i2
      // })
      // console.log('点击值:', data[index].weeks[i1][i2])
      // console.log('当前type:', type)
      switch (type) {
        case '未选择':
          // 清除日期
          this.clearDate().then(() => {
            // 修改当前点击状态为'开始' type改为'已选择开始时间'
            this.editItem1({
              index,
              i1,
              i2
            })
          })
          break;
        case '已选择开始时间':
          // 选择结束时间
          this.editItem2({
            index,
            i1,
            i2
          })
          break;
        case '已选择结束时间':
          // 清除日期
          this.clearDate().then(() => {
            // 修改当前点击状态为'开始' type改为'已选择开始时间'
            this.editItem1({
              index,
              i1,
              i2
            })
          })
          break;
      }
    },
    // 关闭
    tapNo() {
      this.setData({
        isShow: false
      })
      this.triggerEvent('tapNo', {});
    },

    // 确定
    tapYes() {
      let start = {}
      let end = {}
      for (let item of this.data.data) {
        for (let weeks of item.weeks) {
          for (let i of weeks) {
            if (i.isStart) {
              start = i
            }
            if (i.isEnd) {
              end = i
            }
          }
        }
      }
      this.triggerEvent('tapYes', {
        start,
        end
      });
      this.tapNo()
    }
  },
  lifetimes: {
    attached() {
      this.init()
      let color = this.hexToRgb(this.data.theme_color)
      let new_color = '',
        new_color1 = '',
        color2;
      for (let i in color) {
        new_color += i;
        new_color1 += color[i] + ",";
      }
      color2 = this.hexify(new_color + '(' + new_color1 + '.1)'),
        this.setData({
          color2,
        })
    }
  }
})
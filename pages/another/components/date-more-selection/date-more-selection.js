Component({
  properties: {
    // 显示开关
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
  },
  data: {
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
  attached() {
    this.init()
  },
  methods: {

    // 初始化
    init() {
      let _date = new Date()
      let year = _date.getFullYear()
      let month = _date.getMonth() + 1
      let date = _date.getDate()
      // 初始化当月数据
      this.setData({
        year,
        month,
        date,
        today: {
          year,
          month,
          date
        }
      })
      this.getCalendar()
    },

    // 获取日历（每次获得半年的月份）
    async getCalendar() {

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
            // 测试
            // else if (i == 13) {
            //   // 是否开始状态
            //   info.isStart = true
            // } else if (i == 22) {
            //   // 是否结束状态
            //   info.isEnd = true
            // } else if (i == 14 || i == 15 || i == 16 || i == 17 || i == 18 || i == 19 || i == 20 || i == 21) {
            //   // 是否开始结束中间状态
            //   info.isMatter = true
            // }
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
      console.log('监听开始时间和结束时间修改')
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
        // this.setData({
        //   data: this.data.data
        // })
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
      console.log('开始日期', _item1)
      console.log('结束日期', _item2)
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
      console.log('开始日期', _item1)
      console.log('结束日期', _item2)
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
      console.log('点击参数接收值:', {
        title,
        index,
        i1,
        i2
      })
      console.log('点击值:', data[index].weeks[i1][i2])
      console.log('当前type:', type)

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
})
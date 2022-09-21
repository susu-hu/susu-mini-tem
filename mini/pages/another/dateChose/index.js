Page({
  data: {
    one: {
      // 是否显示单日期
      dateIsShow: false,
      // 当前选中的时间 (2021-06-30或2021-6-30) 不传递默认当前时间
      defaultTime: '',
      // 小时分钟
      time: '12:30',
      // 出生日期 不传递则不进行当前时间是否小于出生日期校验(2021-06-30或2021-6-30)
      birthday: '2021-06-30',
      // 单日期值
      value2: ''
    },

    more: {
      // 是否显示多日期
      dateMoreIsShow: false,
      // 开始时间 (2021-06-30或2021-6-30) 不传递默认不选【注意：开始结束时间要么都不传入值，要么全都传入值，不能出现一个有值一个没值情况】
      timeStart: '',
      // 结束时间 (2021-06-30或2021-6-30) 不传递默认不选【注意：开始结束时间要么都不传入值，要么全都传入值，不能出现一个有值一个没值情况】
      timeEnd: ''
    }
  },
  tapDate1() {
    this.setData({
      'one.dateIsShow': true
    })
  },
  tapYes1(e) {
    console.log('选择了单日期, 值为：', e.detail)
    let { year, month, date, day } = e.detail
    this.setData({
      'one.defaultTime': `${year}-${month}-${date} ${day}`
    })
  },
  tapDate2() {
    this.setData({
      'more.dateMoreIsShow': true
    })
  },
  tapYes2(e) {
    console.log('选择了多日期, 值为：', e.detail)
    let { start, end } = e.detail
    this.setData({
      'more.timeStart':`${start.year}-${start.month}-${start.date}`,
      'more.timeEnd': `${end.year}-${end.month}-${end.date} `
    })
  },
})
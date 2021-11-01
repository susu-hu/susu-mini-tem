Page({
  data: {
    date: '',
    show: false,
    minDate: new Date(2020, 0, 1).getTime(),
    maxDate: new Date(2022, 0, 31).getTime(),
  },

  onDisplay() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },

  MonthsBetw(date1, date2) {
    console.log(date1, date2)
    date1 = new Date(date1).toLocaleDateString().replace(/\//g, '-').replace(/^(\d{2})(\d{2})(\d{4})$/, "$3-$2-$1")
    date2 = new Date(date2).toLocaleDateString().replace(/\//g, '-').replace(/^(\d{2})(\d{2})(\d{4})$/, "$3-$2-$1")
    // 用-分成数组
    date1 = date1.split("-");
    date2 = date2.split("-");
    //获取年,月数
    var year1 = parseInt(date1[0]),
      month1 = parseInt(date1[1]),
      year2 = parseInt(date2[0]),
      month2 = parseInt(date2[1]),
      //通过年,月差计算月份差
      months = (year2 - year1) * 12 + (month2 - month1);
    return months;
  },
  onShow() {
    // this.setData({
    //   aa: this.MonthsBetw('2021-1-1', '2021-12-1')
    // })
    this.setData({
      aa:this.run()
    })
  },

  run() {
    // new Date("2019-08-23"); //2019-08-23 08:00:00
    // new Date("2019/08/23"); //2019-08-23 00:00:00
    //算两个时间的月份差
    let options = {
      startDate: '2018-1-1',
      endDate: '2019-1-1'
    }
    let start = new Date(options.startDate.replace(/\-/g, "/"));
    let end = new Date(options.endDate.replace(/\-/g, "/"));
    let startYear = start.getFullYear();
    let startMonth = start.getMonth();
    let endYear = end.getFullYear();
    let endMonth = end.getMonth();
    let monthCount = (endYear - startYear) * 12 + endMonth - startMonth;
    return monthCount
    console.log(monthCount)

    //算两个时间天数差
    // let start = new Date(options.startDate.replace("-", "/")).getTime();
    // let end = new Date(options.endDate.replace("-", "/")).getTime();
    // let day = Math.floor((end - start) / (1000 * 60 * 60 * 24));

  }


});
Page({
  data: {
    left_time_list: [],//剩余时间转换，天时分秒
    left_time_list_date: [],//在拆分
    timer: '',//定时器
  },
  onShow() {
    this.getLeftTime('2023/04/08 11:20:00')
  },
  /**
   * 计算剩余时间
   * @param {*} end_time
   */
  getLeftTime(end_time) {
    // 获取剩余秒数
    let left_time = this.getTimestap(end_time);
    this.initDate(left_time);
    this.data.timer = setInterval(() => {
      if (left_time-- === 0) {
        this.setData({
          left_time_list: this.formateSeconds(0)
        })
        clearInterval(this.data.timer)
      } else {
        this.initDate(left_time)
      }
    }, 1000)
  },
  /**
   * 初始化数据
   * @param {*} e 
   */
  initDate(e) {
    let left_time_list = this.formateSeconds(e),
      left_time_list_date = this.formatDate(JSON.stringify(left_time_list))
    this.setData({
      left_time_list, left_time_list_date
    })
  },
  /**
   * 天-时-分-秒
   * @param {*} e 
   */
  formateSeconds(e) {
    let time = [],
      day = parseInt(e / 86400),
      hour = parseInt((e % 86400) / 3600),
      min = parseInt(((e % 86400) % 3600) / 60),
      sec = parseInt(((e % 86400) % 3600) % 60);
    time[0] = day > 0 ? this.addZero(day) : 0;
    time[1] = hour > 0 ? this.addZero(hour) : 0;
    time[2] = min > 0 ? this.addZero(min) : 0;
    time[3] = sec > 0 ? this.addZero(sec) : 0;
    return time;
  },
  /**
   * 添0
   * @param {*} num 
   */
  addZero(num) {
    return num < 10 ? '0' + num : num;
  },
  /**
   * 获取指定时间-当前时间的描述
   * @param {*} end_time 
   */
  getTimestap(end_time) {
    // 当前时间
    let currentTime = parseInt(new Date().getTime() / 1000);
    // 指定时间
    let futureTime = parseInt(new Date(end_time.replace(/-/g, '/')).getTime() / 1000);
    return futureTime <= currentTime ? 0 : futureTime - currentTime;
  },
  /**
   * 格式化日期
   * @param {*} e 
   */
  formatDate(e) {
    let list = JSON.parse(e);
    for (let i = 0; i < list.length; i++) {
      list[i] = list[i].toString().split('')
    }
    return list;
  },
  // 页面卸载销毁定时器
  onUnload() {
    if (this.data.timer) {
      console.log('销毁定时器')
      clearInterval(this.data.timer)
    }
  }
})
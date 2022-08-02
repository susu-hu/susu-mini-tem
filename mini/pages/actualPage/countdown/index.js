Page({
  data: {
    left_time: '', //活动剩余时间的秒数
    timer: '', //倒计时定时器
    left_time_list: [], //剩余秒数转换 天，小时 分 秒
  },
  onShow: function () {
    this.getLeftTime('2023/08/03 11:20:00')
  },
  /**
   * 定时器，计算剩下时间
   * @param {*} end_time 
   */
  getLeftTime(end_time) {
    let left_time = this.getTimestap(end_time),
      left_time_list = this.formatSeconds(left_time);
    this.setData({
      left_time,
      left_time_list
    })
    this.data.timer = setInterval(() => {
      if (left_time-- === 0) {
        this.setData({
          left_time: 0,
          left_time_list: this.formatSeconds(0)
        })
        clearInterval(this.data.timer)
      } else {
        let left_time_list = this.formatSeconds(left_time)
        this.setData({
          left_time,
          left_time_list
        })
      }
    }, 1000);
  },
  /**
   * 获取指定时间-当前时间的秒数
   * @param {*} end_time 
   */
  getTimestap(end_time) {
    // 当前时间
    var currentTime = parseInt(new Date().getTime() / 1000);
    // 未来时间
    var futureTime = parseInt(new Date(end_time.replace(/-/g, '/')).getTime() / 1000); //ios无法解析
    return futureTime <= currentTime ? 0 : futureTime - currentTime;
  },
  /**
   * 毫秒-天-时-分-秒
   * @param {*} value 
   */
  formatSeconds(value) {
    let time = [],
      day = parseInt(value / 86400),
      hour = parseInt((value % 86400) / 3600),
      min = parseInt(((value % 86400) % 3600) / 60),
      sec = parseInt(((value % 86400) % 3600) % 60);
    time[0] = day > 0 ? this.addZero(day) : this.addZero(0);
    time[1] = hour > 0 ? this.addZero(hour) : this.addZero(0);
    time[2] = min > 0 ? this.addZero(min) : this.addZero(0);
    time[3] = sec > 0 ? this.addZero(sec) : this.addZero(0);
    return time;
  },
  /**
   * 补0
   * @param {*} num 
   */
  addZero(num) {
    return num < 10 ? "0" + num : num;
  },
  onUnload() {
    if (this.data.timer) {
      console.log('销毁计时器')
      clearInterval(this.data.timer)
    }
  }
})
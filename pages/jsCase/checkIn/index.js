Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_time: '',
    status: 0, //0---》上班未打卡 1----》上班已打卡 
    now_time_stop: '', //已打卡时间
  },


  onLoad: function (options) {
    this.getCurrentTime();
    this.setData({
      now_time: this.getTime(),
      today_date: this.formatDate(new Date())
    })
  },

  onShow: function () {

  },
  // 签到打卡
  clockInStart() {
    wx.vibrateLong(); //使手机震动400ms
    this.setData({
      status: 1, //上班已打卡
      now_time_stop: this.data.now_time,
    }, wx.showToast({
      title: '签到成功',
      icon: 'none'
    }))
  },

  getCurrentTime: function () {
    var time = setInterval(() => {
      this.setData({
        now_time: this.getTime()
      })
    }, 1000)
  },
  getTime() {
    let dateTime = '';
    let hh = new Date().getHours()
    let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
      new Date().getMinutes()
    let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :
      new Date().getSeconds()
    dateTime = hh + ':' + mf + ':' + ss;
    return dateTime;
  },

  // 获取当前的日期
  formatDate(timestamp) {
    var date = new Date(timestamp);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return YY + MM + DD;
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendar:[],
    width:0,
    currentIndex:0,
    currentTime: 0,
    timeArr: [
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" },
      { "time": "8:00-10:00", "status": "约满" },
      { "time": "8:00-10:00", "status": "约满" },
      { "time": "8:00-10:00", "status": "约满" },
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" }, 
      { "time": "8:00-10:00", "status": "约满" },
      { "time": "8:00-10:00", "status": "约满" }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    function getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate();
    }
  // 计算每月第一天是星期几
    function getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
    }
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const cur_date=date.getDate();
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    //利用构造函数创建对象
    function calendar(date,week){
      this.date=cur_year+'-'+cur_month+'-'+date;
      if(date==cur_date){
        this.week = "今天";
      }else if(date==cur_date+1){
        this.week = "明天";
      }else{
        this.week = '星期' + week;
      }
    }
    //当前月份的天数
    var monthLength= getThisMonthDays(cur_year, cur_month)
    //当前月份的第一天是星期几
    var week = getFirstDayOfWeek(cur_year, cur_month)
    var x = week;
    for(var i=1;i<=monthLength;i++){
      //当循环完一周后，初始化再次循环
      if(x>6){
        x=0;
      }
      //利用构造函数创建对象
      that.data.calendar[i] = new calendar(i, [weeks_ch[x]][0])
      x++;
    }
    //限制要渲染的日历数据天数为7天以内（用户体验）
    var flag = that.data.calendar.splice(cur_date, that.data.calendar.length - cur_date <= 7 ? that.data.calendar.length:7)
    that.setData({
      calendar: flag
    })
    //设置scroll-view的子容器的宽度
    that.setData({
      width: 186 * parseInt(that.data.calendar.length - cur_date <= 7 ? that.data.calendar.length : 7)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  select:function(event){
    //为上半部分的点击事件
    this.setData({
      currentIndex: event.currentTarget.dataset.index
    })
  },
  selectTime:function(event){
    //为下半部分的点击事件
    this.setData({
      currentTime: event.currentTarget.dataset.tindex
    })
  }
})
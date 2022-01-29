// pages/jsCase/fixChose/index.js
import util from '../util/utils';
Page({


  data: {
    select_list: [
      {
        name: '查询时间'
      },
      {
        name: '查本月'
      },
      {
        name: '近30天'
      },
      {
        name: '指定日期'
      },
    ],
    hasData: true,
    choseType: undefined, //选中的弹框类型
    sel_list: {
      start_time: '',
      end_time: '',
    },
    show_chose: false, //是否展示筛选项
    total: 0,
  },


  onLoad: function (options) {

  },


  onReady: function () {
    var query = wx.createSelectorQuery();
    query.select('#fix_box').boundingClientRect()
    query.exec((res) => {
      var height = res[0].height; // 获取高度
      this.setData({
        fix_top: height
      })
    })
  },


  onShow: function () {
    let date = this.getRangDate()
    this.setData({
      show_chose: true,
      'sel_list.start_time': date.startDate,
      'sel_list.end_time': date.endDate,
    })
  },

  /**
    * 获取本月开始和结束日期
    * @returns {{endDate: string, startDate: string}}
    */
  getRangDate() {
    var firstDate = new Date();
    var startDate = firstDate.getFullYear() + "-" + ((firstDate.getMonth() + 1) < 10 ? "0" : "") + (firstDate.getMonth() + 1) + "-" + "01";
    var date = new Date();
    var currentMonth = date.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    var lastDate = new Date(nextMonthFirstDay - oneDay);
    var endDate = lastDate.getFullYear() + "-" + ((lastDate.getMonth() + 1) < 10 ? "0" : "") + (lastDate.getMonth() + 1) + "-" + (lastDate.getDate() < 10 ? "0" : "") + lastDate.getDate();
    return { startDate, endDate }
  },
  tabSelect(e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.choseType === index || index === undefined) {
      return false;
    } else {
      this.setData({
        choseType: index,
      })
    }

    if (index == 1) {
      var now = new Date(); //当前日期 
      var nowMonth = now.getMonth(); //当前月 
      var nowYear = now.getFullYear(); //当前年 
      //本月开始时间
      var monthStartDate = new Date(nowYear, nowMonth, 1);
      //本月结束时间
      var monthEndDate = new Date(nowYear, nowMonth + 1, 0);
      var beginTime = util.formatDate(Date.parse(monthStartDate));
      var endTime = util.formatDate(Date.parse(monthEndDate));
    } else if (index == 2) {
      var myDate = new Date(); //获取今天日期
      var nowDate = new Date(myDate.setDate(myDate.getDate() - 29));
      var year = nowDate.getFullYear();
      var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
      var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      var beginTime = year + "-" + month + "-" + day;
      var endTime = util.toolsFn.getNowTime(2);
    } else if (index == 3) {
      var beginTime = '2022-1-15';
      var endTime = '2022-2-4';
    }

    if (index != 0) {
      this.selectComponent('#date').reset()
      console.log(beginTime, endTime)
      this.setData({
        show_chose: true,
        'sel_list.start_time': beginTime,
        'sel_list.end_time': endTime,
      }, () => {
        wx.pageScrollTo({
          scrollTop: 0
        })
        this.onReady()
      })
    }
  },
  // 选择查询时间
  dateSubmit(e) {
    let {
      start,
      end
    } = e.detail,
      beginTime = `${start.year}-${start.month}-${start.date}`,
      endTime = `${end.year}-${end.month}-${end.date} `

    if (!start.year || !end.year) {
      return wx.showToast({
        title: '请选择查询时间',
        icon: 'none'
      })
    }
    this.setData({
      show_chose: true,
      'sel_list.start_time': beginTime,
      'sel_list.end_time': endTime,
    }, function () {
      wx.pageScrollTo({
        scrollTop: 0
      })
    })
    this.closeModal();
    this.onReady()
  },
  // 关闭弹框
  closeModal() {
    this.setData({
      choseType: 'no'
    })
  },
  // 重置
  reset() {
    this.setData({
      sel_list: {
        start_time: '',
        end_time: '',
      },
      show_chose: false, //不展示筛选项
      choseType: null,
    }, function () {
      wx.pageScrollTo({ scrollTop: 0 })
    })
    this.onReady()
    // 触发日期组件的重置日期方法
    this.selectComponent('#date').reset()
  },
})
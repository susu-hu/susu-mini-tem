// import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp();
Page({
  data: {
    navHeight: app.globalData.navHeight, //导航栏高度
    navTop: app.globalData.navTop, //导航栏距顶部距离
    navObj: app.globalData.navObj, //胶囊的高度
    navObjWid: app.globalData.navObjWid, //胶囊宽度+距右距离
    dash_data: [
      {
        type:1,
        name:'测试1',
        num:1111
      },
      {
        type:1,
        name:'测试1',
        num:1111
      },
      {
        type:2,
        name:'测试1',
        num:1111
      },
      {
        type:2,
        name:'测试1',
        num:'999+'
      },
    ],
    ec: {
      lazyLoad: true // 延迟加载
    },
  },

  onLoad: function (options) {
    // this.echartsComponnet = this.selectComponent('#mychart-dom-pie');
  },

  onShow: function () {
    // this.getData();
  },

  /**
   * 获取图表数据
   */
  getData() {
    this.echartsComponnet.init((canvas, width, height, dpr) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      Chart.setOption(this.getOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  /**
   * 图表init
   */
  getOption() {
    var option = {
      xAxis: {
        type: 'category',
        data: ['1月', '3月', '5月', '7月', '11月']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [300, 255, 690, 880, 558, 33, 77],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            color: '#48A3FF', //改变折线点的颜色
            lineStyle: {
              color: '#48A3FF' //改变折线颜色
            }
          }
        },

      }],
      // 悬浮图标
      tooltip: {
        show: true,
        trigger: 'axis',
        position: function (pos, params, dom, rect, size) {
          var obj = {
            top: 60
          };
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        }
      },
    };
    return option;
  },
  /**
   * 回到上一页
   */
  goBack: function () {
    wx.navigateBack({
      delta: 1,
      fail: function () {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  },

})
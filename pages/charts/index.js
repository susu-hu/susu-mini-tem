import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#fff",
    legend: {
        type: 'scroll',
        show:true,
        // orient: 'vertical',
        right: 50,
        bottom: 0,
        icon: "circle", 
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: "{b} : \n {c}% "  
    },

    series: [{
      label: {
        normal: {
          formatter: "{b} : {c}% "  ,
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['0%', '40%'],
      data: [{
        value: 55,
        name: '北京',
        itemStyle: {color: '#9966ff'}
      }, {
        value: 20,
        name: '武汉'
      }, {
        value: 10,
        name: '杭州'
      }, {
        value: 20,
        name: '广州'
      }, {
        value: 38,
        name: '上海'
      }],
      // itemStyle: {
      //   normal: {
      //     label: {
      //       show: true,
      //       position: 'inner',
      //       formatter: "{d}%"
      //     },
      //     labelLine: {
      //       show: false
      //     }
      //   },
      // },
    }]
  };


  chart.setOption(option);
  return chart;

}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});

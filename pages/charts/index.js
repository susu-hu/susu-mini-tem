import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp();
Page({
  data: {
    ec: {
      lazyLoad: true // 延迟加载
    }
  },
  
  onShow() {
     //自定义的tabbar
     if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  
  },
  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart-dom-pie');
    this.getData(); //获取数据
  },
  getData(){
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption(this.getOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  getOption(){
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
    return option;
  },
});

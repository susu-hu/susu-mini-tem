import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp();
Page({
  data: {
    ec: {
      lazyLoad: true // 延迟加载
    }
  },
  handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  },
  handlerGohomeClick() {
    wx.switchTab({
      url: '/pages/index/index'
    })
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
    this.echartsComponnet.init((canvas, width, height,dpr) => {
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
          formatter: "{b} : \n {c}% "  ,
          position: function (point, params, dom, rect, size) {
            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
            // 提示框位置
            let x = 0; // x坐标位置
            let y = 0; // y坐标位置
       
            // 当前鼠标位置
            let pointX = point[0];
            let pointY = point[1];
  
       
            // 提示框大小
            let boxWidth = size.contentSize[0];
            let boxHeight = size.contentSize[1];
       
            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = 5;
            } else { // 左边放的下
              x = pointX - boxWidth;
            }
       
            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight > pointY) {
              y = 5;
            } else { // 上边放得下
              y = pointY - boxHeight;
            }
       
            return [x, y];
          }
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
            name: '北京2qweqweqw',
            itemStyle: {color: '#9966ff'}
          }, {
            value: 20,
            name: '武汉sdasdasd'
          }, {
            value: 10,
            name: '杭州dasdaewqeqweqweqwsdas'
          }, {
            value: 20,
            name: '广州'
          }, {
            value: 38,
            name: '上海武汉sdasdasd'
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

  toNextOne(){
    wx.navigateTo({
      url: '/pages/charts/index2',
    })
  }

});

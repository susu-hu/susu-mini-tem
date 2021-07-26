// pages/charts/index2.js
import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true // 延迟加载
    },
    ec1:{
      lazyLoad: true // 延迟加载
    },
    navList:['未完成','全部任务'],
    type:0,
  },

 
  tabNav(e) {
    let {index} = e.currentTarget.dataset;
    if (this.data.type === index || index === undefined) {
        return false;
    } else {
        this.setData({
            type: index,
        })
    }
  },
  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart-dom-pie');
    this.echartsComponnet1 = this.selectComponent('#mychart-dom-pie1');
    this.getData(); //获取数据
  },

  
  onShow: function () {

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

    this.echartsComponnet1.init((canvas, width, height,dpr) => {
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
      // backgroundColor: "#fff",
      title: {
        show: true,
        text :'单位：%',
        left: 'right',
        top: 50,
      },
      tooltip: {
          trigger: 'item',
          backgroundColor: "#e0bbc3",
          extraCssText:'z-index:0',
          position: function (point, params, dom, rect, size) {
            dom.style.transform = 'translateZ(0)';
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
      legend: {
          type: 'scroll',
          left: 'center',
          bottom: 0,
          icon: "circle", 
          itemWidth: 20,  // 设置宽度
          itemHeight: 20, // 设置高度
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['30%', '50%'],
              avoidLabelOverlap: true,
              itemStyle: {
                  borderRadius: 5,
                  borderColor: '#fff',
                  borderWidth: 2
              },
              label: {
                  show: false,
                  normal: {
                    formatter: "{b} : {d}% "  ,
                    fontSize: 14
                  },
                  // position: 'center'
              },
              // emphasis: {
              //     label: {
              //         show: true,
              //         fontSize: '20',
              //         fontWeight: 'bold'
              //     }
              // },
              labelLine: {
                  show: true
              },
              data: [
                  {value: 1048, name: '搜索引擎',itemStyle: { color: '#e0bbc3' }},
                  {value: 735, name: '直接访问',itemStyle: { color: '#d4788c' }},
                  {value: 580, name: '邮件营销',itemStyle: { color: '#b94962' }},
                  {value: 484, name: '杭州dasdaewqeqweqweqwsdas',itemStyle: { color: '#8d6c73' }},
                  {value: 300, name: '视频广告',itemStyle: { color: '#631223' }}
              ]
          }
      ]
    };
    return option;
  },

 
})
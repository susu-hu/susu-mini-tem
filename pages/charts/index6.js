// pages/charts/index6.js
import * as echarts from '../../components/ec-canvas/echarts';
Page({

  data: {
    ec: {
      lazyLoad: true // 延迟加载
    }
  },


  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart-dom-pie');
    this.getData(); //获取数据
  },

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
  getOption() {
    var checkName = '今天';
    var dataLength = 14; //默认的数据长度，既真实数组的长度，必须设置，长度来源：后台传输
    //这里是echart基础配置
    var option = {
      backgroundColor: '#fff',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          backgroundColor: 'rgba(245, 245, 245, 1)',
          borderWidth: 1,
          // padding: 10,
        }
      },
      dataZoom: [{
        show: false, //是否显示下方滚动条
        realtime: true,
        startValue: dataLength - 7,
        endValue: dataLength - 1, //显示数据结束位置
      },
      {
        type: 'inside',
        realtime: true,
        startValue: dataLength - 7,
        endValue: dataLength - 1, //显示数据结束位置
      }
      ],
      grid: {
        top: '20%',
        right: '0',
        left: '0',
        bottom: '12%'
      },
      xAxis: [{
        type: 'category',
        data: ['02.25', '02.26', '02.27', '02.28', '03.01', '03.02', '03.02', '02.25', '02.26', '02.27', '02.28', '03.01', '03.02', '今天'],
        axisLine: {
          lineStyle: {
            color: '#222'
          }
        },
        position: 'top',
        axisLabel: {
          color: function (params) {
            //通过判断选中的名字改变柱子的颜色样式
            if (checkName === params) {
              return 'rgb(51, 51, 51)';
            } else {
              return 'rgb(51, 51, 51,.3)';
            }
          },
          textStyle: {
            fontSize: 14
          },
          padding: [10, 0]
        },

      }],
      yAxis: [{
        show: false,
        axisLabel: {
          formatter: '{value}',
          color: '#69dbbf',
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        }
      }],
      series: [{
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156, 300, 450, 770, 203, 255, 188, 156],
        // itemStyle: {
        //     normal: {
        //         color: 'rgba(38,74,255,.3)',
        //     }
        // },
        itemStyle: {
          normal: {
            label: {
              show: true
            },
            color: function (params) {
              //通过判断选中的名字改变柱子的颜色样式
              if (checkName === params.name) {
                return 'rgb(221, 104, 57)';
              } else {
                return 'rgb(236, 137, 97)';
              }
            }
          }

        },
        label: {
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#000',
              fontSize: '12'
            },
            formatter: '{c}分'
          }
        }
      }]
    };
    return option;
  }
})
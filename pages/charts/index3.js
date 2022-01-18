import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp();
function initChart(canvas, width, height,dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr //解决小程序视图模糊的问题，必写
  });
  canvas.setChart(chart);

  var option = {
    //折线图标题
    title: {
      text: '折线图',
      left: 'center'
    },
    // 折线图线条的颜色
    color: ["#e09028", "#c78b3c", "#e2ab63"],
    // 折线图的线条代表意义
    legend: {
      itemWidth: 5, //小圆点的宽度
      itemGap: 25,
      selectedModel: 'single', //折线可多选
      inactiveColor: '#87CEEB',
      data: [{
        name: '测试',
        icon: 'circle',
        textStyle: {
          color: '#000000',
        }
      }],

      bottom: 0,
      left: 30,
      z: 100
    },
    // 刻度
    grid: {
      containLabel: true
    },
    // 悬浮图标
    tooltip: {
      show: true,
      trigger: 'axis',
      //这一步的效果是当你的光标在左边的时候，悬浮标题在右边，在右边的时候，悬浮标题在左边
      position: function (pos, params, dom, rect, size) {
        var obj = {
          top: 60
        };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
        return obj;
      }
    },
    //x坐标轴
    xAxis: {
      type: 'category',
      //x坐标轴
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    },
    //y坐标轴
    yAxis: [{
      type: 'value',
    }],
    dataZoom: [{
        type: 'slider',
        show: false, //show属性为false不展示缩放手柄，为true展示缩放手柄
        start: 0,
        end: 45,
        // handleSize: 88  该属性是缩放手柄的宽度
      },
      {
        type: 'inside',
        start: 0,
        end: 45
      }
    ],
    series: [{
      name: '测试',
      type: 'line',
      // 设置折线是否平滑
      smooth: false,
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbolSize: 8,
      lineStyle: {
        normal: {
          color: "#e2ab63", // 线条颜色
        },
      },
      //如果不需要阴影部分，直接删除areaStyle就可以了
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#e2ab63'
            },
            {
              offset: 1,
              color: '#ffffff'
            }
          ], false),
        }
      },
      //对应x轴的y轴数据
      data: [80, 78, 89, 78, 60, 66, 68, 69, 78, 72, 76, 71, 68, 86, 85, 83, 91, 87, 86, 86, 84, 87, 78, 63, 84]
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onReady() {}
});
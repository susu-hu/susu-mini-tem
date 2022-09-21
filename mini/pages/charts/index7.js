// pages/charts/index7.js
import * as echarts from '../../components/ec-canvas/echarts';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true // 延迟加载
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart-dom-bar');
    this.getData('echartsComponnet', 0); //获取数据
    this.echartsComponnetLine = this.selectComponent('#mychart-dom-line');
    this.getData('echartsComponnetLine', 1); //获取数据
    this.echartsComponnetLine1 = this.selectComponent('#mychart-dom-line1');
    this.getData('echartsComponnetLine1', 2); //获取数据
    this.echartsComponnetpie = this.selectComponent('#mychart-dom-pie');
    this.getData('echartsComponnetpie', 3); //获取数据
  },

  /**
   * 获取图表数据
   */
  getData(type, action) {
    this[type].init((canvas, width, height, dpr) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      Chart.setOption(this.getOption(action));
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  /**
   * 图表init
   */
  getOption(e) {
    if (e == 0) {
      return this.getBar(["服务1", "服务2", "服务3", "服务4", "服务5"], [2, 5, 1, 8, 1])
    }
    if (e == 1) {
      return this.getLine(["服务1", "服务2", "服务3", "服务4", "服务5"], [2, 5, 1, 8, 1], 1)
    }
    if (e == 2) {
      return this.getLine(["服务1", "服务2", "服务3", "服务4", "服务5"], [2, 22, 55, 22, 44], 2)
    }
    if (e == 3) {
      return this.getPie()
    }
  },
  /**
   * 获取数据
   */
  getBar(xData, yData) {
    let colorArr = ["#2886c6", "#50bfda", "#89e3ec"],
      color = {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: colorArr[0],
          },
          {
            offset: 0.5,
            color: colorArr[0],
          },
          {
            offset: 0.5,
            color: colorArr[1],
          },
          {
            offset: 1,
            color: colorArr[1],
          },
        ],
      },
      barWidth = 20,
      bottomData = [],
      topData = [];
    yData.filter((item) => {
      if (item) {
        bottomData.push(1);
        topData.push(item);
      } else {
        bottomData.push(0);
        topData.push({
          value: 1,
          itemStyle: {
            normal: {
              borderColor: "rgba(0,0,0,0)",
              borderWidth: 2,
              color: "rgba(0,0,0,0)",
            },
          },
        });
      }
    });
    let option = {
      animation: true, //控制动画示否开启
      animationDuration: 5000, // 动画的时长，它是以毫秒为单位
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,.5)",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "rgba(0,0,0,.5)",
          },
        },
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
      },
      grid: { //图表距边框的距离
        left: 10,
        right:20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      xAxis: {
        data: xData,
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)", //坐标的字体颜色
          fontSize: 12,
        },
      },
      yAxis: {
        axisLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          color: "rgba(255,255,255,.8)", //坐标的字体颜色
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.25)",
            type: "dashed",
          },
          //网格线颜色
        },
      },
      series: [{
          z: 1,
          name: "数据",
          type: "bar",
          barWidth: barWidth,
          barGap: "0%",
          data: yData,
          itemStyle: {
            normal: {
              color: color,
            },
          },
        },
        {
          z: 2,
          name: "数据",
          type: "pictorialBar",
          data: bottomData,
          symbol: "diamond",
          symbolOffset: ["0%", "50%"],
          symbolSize: [barWidth, 10],
          itemStyle: {
            normal: {
              color: color,
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 3,
          name: "数据",
          type: "pictorialBar",
          symbolPosition: "end",
          data: topData,
          symbol: "diamond",
          symbolOffset: ["0%", "-50%"],
          symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
          itemStyle: {
            normal: {
              borderColor: colorArr[2],
              borderWidth: 2,
              color: colorArr[2],
            },
          },
          tooltip: {
            show: false,
          },
        },
      ],
    };
    return option;
  },
  getLine(xData, yData, type) {
    let datacoords = [{
      coords: [],
    }, ];
    for (let i = 0; i < xData.length; i++) {
      datacoords[0].coords.push([xData[i], yData[i]]);
    }
    console.log(datacoords)
    let s1 = [{
        name: "苏苏小苏苏",
        type: "line",
        smooth: type == 2,
        smoothMonotone: "x",
        lineStyle: {
          width: 1.5,
          type: "solid",
          shadowOffsetX: 0, // 折线的X偏移
          shadowOffsetY: 3, // 折线的Y偏移
          shadowBlur: 4, // 折线模糊
          opcity: 1,
          shadowColor: "rgba(220,120,40,0.95)", //折线颜色
        },
        showSymbol: false,
        itemStyle: {
          color: "#DC7828",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: "rgba(220,120,40,0.3)",
            },
            {
              offset: 0.74,
              color: "rgba(220,120,40,0.26)",
            },
            {
              offset: 0,
              color: "rgba(220,120,40,0)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: yData,
      }],
      s2 = [{
          name: "苏苏小苏苏222",
          type: "line",
          smooth: type == 2,
          lineStyle: {
            color: "#00CCA9",
            width: 1.5,
            type: "solid",
            shadowOffsetX: 0, // 折线的X偏移
            shadowOffsetY: 3, // 折线的Y偏移
            shadowBlur: 4, // 折线模糊
            shadowColor: "rgba(0,204,169,0.95)", //折线颜色
          },
          showSymbol: true, //是否默认展示圆点
          symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
          symbolSize: 7, //设定实心点的大小
          itemStyle: {
            color: "#021E47", //小圆点和线的颜色  ---实心的圆点的背景颜色=---------------------圆透明！！！！！！！
            borderWidth: 1, //圆点边框大小
            borderColor: "#00CCA9", //实心的圆点边框颜色
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 1,
                color: "rgba(0,204,169,0.3)",
              },
              {
                offset: 0,
                color: "rgba(0,204,169,0)",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: yData,
        },
        // {
        //   showSymbol: false,
        //   name: "苏苏小苏苏",
        //   type: "lines",
        //   polyline: true,
        //   coordinateSystem: "cartesian2d",
        //   zlevel: 1,
        //   effect: {
        //     show: true,
        //     period: 6,
        //     symbolSize: 4,
        //   },
        //   lineStyle: {
        //     color: "#fff",
        //     width: 1,
        //     opacity: 0,
        //     curveness: 0,
        //     cap: "round",
        //   },
        //   data: datacoords,
        // },
      ];
    let option = {
      animation: true, //控制动画示否开启
      animationDuration: 3000, // 动画的时长，它是以毫秒为单位
      backgroundColor: "transparent",
      color: ["#ec5d5f", "#f2cb58", "#64a0c8"],
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,.5)",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "rgba(0,0,0,.5)",
          },
        },
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
      },
      grid: {
        left: 10,
        top: 40,
        bottom: 10,
        right:20,
        containLabel: true,
      },
      xAxis: [{
        nameGap: 3,
        nameTextStyle: {
          //坐标轴单位
          color: "rgba(255,255,255,.8)",
          fontSize: 12,
        },
        type: "category",
        data: xData,
        boundaryGap: false, //从0开始
        axisLine: {
          rotate: 30, //坐标轴内容过长旋转
          interval: 0,
          lineStyle: {
            color: "#636E7C",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)", //坐标的字体颜色
          fontSize: 12,
        },
        axisTick: {
          //坐标轴刻度颜色  x和y不交叉
          show: false,
        },
      }, ],
      yAxis: [{
        name: "人",
        min: 0,
        max: function (value) {
          return Math.ceil(value.max / 5) * 5;
        },
        splitNumber: 5,
        type: "value",
        nameTextStyle: {
          //坐标轴单位
          color: "rgba(255,255,255,.89)",
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.25)",
            type: "dashed",
          },
          //网格线颜色
        },
        axisTick: {
          //坐标轴刻度颜色
          show: false,
        },
        axisLine: {
          //坐标轴线颜色
          show: true,
          lineStyle: {
            color: "#636E7C",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)", //坐标的字体颜色
          fontSize: 12,
        },
      }, ],
      series: type == 1 ? s2 : s1
    }
    return option;
  },
  getPie() {
    let option = {
      color: [
        "#3D75FC",
        "#3E46CE",
        "#E45C7E",
        "#2DB4D1",
        "#CBAE2E",
        "#5ECAB9",
        "#D36640",
      ],
      animation: true, //控制动画示否开启
      animationDuration: 5000, // 动画的时长，它是以毫秒为单位
      animationEasing: "bounceOut", //缓动动画
      animationThreshold: 8, //动画元素的阈值
      tooltip: {
        trigger: "item",
        formatter: "苏苏{b} : {c} ({d}%",
        position: function (point, params, dom, rect, size) {
          let x = 0;
          let y = 0;
          let pointX = point[0];
          let pointY = point[1];
          let boxWidth = size.contentSize[0];
          let boxHeight = size.contentSize[1];
          if (boxWidth > pointX) {
            x = 5;
          } else {
            x = pointX - boxWidth;
          }
          if (boxHeight > pointY) {
            y = 5;
          } else {
            y = pointY - boxHeight;
          }
          return [x, y];
        },
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        right: '10%',
        top: "center",
        icon: "rect",
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        selectedMode: true,
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
        formatter: function (name) {
          return name.length > 5 ? name.substr(0, 5) + "..." : name;
        },
        tooltip: {
          show: true,
        },
      },
      toolbox: {
        show: true,
        feature: {
          // mark: { show: true },
          // dataView: { show: true, readOnly: false },
          // restore: { show: true },
          // saveAsImage: { show: true },//下载按钮
        },
      },
      // graphic: {
      //   elements: [{
      //     type: "image",
      //     z: 6,
      //     style: {
      //       image: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      //       width: 56,
      //       shadowBlur: 0,
      //       shadowColor: "#000",
      //       shadowOffsetX: "1",
      //       shadowOffsetY: "1",
      //     },
      //     left: "28%",
      //     top: "40%",
      //   }, ],
      // },
      series: [{
        minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
        avoidLabelOverlap: true, //是否启用防止标签重叠策略
        labelLine: {
          minTurnAngle: 0,
        },
        type: "pie",
        radius: [20, 120],
        center: ["30%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 0,
        },
        label: {
          show: false,
        },
        data: [{
            value: 88,
            name: "rose 1"
          },
          {
            value: 77,
            name: "rose 2"
          },
          {
            value: 66,
            name: "rose 3"
          },
          {
            value: 60,
            name: "rose 4"
          },
          {
            value: 55,
            name: "rose 5"
          },
          {
            value: 52,
            name: "rose 6"
          },
          {
            value: 44,
            name: "rose 7"
          },
          {
            value: 33,
            name: "rose 8"
          },
          {
            value: 22,
            name: "rose 9"
          },
          {
            value: 11,
            name: "rose 19"
          },
        ],
      }, ],
    };
    return option
  }
})
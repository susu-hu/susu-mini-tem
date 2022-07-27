var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
var lineChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateArray:['2021.8','2021.7','2021.8','2021.8','2021.8'],
    dateIndex:0,
   

    textcolor1:'#014f8e',
    textcolor2:'#bfbfbf',

    navlist:["图表1","图表2",],
    type:0,
  },
  changeDateSelect:function(e) {
    let dateArr = this.data.dateArray
    let index = e.detail.value
    if(dateArr[index] !== undefined) {
        this.setData({
            date:dateArr[index],
            dateIndex:index
        })
    }
  },

  touchHandler: function (e) {
      console.log(pieChart.getCurrentDataIndex(e));
  },     
  btnclick(e){
    let index=e.currentTarget.dataset.index
    this.setData({
      type:index
    })
    if(this.data.type==0){
      var x_data=["12-05", "12-06", "12-07", "12-08", "12-09", "12-10", "12-11", "12-12", "12-13", ]
      var y_data= ["271.83", "374.17", "195.37", "180", "1876", "197", "268", "250", "230",]
      //绘制折线图
      this.OnWxChart(x_data,y_data,'图表1')
    }else{
      var x_data=["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      var y_data= ["113", "620", "332", "540", "580", "580", "603", "100", "605"]
      //绘制折线图
      this.OnWxChart(x_data,y_data,'图表2')
    }
  },
  onLoad: function (e) {
      pieChart = new wxCharts({
          animation: true,
          canvasId: 'pieCanvas',
          type: 'pie',
          legend:true,// 是否显示图表下方各类别的标识
          series: [{
              name: 'node',
              data: 85,
              color:'#ff9933',
              // format: function (val) {
              // }
          }, {
              name: 'java',
              data: 35,
              color:'#ffffcc',
          }, {
              name: 'mysql',
              data: 78,
              color:'#ffcc99',
          }, {
              name: 'vue',
              data: 63,
          }, {
              name: 'react',
              data: 35,
              color:'#ff9966',
          },],
          width: 320,
          height: 300,
          dataLabel: true,
          disablePieStroke:true,
      });

      var x_data=["12-05", "12-06", "12-07", "12-08", "12-09", "12-10", "12-11", "12-12", "12-13", ]
      var y_data= ["271.83", "374.17", "195.37", "180", "1876", "197", "268", "250", "230",]
      //绘制折线图
      this.OnWxChart(x_data,y_data,'图1')
  },

  
  onShow: function () {

  },


   //图表点击事件
   touchcanvas:function(e){
    lineChart.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  //折线图绘制方法
  OnWxChart:function(x_data,y_data,name){
    // var windowWidth = '', windowHeight='';    //定义宽高
    // try {
    //   var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
    //   windowWidth = res.windowWidth / 750 * 690;   //以设计图750为主进行比例算换
    //   windowHeight = res.windowWidth / 750 * 550    //以设计图750为主进行比例算换
    // } catch (e) {
    //   console.error('getSystemInfoSync failed!');   //如果获取失败
    // }
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',     //输入wxml中canvas的id
      type: 'line',     
      categories:x_data,    //模拟的x轴横坐标参数
      animation: true,  //是否开启动画
     
      series: [{
        name: name,
        data: y_data,
        format: function (val, name) {
          return val + '元';
        }
      }
      ],
      xAxis: {   //是否隐藏x轴分割线
        disableGrid: true,
      },
      yAxis: {      //y轴数据
        title: '',  //标题
        format: function (val) {  //返回数值
          return val.toFixed(2);
        },
        min: 400000.00,   //最小值
        gridColor: '#D8D8D8',
      },
      width: 320,  //图表展示内容宽度
      height: 300,  //图表展示内容高度
      dataLabel: false,  //是否在图表上直接显示数据
      dataPointShape: true, //是否在图标上显示数据点标志
      extra: {
        lineStyle: 'Broken'  //曲线
      },
    });
  }

 
})
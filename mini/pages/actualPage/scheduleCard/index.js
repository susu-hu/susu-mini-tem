// pages/actualPage/scheduleCard/index.js
import {
  getCurrWeekList,
  formateDate
} from '../utils/tools'
Page({
  data: {
    currentWeek: 10,
    time: {
      one: [{
          index: 1,
          timeStart: '08:00',
          timeEnd: '08:45'
        },
        {
          index: 2,
          timeStart: '08:55',
          timeEnd: '09:40'
        },
        {
          index: 3,
          timeStart: '09:50',
          timeEnd: '10:45'
        },
        {
          index: 4,
          timeStart: '10:50',
          timeEnd: '11:35'
        }
      ],
      two: [{
          index: 5,
          timeStart: '13:30',
          timeEnd: '14:15'
        },
        {
          index: 6,
          timeStart: '14:25',
          timeEnd: '15:10'
        },
      ],
      three: [{
          index: 7,
          timeStart: '15:20',
          timeEnd: '16:05'
        },
        {
          index: 8,
          timeStart: '16:15',
          timeEnd: '17:00'
        },
      ]
    },
    schedule: {
      one: [{
          sub: '编译原理',
          add: 'B202',
          tec: "苏苏苏",
          color: '#fad0c4',
          type: 1, //0-无  1-有
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        }, {
          sub: '操作系统',
          add: 'N502',
          tec: "苏苏苏",
          color: '#ff9a9e',
          type: 1,
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
      ],
      two: [{
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '大学物理',
          add: 'B202',
          tec: "苏苏苏",
          color: '#fda085',
          type: 1, //0-无  1-有
        },
        {
          sub: '概率',
          add: 'B202',
          tec: "苏苏苏",
          color: '#fbc2eb',
          type: 1, //0-无  1-有
        }, {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '线性代数',
          add: 'B202',
          tec: "苏苏苏",
          color: 'pink',
          type: 1, //0-无  1-有
        },
      ],
      three: [{
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '软件工程',
          add: 'B202',
          tec: "苏苏苏",
          color: '#a7a6cb',
          type: 1, //0-无  1-有
        },
        {
          sub: '安卓',
          add: 'B202',
          tec: "苏苏苏",
          color: '#6991c7',
          type: 1, //0-无  1-有
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
      ],
      four: [{
          sub: '软件测试',
          add: 'B202',
          tec: "苏苏苏",
          color: '#ebc0fd',
          type: 1, //0-无  1-有
        }, {
          sub: '数据库系统概述',
          add: 'B202',
          tec: "苏苏苏",
          color: '#fddb92',
          type: 1, //0-无  1-有
        }, {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
        {
          sub: '',
          add: '',
          tec: "",
          color: '',
          type: 0,
        },
      ]
    },
    weekList: [],
    isShow: false,
    current: {},
  },
  getDetail(e) {
    let {
      item
    } = e.currentTarget.dataset;
    console.log(item)
    this.setData({
      current: item,
      isShow: true
    })
  },
  close() {
    this.setData({
      isShow: false
    })
  },
  onShow() {
    let time = new Date(),
      list = getCurrWeekList(time),
      weekList = []
    list.forEach(item => {
      weekList.push({
        day: [item.split('-')[1], item.split('-')[2]].join('-'),
        week: "星期" + "日一二三四五六".charAt((new Date(item)).getDay()),
        isCurr: formateDate(time) == item
      })
    });
    this.setData({
      weekList,
    })
  },
})
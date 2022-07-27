Page({

  /**
   * 页面的初始数据
   */
  data: {
    // picker的上箭头下箭头
    picker_chose1: false,
    picker_chose2: false,
    picker_chose3: false,
    hasData: true,
    storeList: [{
        name: '门店1'
      },
      {
        name: '门店3'
      },
      {
        name: '门店23'
      },
      {
        name: '门店2221'
      },
      {
        name: '门店2222221'
      }
    ],
    store: '选项一', //选择的门店
    themeList: [{
        name: '主题1'
      },
      {
        name: '主题133'
      },

      {
        name: '主题12切4234'
      },

      {
        name: '2主题1'
      }, {
        name: '玩儿主题1'
      },
    ],
    theme: '选项二', //选择的主题
    statusList: [{
        name: '状态一'
      },
      {
        name: '状态234'
      },

      {
        name: '状态234一'
      },

      {
        name: '状态32423一'
      }, {
        name: '状态23423423一'
      },
    ],
    status: '选项三', //选择的状态
    dateList: [{
        name: '2021年10月'
      },
      {
        name: '2021年11月'
      },
      {
        name: '2021年12月'
      },
      {
        name: '2021年9月'
      },
    ],
    date: '选择时间', //选择的时间
    show_action: false, //是否展示操作
    list_num: 0, //已选中的个数
    list: [{
        value: 1,
        status: 0,
        disabled: false,
      },
      {
        value: 2,
        status: 1,
        disabled: false,
      },
      {
        value: 3,
        status: 0,
        disabled: false,
      },
      {
        value: 4,
        status: 1,
        disabled: true
      },
      {
        value: 5,
        status: 0,
        disabled: true
      },
      {
        value: 6,
        status: 1,
        disabled: false
      },
    ]
  },

  change: function (e) {
    let param = e.currentTarget.dataset.type,
      data = e.currentTarget.dataset.value,
      index = e.detail.value,
      dataArr = this.data[param],
      checked = e.currentTarget.dataset.checked;
      this.setData({
        [checked]: !this.data[checked]
      })
    if (dataArr[index] !== undefined) {
      this.setData({
        [data]: dataArr[index].name
      })
    }
  },
  showAction() {
    this.setData({
      show_action: !this.data.show_action
    })
    if (!this.data.show_action) {
      this.data.list.forEach(item => {
        item.checked = false
      })
      this.setData({
        list_num: 0,
        list: this.data.list
      })
    }
  },

  actionChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    let {
      list
    } = this.data, va = e.detail.value;
    console.log(va)
    list.forEach((item, index) => {
      item.checked = false;
      va.forEach((i0 => {
        if (item.value == i0) {
          item.checked = true;
        }
      }))
    })
    this.setData({
      list,
      list_num: va.length
    })
  },


  onLoad: function (options) {

  },


  onShow: function () {

  },


  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },

})
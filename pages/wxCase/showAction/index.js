Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    store: '选择门店', //选择的门店
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
    theme: '选择主题', //选择的主题
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
    status: '选择状态', //选择的状态
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
    list_num: '2', //已选中的个数
  },

  change: function (e) {
    let param = e.currentTarget.dataset.type,
      data = e.currentTarget.dataset.value,
      index = e.detail.value,
      dataArr = this.data[param];
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
  },

  actionChange(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    // const items = this.data.items
    // const values = e.detail.value
    // for (let i = 0, lenI = items.length; i < lenI; ++i) {
    //   items[i].checked = false
    //   for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
    //     if (items[i].value === values[j]) {
    //       items[i].checked = true
    //       break
    //     }
    //   }
    // }
    // this.setData({
    //   items
    // })
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
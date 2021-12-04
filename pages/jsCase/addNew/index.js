Page({


  data: {
    theme: {},
    list1: [], //，门店与导购
    list2: [], //费用
    list: [
      {
        name: '选项一'
      },
      {
        name: '选项2'
      },
      {
        name: '选项3'
      },
    ],
    sel1: '',
  },
  bindPickerChange: function (e) {
    this.setData({
      sel1: this.data.list[e.detail.value].name
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  /*
  添加门店
  */
  addItems(e) {
    let {
      type
    } = e.currentTarget.dataset, list = this.data[type];
    list.push({})
    this.setData({
      [type]: list
    })
  },

  /*
  删除门店
  */
  delItems(e) {
    let {
      index,
      type
    } = e.currentTarget.dataset,
      list = this.data[type];
    list.splice(index, 1)
    this.setData({
      [type]: list
    })
  },

  onLoad: function (options) {

  },

  onShow: function () {

  },
  /**
   * 页面跳转
   * @param {*} e 
   */
  choseItem(e) {
    let {
      url
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },


})
// pages/jsCase/keyWordHight/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: "",
    filterList: [],
    list: [
      {
        name: " 上海"
      },
      {
        name: " 江苏"
      },
      {
        name: " 江苏南京"
      },
      {
        name: " 江苏宿迁"
      },
      {
        name: " 江苏苏州"
      },
      {
        name: " 四川"
      },
    ]
  },
  getValue(e) {
    let val = e.detail.value;
    this.setData({ search: val })
    if (val.length > 0) {
      let arr = [];
      for (let i = 0; i < this.data.list.length; i++) {
        if (this.data.list[i].name.indexOf(val) > -1) {
          arr.push({ name: this.data.list[i].name })
        }
      }
      this.setData({ filterList: arr, })
    } else {
      this.setData({ filterList: [], })
    }
  },
  clear_input() {
    this.setData({
      search: "",
      filterList: []
    })
  }
})
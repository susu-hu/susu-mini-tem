// pages/actCreate/index.js
Page({


  data: {
    list1: [], //，门店与导购
    list2: [], //费用
    goods_list: [], //宣导商品
    gift_list: [], //赠品
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


})
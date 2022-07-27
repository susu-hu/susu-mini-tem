// pages/jsCase/citySel/index.js
const { cityData } = require('./city.js')
Page({
  data: {
    current_city: "",
    search: "",
    hot_city: [
      {
        name: "北京"
      }, {
        name: "上海"
      }, {
        name: "广州"
      }, {
        name: "长沙"
      }, {
        name: "张家口"
      }, {
        name: "杭州"
      }, {
        name: "西安"
      }, {
        name: "南京"
      }, {
        name: "苏州"
      },

    ],
    city_list: [],
    barHeight: 0,
    curr: -1,
    scrollViewId: "",
    barTop: 0,
    showLetter: false,
    result: [],//搜索结果
  },
  onLoad: function (options) {
    this.setData({
      current_city: options.currentCity || "南京",
      city_list: cityData
    })
    wx.getSystemInfo({
      success: (res) => {
        let winHeight = res.windowHeight
        let barHeight = winHeight - res.windowWidth / 750 * 300;
        this.setData({
          barHeight: barHeight,
          barTop: res.windowWidth / 750 * 180,
        })
      }
    })
  },
  /**
   * 获取value值
   * @param {*} e 
   */
  getValue(e) {
    this.setData({
      search: e.detail.value
    }, () => {
      this.search(e.detail.value)
    })
  },
  /**
   * 搜索成功
   */
  search(e) {
    let result = [], { city_list } = this.data;
    city_list.forEach((item1) => {
      item1.data.forEach((item2) => {
        if (item2.keyword.indexOf(e.toLocaleUpperCase()) !== -1) {
          result.push({ name: item2.cityName })
        }
      })
    })
    this.setData({
      result,
    })
  },
  /**
   * 清空验证码
   */
  clear_input() {
    this.setData({
      search: ""
    })
  },
  touch(e) {
    let pageY = e.touches[0].pageY
    let index = Math.floor((pageY - this.data.barTop) / (this.data.barHeight / 22))//向下取整
    let item = this.data.city_list[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        curr: index
      })
    }
  },
  touchStart(e) {
    this.setData({
      showLetter: true
    })
    this.touch(e)
  },
  touchMove(e) {
    this.touch(e)
  },
  touchEnd() {
    this.setData({
      showLetter: false,
    })
  },
  touchCancel() {
    this.setData({
      showLetter: false,
    })
  }
})
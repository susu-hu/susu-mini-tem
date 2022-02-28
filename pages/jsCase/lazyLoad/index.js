// pages/jsCase/lazyLoad/index.js
const app = getApp()
Page({
  data: {
    height: '', // 获取当前页面的可视高度
    group:
      [{ src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" },
      { src: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", show: false, def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif" }
      ]
  },
  onLoad: function () {
    // wx.getSystemInfo({  // 获取页面可视区域的高度
    //   success: (res) =>{
    //     this.setData({
    //       height: res.screenHeight
    //     })
    //   },
    // })
    // this.showImg()
    let group = this.data.group  // 获取原数据
    for (let i in this.data.group) {
      wx.createIntersectionObserver().relativeToViewport({ bottom: 20 }).observe('.item-' + i, (ret) => {
        if (ret.intersectionRatio > 0) {
          group[i].show = true
        }
        this.setData({ // 更新数据
          group
        })
      })
    }

  },
  onPageScroll() {  // 调用showImg函数
    // app.Util.debounce(this.showImg())
  },

  showImg() {  // 判断高度是否需要加载
    wx.createSelectorQuery().selectAll('.item').boundingClientRect((ret) => {
      const group = this.data.group
      const height = this.data.height
      ret.forEach((item, index) => {
        if (item.top < height) {
          group[index].show = true
        }
      })
      this.setData({
        group
      })
    }).exec()
  }
})
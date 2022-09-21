// pages/actualPage/percent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task_list: [{
      name: "每日签到",
      num: 8,
      progress: 0,
      total: 8,
      url: "",
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg",
      url_text: "点击签到"
    },
    {
      name: "会员纳新",
      num: 2,
      progress: 2,
      total: 12,
      url: "",
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg",
      url_text: "去纳新"
    },
    {
      name: "素材转发",
      num: 2,
      progress: 20,
      total: 20,
      url: "",
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg",
      url_text: "去转发"
    },
    {
      name: "商品出库",
      num: 2,
      progress: 6,
      total: 20,
      url: "",
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg",
      url_text: "去出库"
    },
    {
      name: "会员积分",
      num: 2,
      url: "",
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg",
      url_text: "去完成"
    },
    ],

  },
  proAdd() {
    let { task_list } = this.data;
    task_list.forEach(item => {
      if (item.progress <= item.total) {
        item.progress += 1;
      }
    })
    this.setData({
      task_list,
    })
  }

})
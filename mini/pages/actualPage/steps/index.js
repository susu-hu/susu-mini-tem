// pages/actualPage/steps/index.js
Page({


  data: {
    swiper_box: [{
      name: '专业导购'
    },
    {
      name: '金牌导购'
    },
    {
      name: '王牌导购'
    }
    ],
    task_list: [{
      name: '每日签到',
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg"
    },
    {
      name: '每日签到',
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg"
    },
    {
      name: '每日签到',
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg"
    },
    {
      name: '每日签到',
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg"
    },
    {
      name: '每日签到',
      icon: "https://i.postimg.cc/qRRLS16Q/susu0.jpg"
    },
    ],
    currentTab: 2,
    currGrade: 0, //当前等级 0-专业 1-金牌 2-王牌
  },
  /**
  * swiper
  * @param {*} e 
  */
  handleSwiper(e) {
    let {
      current,
      source
    } = e.detail
    if (source === 'autoplay' || source === 'touch') {
      this.setData({
        currentTab: current
      })
    }
  },
})
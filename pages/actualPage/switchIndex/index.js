// pages/actualPage/switchIndex/index.js
Page({


  data: {
    currentPage: 0,
    swiperData: [{
      name: "内容1"
    }, {
      name: "内容2"
    }, {
      name: "内容3"
    }]
  },
  loadMore({ detail }) {
    console.log(detail)
    if (this.data.currentPage >= 1) return; //模拟总页数为3
    // mock数据（请求api分页数据）
    setTimeout(() => {
      this.data.currentPage++;
      detail.addToList([
        {
          name: `page: ${JSON.parse(JSON.stringify(this.data.currentPage))}, index: 1`,
        },
        {
          name: `page: ${JSON.parse(JSON.stringify(this.data.currentPage))}, index: 2`,
        },
        {
          name: `page: ${JSON.parse(JSON.stringify(this.data.currentPage))}, index: 3`,
        },
      ])
    }, 1000)
  }


})
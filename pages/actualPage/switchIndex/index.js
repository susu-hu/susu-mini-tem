// pages/actualPage/switchIndex/index.js
Page({


  data: {
    currentPage: 0,
    swiperData: [{
      name: "page: 0, index: 1"
    }, {
      name: "page: 0, index: 2"
    }, {
      name: "page: 0, index: 3"
    }]
  },
  loadMore({ detail }) {
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

Page({
  data: {
    imgUrls:'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
    tabs: [{
        title: '特惠',
        anchor: 'a',
      },
      {
        title: '必点',
        anchor: 'b',
      },
      {
        title: '营养汤',
        anchor: 'c',
      },
      {
        title: '主食',
        anchor: 'd',
      },
      {
        title: '套餐',
        anchor: 'e',
      },
      {
        title: '饮料',
        anchor: 'f',
      },
    ],
    tabsList: {
      a: [{
          price: 10.1,
          anchor: "a",
          index: 0,
          num: 0
        }, 
        {
          price: 10.2,
          anchor: "a",
          index: 1,
          num: 0
        },
        {
          price: 10.3,
          anchor: "a",
          index: 2,
          num: 0
        },
      ],
      b: [{
          price: 10.4,
          anchor: "b",
          index: 0,
          num: 0
        },
         {
          price: 10.5,
          anchor: "b",
          index: 1,
          num: 0
        },
        {
          price: 10.6,
          anchor: "b",
          index: 2,
          num: 0
        },
      ],
      c: [{
          price: 10.7,
          anchor: "c",
          index: 0,
          num: 0
        },
         {
          price: 10.8,
          anchor: "c",
          index: 1,
          num: 0
        },
        {
          price: 10.9,
          anchor: "c",
          index: 2,
          num: 0
        },
      ],
      d: [{
          price: 11.0,
          anchor: "d",
          index: 0,
          num: 0
        }, 
        {
          price: 11.1,
          anchor: "d",
          index: 1,
          num: 0
        },
        {
          price: 11.2,
          anchor: "d",
          index: 2,
          num: 0
        },
      ],
      e: [{
          price: 11.3,
          anchor: "e",
          index: 0,
          num: 0
        }, 
        // {
        //   price: 11.4,
        //   anchor: "e",
        //   index: 1,
        //   num: 0
        // },
        // {
        //   price: 11.5,
        //   anchor: "e",
        //   index: 2,
        //   num: 0
        // },
      ],
      f: [{
          price: 11.6,
          anchor: "f",
          index: 0,
          num: 0
        }, 
        {
          price: 11.7,
          anchor: "f",
          index: 1,
          num: 0
        },
        {
          price: 11.8,
          anchor: "f",
          index: 2,
          num: 0
        },
        // {
        //   price: 11.8,
        //   anchor: "f",
        //   index: 2,
        //   num: 0
        // },
        // {
        //   price: 11.8,
        //   anchor: "f",
        //   index: 2,
        //   num: 0
        // },
        // {
        //   price: 11.8,
        //   anchor: "f",
        //   index: 2,
        //   num: 0
        // },
        // {
        //   price: 11.8,
        //   anchor: "f",
        //   index: 2,
        //   num: 0
        // },
      ]
    },
    currentIndex: 0, // 当前选中的下标
    toTitle: "title-c",
    scrollTop: 0,
    top: [],
  },
  // 左侧点击事件
  jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex;
    let anchor = e.currentTarget.dataset.anchor;

    this.setData({
      currentIndex: index,
      toTitle: "title-" + anchor
    });
  },

  scrollToLeft(e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    var length = this.data.top.length;
    for (var i = 0; i < this.data.top.length; i++) {
      // this.data.top[i] - this.data.top[0] <= this.data.scrollTop && (i < length - 1 && this.data.top[i + 1] - this.data.top[0] > this.data.scrollTop)
      if (this.data.top[i] - this.data.top[0] <= this.data.scrollTop &&  (i < length - 1 && this.data.top[i + 1] - this.data.top[0] > this.data.scrollTop)) {
        if (this.data.currentIndex != i) {
          this.setData({
            currentIndex: i,
          });
        }
      }
    }
    if(this.data.scrollTop>=this.data.top[length-1]){
      console.log(111)
      this.setData({
        currentIndex: length-1,
      });
    }
  },

  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
        var top2 = new Array();
        for (var i = 0; i < that.data.tabs.length; i++) {
          wx.createSelectorQuery().select('#view-' + that.data.tabs[i].anchor).boundingClientRect(function (rect) {
            var isTop = Number(rect.top);
            top2.push(isTop);
          }).exec();
        }
        console.log(top2)
        that.setData({
          top: top2
        });
        console.log(that.data.top)
      }
    });
  },
})

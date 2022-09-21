Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts: [{
      id: 1,
      name: 'susu1',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 2,
      name: 'susu2',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 3,
      name: 'susu3',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 4,
      name: 'susu4',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 5,
      name: 'susu5',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 6,
      name: 'susu6',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 7,
      name: 'susu7',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    },
    {
      id: 8,
      name: 'susu8',
      img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      phone: '0101 123456',
      mobile: '0770 123456',
      email: 'frank@emailionicsorter.com'
    }
    ],
    contact: {},
    transformIdx: 0,
    position: 'center',
    duration: 300,
    show: false,
    overlay: false
  },
  onLoad: function (options) {
    this.setData({
      contact: this.data.contacts[0]
    })
  },

  showNext(e) {
    const idx = e.currentTarget.dataset.idx;
    this.setData({
      show: true,
      contact: this.data.contacts[idx],
      transformIdx: idx
    })
  },

  showPrev() {
    this.setData({
      show: false
    })
  },

  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
  },


})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts: [{
        id: 1,
        name: 'Frank',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 2,
        name: 'Susan',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 3,
        name: 'Emma',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 4,
        name: 'Scott',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 5,
        name: 'Bob',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 6,
        name: 'Olivia',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 7,
        name: 'Anne',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      },
      {
        id: 8,
        name: 'sunny',
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
        phone: '0101 123456',
        mobile: '0770 123456',
        email: 'frank@emailionicsorter.com'
      }
    ],
    contact:{},
    transformIdx: 0,
    position: 'center',
    duration: 300,
    show: false,
    overlay: false
  },

  showNext(e) {
    const idx = e.currentTarget.dataset.idx
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


  onLoad: function (options) {
    this.setData({
      contact:this.data.contacts[0]
    })
  },

  
})
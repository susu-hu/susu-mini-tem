Page({
  data: {
    chosed_tab: '', //左侧tab选中
    chosed_gifts: [], //选中的赠品信息
    chosed_coups: [], //选中的优惠券信息
    tab_list: [{
      name: '选项一'
    },
    {
      name: '选项二'
    },
    ],
    goods_list: [{
      name: '咿咿呀呀',
      num: 1,
      price: 55.49,
    },
    {
      name: '咿咿呀呀',
      num: 1,
      price: 65.49,
    },
    {
      name: '咿咿呀呀',
      num: 1,
      price: 99.49,
    },
    ],
    total_num: 0, //选中的赠品个数
    total_price: 0, //选中的赠品价格
    coupon_list: [{
      name: '小听粉核销券',
      range: '可兑换小听粉1听',
      num: 1
    },
    {
      name: '满100-50优惠券',
      range: '可用于在门店购买商品x、商品x、商品x、商品x、商品x、',
      num: 1
    },
    ],
    total_coupon: 0, //选中的优惠券的个数
  },

  onLoad: function (options) {

  },


  onShow: function () {

  },
  /**
   * 左边侧边栏选择切换
   * @param {*} e 
   */
  choseTab(e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.chosed_tab === index || index === undefined) {
      return false;
    } else {
      this.setData({
        chosed_tab: index,
      })
    }
  },
  /**
   * 选择赠品或优惠券的方法
   * @param {*} e 
   */
  selectOne(e) {
    let {
      index,
      type,
    } = e.currentTarget.dataset, list = this.data[type],
      chosed_gifts = [], chosed_coups = [];
    list.forEach((item, index0) => {
      if (index == index0) {
        item.checked = !item.checked
      }
      if (item.checked) {
        if (type == 'goods_list') {
          chosed_gifts.push(item)
        } else {
          chosed_coups.push(item)
        }
      }
    })
    if (type == 'goods_list') {
      // chosed_gifts.forEach(item => {
      //   item.price = parseFloat(item.price)
      // })
      this.setData({
        chosed_gifts,
        total_num: chosed_gifts.length,
      }, () => {
        this.getTotalPrice()
      })
    } else {
      this.setData({
        chosed_coups,
        total_coupon: chosed_coups.length
      })
    }
    this.setData({
      [type]: list,
    })
  },
  /**
   * 计算金额
   * @param {*} e 
   */
  getTotalPrice() {
    let total_price = this.data.chosed_gifts.reduce((total, cur) => {
      return total + parseFloat(cur.num) * parseFloat(cur.price)
    }, 0)
    this.setData({
      total_price,
    })
  },
  /**
   * 数量的++，和--的方法
   *   @param {*} e 
   */
  numChange(e) {
    let {
      index,
      type,
      list
    } = e.currentTarget.dataset, list0 = this.data[list];
    list0.forEach((item, index0) => {
      if (index == index0) {
        if (type == 0) {
          if (item.num <= 1) {
            return wx.showToast({
              title: '不能在减少了哦',
              icon: 'none'
            })
          }
          item.num--;
        } else {
          if (index == index0) {
            if (item.num >= 10) {
              return wx.showToast({
                title: '不能更多了哦',
                icon: 'none'
              })
            }
            item.num++;
          }
        }
      }
    })
    this.setData({
      [list]: list0
    })
    this.getTotalPrice()
  }

})
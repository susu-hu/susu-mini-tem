// pages/orderConfirm/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memo: '',//订单备注
    cardList: [
      {
        "id": 1,
        'money': 100,
        'case': "满1000可用",
        'name': '巴啦啦能量哈沙发',
        'date': '20/05/09 ~ 20/05/31',
        'hasOver': 0,//未过期
        'checkd': false,
        "more": true,
        'rule': ' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },
      {
        "id": 2,
        'money': 1000,
        'case': "满1000可用",
        'name': '巴啦啦能量哈沙发',
        'date': '20/05/09 ~ 20/05/31',
        'hasOver': 0,//未过期
        'checkd': false,
        "more": true,
        'rule': ' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },
     
      { 
        "id":3,
        'money':1500,
        'case':"满1000可用",
        'name':'巴啦啦能量哈沙发',
        'date':'20/05/09 ~ 20/05/31',
        'hasOver':0,//未过期
        'checkd':false,
        "more":true,
        'rule':' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },
      {
        "id": 4,
        'money': 1600,
        'case': "满1000可用",
        'name': '巴啦啦能量哈沙发',
        'date': '20/05/09 ~ 20/05/31',
        'hasOver': 1,//未过期
        'checkd': false,
        "more": true,
        'rule': ' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },
      {
        "id": 4,
        'money': 1600,
        'case': "满1000可用",
        'name': '巴啦啦能量哈沙发',
        'date': '20/05/09 ~ 20/05/31',
        'hasOver': 1,//未过期
        'checkd': false,
        "more": true,
        'rule': ' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },
      {
        "id": 4,
        'money': 1600,
        'case': "满1000可用",
        'name': '巴啦啦能量哈沙发',
        'date': '20/05/09 ~ 20/05/31',
        'hasOver': 1,//未过期
        'checkd': false,
        "more": true,
        'rule': ' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },
      {
        "id": 4,
        'money': 1600,
        'case': "满1000可用",
        'name': '巴啦啦能量哈沙发',
        'date': '20/05/09 ~ 20/05/31',
        'hasOver': 1,//未过期
        'checkd': false,
        "more": true,
        'rule': ' 使用规则：一张订单只能使用一种类型的优惠券，特价商品不可使用。一张订单只能使用一种类型的优惠券，特价商品不可使用。'
      },

    ],
    type: 0,//当前选中的导航栏索引( 0可用优惠券 1 不可用)
    isShowDiscount: true,//优惠券默认不展示弹框
    isShow: true, //是否展示弹窗
    totalPrice: 899.99,
    address: {
      consignee: 's小苏苏',
      phone: 1212321312312,
      province_name: '江苏',
      city_name: '南京',
      district_name: '浦口',
      address: 'shdugfdhsjbgdhf'
    },//收货地址
    hasDiscount: 1,//有优惠
    discount_num: 5,
    has_devfree: 1,//有运费
    orderInfo: {
      goodsList: [
        {
          goods_cover: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          goods_name: '巴啦啦能量哈沙发',
          goods_price: '368.5',
          goods_num: '5',
          is_Giveaway: 0,
        },
        {
          goods_cover: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          goods_name: '巴啦啦能量哈沙发',
          goods_price: '368.5',
          goods_num: '5',
          is_Giveaway: 1,//是否是赠品
        },
        {
          goods_cover: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          goods_name: '巴啦啦能量哈沙发',
          goods_price: '368.5',
          goods_num: '5',
          is_Giveaway: 1,//是否是赠品
        },
        {
          goods_cover: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
          goods_name: '巴啦啦能量哈沙发',
          goods_price: '368.5',
          goods_num: '5',
          is_Giveaway: 1,//是否是赠品
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //优惠券用券时间显示更多的按钮
  showMore(e) {
    let id = e.currentTarget.dataset.id;
    let cardList = this.data.cardList;
    cardList.forEach(item => {
      if (item.id == id) {
        item.more = !item.more
      }
    })
    this.setData({
      cardList: cardList
    })

  },
  memoInput(e) {
    let memo = e.detail.value;
    this.setData({
      memo: memo
    })
  },
 

  //展示mask
  showDiscount(e) {
    this.setData({
      isShow: false,
      isShowDiscount: false
    })
  },
  closeModal() {
    this.setData({
      isShow: true,
      isShowDiscount: true,
      isShowPay: true,
    })
  },
  //关闭弹窗
  closeDiscount() {
    let _this = this
    _this.setData({
      isShow: true,
      isShowDiscount: true,
    })
  },
 
  //切换导航栏
  tabNav(e) {
    let currentTab = e.currentTarget.dataset.index;
    this.setData({
      type: currentTab,
    })
  },
  onShow: function () {
    
  },
  choseChecked(e) {
    let cardList = this.data.cardList
    let id = e.currentTarget.dataset.id
    console.log(id)
    cardList.forEach(item => {
      if (item.id === id) {
        item.checkd = !item.checkd
      } else {
        item.checkd = false
      }
    })
    this.setData({
      cardList: cardList,
    })
  },
  //选择折扣
  submitDis() {
    let chosedList = this.data.cardList.filter(item => item.checkd == true)
    let checkedDisId = ''
    if (chosedList.length != 0) {
      checkedDisId = chosedList[0].id
      let dis = chosedList[0].money
      this.setData({
        discount_money: dis
      })
    } else {
      this.setData({
        discount_money: ''
      })
    }
    this.setData({
      isShow: true,
      isShowDiscount: true,
    })

  },
  
})
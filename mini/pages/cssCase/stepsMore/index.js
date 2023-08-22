// pages/cssCase/stepsMore/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
        ],
        sel_icon: "../img/circle02.png",
        pro_color: '#3DB969'
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },

        ],
        sel_icon: "../img/circle02.png",
        pro_color: '#3DB969',
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },
          {
            status: 0,
            pro_name: '退款失败'
          },
        ],
        sel_icon: "../img/circle02.png",
        pro_color: '#3DB969',
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },
          {
            status: 1,
            pro_name: '退款失败'
          },
          {
            status: 0,
            pro_name: '请重新提交申诉'
          },
        ],
        sel_icon: "/img/cart_select.png",
        pro_color: '#DE59A3',
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },
          {
            status: 1,
            pro_name: '退款失败'
          },
          {
            status: 1,
            pro_name: '请重新提交申诉'
          },
          {
            status: 0,
            pro_name: '申诉中'
          },
        ],
        sel_icon: "/img/cart_select.png",
        pro_color: '#DE59A3',
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },
          {
            status: 1,
            pro_name: '退款失败'
          },
          {
            status: 1,
            pro_name: '请重新提交申诉'
          },
          {
            status: 1,
            pro_name: '申诉中'
          },
          {
            status: 0,
            pro_name: '申诉失败'
          },
        ],
        sel_icon: "/img/cart_select.png",
        pro_color: '#DE59A3',
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },
          {
            status: 1,
            pro_name: '退款失败'
          },
          {
            status: 1,
            pro_name: '请重新提交申诉'
          },
          {
            status: 1,
            pro_name: '申诉中'
          },
          {
            status: 1,
            pro_name: '申诉失败'
          },
          {
            status: 0,
            pro_name: '申请客服介入'
          },
        ],
        sel_icon: "/img/wuliu_icon2.png",
        pro_color: '#682074'
      },
      {
        stepInfo: [{
            status: 1,
            pro_name: '提交申请'
          },
          {
            status: 1,
            pro_name: '审核不通过呢'
          },
          {
            status: 1,
            pro_name: '卖家不同意,无须退回'
          },
          {
            status: 1,
            pro_name: '退款失败'
          },
          {
            status: 1,
            pro_name: '请重新提交申诉'
          },
          {
            status: 1,
            pro_name: '申诉中'
          },
          {
            status: 1,
            pro_name: '申诉失败'
          },
          {
            status: 1,
            pro_name: '申请客服介入'
          },
          {
            status: 1,
            pro_name: '退款成功'
          },
        ],
        sel_icon: "/img/wuliu_icon2.png",
        pro_color: '#682074'
      }
    ],
  },
  onShow() {
    let {
      list
    } = this.data;
    list.forEach(item => {
      let onePer = item.stepInfo.filter(i0 => i0.status == 1).length;
      item.per =100/(item.stepInfo.length-1)*(onePer-1)
    })
    this.setData({
      list
    })
  }
})
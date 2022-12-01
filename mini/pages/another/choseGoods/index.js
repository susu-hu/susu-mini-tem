// pages/choseGoods/index.js
const math = require("../utils/math.min");
math.config({ number: "BigNumber" });
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navList: ["数量", "面值"],
    type: 0,
    goods_list: [
      {
        goods_cover: "https://i.postimg.cc/65STLQNc/333.webp",
        goods_name: "可可爱爱的丸子妹表情包，你值得拥有！！",
        sale_price: "99.00",
      },
      {
        goods_cover: "https://i.postimg.cc/65STLQNc/333.webp",
        goods_name: "可可爱爱的丸子妹表情包，你值得拥有！！",
        sale_price: "4.80",
      },
      {
        goods_cover: "https://i.postimg.cc/65STLQNc/333.webp",
        goods_name: "可可爱爱的丸子妹表情包，你值得拥有！！",
        sale_price: "55.60",
      },

      {
        goods_cover: "https://i.postimg.cc/65STLQNc/333.webp",
        goods_name: "可可爱爱的丸子妹表情包，你值得拥有！！",
        sale_price: "24.58",
      },
      {
        goods_cover: "https://i.postimg.cc/65STLQNc/333.webp",
        goods_name: "可可爱爱的丸子妹表情包，你值得拥有！！",
        sale_price: "1220.98",
      },
    ],
    card_price: "1000",
    num: "3",
    if_needPay: false, //是否超出所需金额
    remain_money: "", //剩余可选商品价值
    needPay: "", //实物兑换 仍需的money
    remain_num: "", //剩余可选商品数量
  },
  tabNav(e) {
    let { index } = e.currentTarget.dataset;
    if (this.data.type === index || index === undefined) {
      return false;
    } else {
      this.setData({
        card_price: "1000",
        remain_money: "1000",
        num: "3",
        remain_num: "3",
      });
      let { goods_list } = this.data;
      goods_list.forEach((item) => {
        item.chosed = false;
      });
      this.setData({
        type: index,
        goods_list,
      });
    }
  },

  onLoad: function (options) {
    this.setData({
      remain_money: this.data.card_price,
      remain_num: this.data.num,
    });
  },

  onShow: function () {
    let a = "49",
      b = "3.99";
    console.log(
      typeof a,
      math.evaluate(`${a}+${b}`).toString(),
      math.evaluate(`${a}-${b}`).toString(),
      (13.435).toFixed(2),
      (1.335).toFixed(2),

      (1.362).toFixed(2),
      (1.55).toFixed(2),
      (1.33).toFixed(2)
    );
  },

  // 实物兑换选择商品
  choseGoods(e) {
    let { index } = e.currentTarget.dataset,
      { goods_list, card_price, num, type } = this.data,
      goods_info = goods_list[index];
    if (type == 0) {
      //数量
      //实现多选
      if (this.data.remain_num > 0) {
        goods_info.chosed = !goods_info.chosed;
        this.setData({
          goods_list: goods_list,
        });
      } else {
        if (!goods_info.chosed) {
          wx.showToast({
            title: "剩余可选为0",
            icon: "none",
          });
        }
        goods_info.chosed = false;
        this.setData({
          goods_list: goods_list,
        });
      }
      let chose_list = goods_list.filter((item) => item.chosed);
      //选中数量
      let list_len = chose_list.length;
      //剩余可选数量
      let last_len = num - list_len;
      this.setData({
        remain_num: last_len > 0 ? last_len : 0,
      });
    } else {
      //面值
      goods_info.chosed = !goods_info.chosed;
      this.setData({
        goods_list: goods_list,
      });
      let chose_list = goods_list.filter((item) => item.chosed);
      // 订单金额
      let totalPrice = 0;
      //     chose_list.forEach(item=>{
      //       totalPrice=totalPrice+parseFloat(item.sale_price)
      //     })
      //     chose_list.forEach(item=>{
      //       totalPrice+=math.multiply(item.sale_price,1)
      //     })
      chose_list.forEach((item) => {
        totalPrice = math
          .evaluate(`${item.sale_price}+${totalPrice}`)
          .toString();
      });
      console.log(totalPrice);
      //剩余可选金额
      console.log(typeof totalPrice, typeof card_price);
      console.log(card_price - totalPrice);
      let last_money = math.evaluate(`${card_price}-${totalPrice}`).toFixed(2);
      console.log(last_money);
      console.log(typeof last_money);
      this.setData({
        remain_money: last_money > 0 ? last_money : 0,
      });
      console.log(parseFloat(totalPrice), parseFloat(card_price));
      if (parseFloat(totalPrice) > parseFloat(card_price)) {
        this.setData({
          if_needPay: true,
          needPay: math.evaluate(`${totalPrice}-${card_price}`).toFixed(2),
        });
      } else {
        this.setData({
          if_needPay: false,
          needPay: 0,
        });
      }
    }
  },
});
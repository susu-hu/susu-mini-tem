Page({
  data: {
    select_all: false,//是否全选
    list: [
      {
        name: '回家的诱惑',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
      {
        name: '鱿鱼游戏',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
      {
        name: '主君的太阳',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
      {
        name: '地陷',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
      {
        name: '寄生虫',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
      {
        name: '紧急救援',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
      {
        name: '逆行者',
        price: '888',
        sell_price: '9.9',
        star_date: '2021.10.1',
        end_date: '2021.10.8'
      },
    ],
    choseNames: '', //选中的名字列表
  },

  //全选与反全选
  selectall: function (e) {
    var arr = []; //存放选中id的数组
    for (let i = 0; i < this.data.list.length; i++) {

      this.data.list[i].checked = (!this.data.select_all)

      if (this.data.list[i].checked == true) {
        // 全选获取选中的值
        arr = arr.concat(this.data.list[i].name.split(','));
      }
    }
    this.setData({
      list: this.data.list,
      select_all: (!this.data.select_all),
      choseNames: arr
    })
  },

  // 单选
  checkboxChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      choseNames: e.detail.value, //单个选中的值
    })
    if (this.data.choseNames.length == this.data.list.length) {
      this.setData({
        select_all: true
      })
    } else {
      this.setData({
        select_all: false
      })
    }
  },
})
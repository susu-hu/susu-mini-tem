Page({

  /**
   * 页面的初始数据
   */
  data: {
    calculation: 0,//几件商品
    totalPrice: 0, // 总价，初始为0
    isShow: false,
    del: true,
    effective_carts: [], // 有效列表
    invalid_carts: [], //失效商品
    selectAllStatus: false, // 全选状态，默认全选
    startX: '',
    startY: '',
  },
  onLoad: function (options) {
  },
  onShow: function () {
    //获取购物车列表
    this.getCartsList()
  },
   //编辑商品
   edit: function () {
      this.setData({
        del: !this.data.del
      });
    },
  inputCode(e) {
    let num = e.detail.value
    return num.replace(/\D/g, '')
  },
  blurCode(e) {
    let num = e.detail.value
    let id = e.currentTarget.dataset.id
    this.getCartNum(num, id)
  },
  //商品++
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id
    let carts = this.data.effective_carts;
    let num = carts[index].num;
    num++;
    carts[index].num = num;
    this.setData({
      effective_carts: carts
    });
    this.getCartNum(num, id)
    this.getTotalPrice();
  },
  //商品--
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id
    let carts = this.data.effective_carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      effective_carts: carts
    });
    this.getCartNum(num, id)
    this.getTotalPrice();
  },
  // 修改购物车数量
  getCartNum(num, id) {
    let query = {
      num: num,
      id: id,
    }
  },
  getCartsList(){
    let cart1=[
      {
        "id":1,
        "goods_id":1,
        "selected":false,
        "goods_cover":'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        "goods_name":'固定背景图片的通常方法就是t设成fix,进一步的话自',
        "sale_price":236,
        "num":1,
      },
      {
        "id":2,
        "goods_id":2,
        "selected":false,
        "goods_cover":'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        "goods_name":'固定背景图片的通常方法就是把bac设成fix,进一步的话自',
        "sale_price":236,
        "num":6,
      },
    ];
    let cart2=[
      {
        "id":3,
        "goods_id":3,
        "selected":false,
        "goods_cover":'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        "goods_name":'固定背景图片的通常方法就是把t设成fix,进一步的话自',
        "sale_price":236,
        "err_msg":'商品库存不足，暂不能购买'
      },
      {
        "id":4,
        "goods_id":4,
        "selected":false,
        "goods_cover":'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        "goods_name":'固定背景图片的通常方法就是把设成fix,进一步的话自',
        "sale_price":236,
        "err_msg":'商品下架，暂不能购买'
      },
      {
        "id":5,
        "goods_id":5,
        "selected":false,
        "goods_cover":'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        "goods_name":'固定背景图片的通常方法就是把-,进一步的话自',
        "sale_price":236,
        "err_msg":'商品下架，暂不能购买'
      },
    ];
    let carts=cart1;
    let invalid_carts=cart2;
    if (carts.length == 0) {
      for (var e = 0; e < carts.length; e++) {
        carts[e].status = true//status 为true 不会显示删除的滑动块
      }
      this.setData({
        effective_carts: carts,
        isShow: invalid_carts == '' && carts.length == 0 ? false : true,
        invalid_carts: invalid_carts,
      })
      this.setData({
        selectAllStatus: false,//全选的状态
        del: true,
      })
    } else {
      for (var e = 0; e < carts.length; e++) {
        carts[e].status = true//status 为true 不会显示删除的滑动块
        carts[e].selected = false//selected 表示选中的状态
      }
      this.setData({
        effective_carts: carts,
        isShow: true,//当有商品的时候展示商品 无的时候直接不显示
        invalid_carts: invalid_carts
      })
    }
    this.getcalculation()
    this.getTotalPrice();
  },
  //选择商品的按钮
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.effective_carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      effective_carts: carts
    });
    this.getcalculation()
    this.getTotalPrice();
  },
  //底部按钮全选商品事件
  selectAll() {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.effective_carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      effective_carts: carts
    });
    this.getcalculation()
    this.getTotalPrice();
  },
  //触摸开始
  touchS(e) {
    for (let key in this.data.effective_carts) {
      this.data.effective_carts[key]['status'] = true;
    }
    this.setData({
      effective_carts: this.data.effective_carts,
    })
    // 获得起始坐标
    this.data.startX = e.touches[0].clientX;
    this.data.startY = e.touches[0].clientY;
  },
  //滑动
  touchM(e) {
    // 获得当前坐标
    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;
    const x = this.data.startX - currentX; //横向移动距离
    const y = Math.abs(this.data.startY - currentY); //纵向移动距离，若向左移动有点倾斜也可以接受
    var id = e.currentTarget.dataset.index;
    for (let key in this.data.effective_carts) {
      if (key == id) {
        if (x > 35 && y < 110) {
          //向左滑是显示删除
          this.data.effective_carts[key]['status'] = false;
        } else if (x < -35 && y < 110) {
          //向右滑
          this.data.effective_carts[key]['status'] = true;
        }
      }
    }
    this.setData({
      effective_carts: this.data.effective_carts,
    })
  },
  //删除商品 多选和全选
  deleteList(e) {
    let id = e.currentTarget.dataset.id;
    let type = e.currentTarget.dataset.type;
    let carts = this.data.effective_carts;
    var carts_ids = []
    let goodstype = 'effective'
    if (type == 'single') { //单选
      carts_ids = [id]
    } else if (type == 'multiple') { //多选
      if (this.data.calculation == 0) {
        showToast('您还木有选择商品哦', 'none')
      }
      if (this.data.calculation != 0) {
        carts.forEach(item => {
          if (item.selected == true) {
            carts_ids.push(item.id)
          }
        })
      }
    }
    //如果删除的id不为空，执行删除操作
    if (carts_ids.length != 0) {
      this.getCartDel(goodstype, carts_ids)
    }
    //获取结算件数
    this.getcalculation()
    //获取结算金额
    this.getTotalPrice();
  },

  // 获取选中商品件数
  getcalculation() {
    var calculationlist = []
    let carts = this.data.effective_carts;
    let str = true;
    if (carts.length == 0) {
      str = false;
    } else {
      str = true;
    }
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        calculationlist.push(carts[i])
      }
      str = str && carts[i].selected; //用str与每一项进行状态判断
    }
    this.setData({
      calculation: calculationlist.length
    });
    if (str == true) {
      this.setData({
        selectAllStatus: true
      })
    } else {
      this.setData({
        selectAllStatus: false
      })
    }
  },
  //获取商品的总价格
  getTotalPrice() {
    let carts = this.data.effective_carts; // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].selected) { // 判断选中才会计算价格
        total+=carts[i].num*carts[i].sale_price
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      effective_carts: carts,
      totalPrice: total.toFixed(2)
    });
  },
  // 删除购物车
  getCartDel(goodstype, carts_ids) {//删除类型 （有效 无效） 删除的ids
    let that = this
    let content = '',title=''
    if (goodstype == 'invalid') { //失效宝贝
      content = '确认清空失效宝贝？'
      title='清空成功'
    } else {
      content = '确认删除商品？'
      title='删除成功'
    }
    let query = {
      carts_ids: carts_ids,
    }
    wx.showModal({
      title: '提示',
      content: content,
      success: function (res) {
        if (res.confirm) {
          //测试写法 等有接口了直接注释调此写法
          let ids=query.carts_ids
          console.log(ids)
          let carts=that.data.effective_carts
          carts.forEach((item,index)=>{
            if(item.id==ids[0]){
              carts.splice(index,1)
            }
          })
          that.setData({
            effective_carts:carts,
          })
          wx.showToast({
            title:title,
            icon:'success'
          })
        
        } else {
        }
      }
    })
  },
    // 清空失效宝贝
    clearInvalid() {
      let invalidcarts = this.data.invalid_carts
      let goodstype = 'invalid'
      let carts_ids = []
      invalidcarts.forEach(e => {
        carts_ids.push(e.id)
      })
      this.getCartDel(goodstype, carts_ids)
    },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  //跳转到商品详情
  jumpDetail(e){
    let goodid = e.currentTarget.dataset.goodid
    wx.navigateTo({
      
    })
  },
  
  goConfirm(){
    var carts_id = []
    if (this.data.calculation > 0) {
      this.data.effective_carts.forEach(item => {
        if (item.selected == true) {
          carts_id.push(item.id)
        }
      })
      wx.navigateTo({
        
      })
    } else {
      showToast('您还木有选择商品哦', 'none')
    }
  }
})
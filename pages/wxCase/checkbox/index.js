Page({
  data: {
    select_all: false,
    listData: [{
        code: "1",
        text: "测试1"
      },
      {
        code: "2",
        text: "测试2"
      },
      {
        code: "3",
        text: "测试3"
      }
    ],
    batchIds: '', //选中的ids
  },

  //全选与反全选
  selectall: function (e) {
    console.log(e)
    var that = this;
    var arr = []; //存放选中id的数组
    for (let i = 0; i < that.data.listData.length; i++) {

      that.data.listData[i].checked = (!that.data.select_all)

      if (that.data.listData[i].checked == true) {
        // 全选获取选中的值
        arr = arr.concat(that.data.listData[i].code.split(','));
      }
    }
    console.log(arr)
    that.setData({
      listData: that.data.listData,
      select_all: (!that.data.select_all),
      batchIds: arr
    })
  },

  // 单选
  checkboxChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      batchIds: e.detail.value //单个选中的值
    })
  },
})
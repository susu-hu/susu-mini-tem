// pages/wxCase/radioBox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showApplyReason: false, //申请理由的弹框
    typeList: ['多拍、发错、 不想要', '缺货', '发货慢', '协商一致退款', '其他','12312312'],
    reason_type: undefined,
    showEdit: false, //展示编辑区域
    viewId: '', //文本框id
  },


  onShow: function () {

  },
  closeShow() {
    this.setData({
      showApplyReason: true
    })
  },
  //选择理由类型
  radioShowReason(e) {
    let index = e.detail.value;
    this.setData({
      reason_type: index,
    })
    this.setData({
      showEdit: index == 4 ? true : false,
      viewId: index == 4 ? 'edit_box' : ''
    })
  },
  // 确定按钮
  submit() {
    this.setData({
      showApplyReason: true
    })
  },


})
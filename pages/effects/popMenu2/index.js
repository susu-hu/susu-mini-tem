// pages/effects/popMenu2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [
      {
        url: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      },
      {
        url: 'https://i.postimg.cc/pXDp6RXq/susu3.jpg',
      },
    ],
  },
  onShow() {
    for (let i in this.data.fileList) {
      console.log(this.data.fileList[i])
    }
  },
  /**
   * 删除
   * @param {*} e 
   */
  fileDel(e) {
    let { index } = e.detail
    this.data.fileList.splice(index, 1);
    this.setData({
      fileList: this.data.fileList
    })
  },
  beforeRead(e) {
    const { file, callback } = e.detail;
    callback(file.type === 'image');
  },
  afterRead(e) {
    const { file } = e.detail, { fileList } = this.data;
    fileList.push({ ...file, url: file.url });
    this.setData({ fileList });
    console.log('a', file)
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    //   filePath: file.url,
    //   name: 'file',
    //   formData: {},
    //   success: (res) => {
    //     // 上传完成需要更新 fileList
    //     const { fileList = [] } = this.data;
    //     fileList.push({ ...file, url: res.data });
    //     this.setData({ fileList });
    //   },
    // });
  },
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数")
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  onResize: function() {
    // 页面尺寸变化时执行
    console.log('assa')
  },

})
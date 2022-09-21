Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '上传1',
        show: true,
        fileList: []
      },
      {
        show: true,
        name: '上传2',
        fileList: []
      }
    ],
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
    // let { index } = e.detail
    // this.data.fileList.splice(index, 1);
    // this.setData({
    //   fileList: this.data.fileList
    // })
    let i = e.currentTarget.dataset.index, { index } = e.detail;
    let list0 = this.data.list[i].fileList;
    list0.splice(index, 1);
    this.setData({
      ['list[' + i + '].fileList']: list0
    })

  },
  beforeRead(e) {
    const { file, callback } = e.detail;
    callback(file.type === 'image');
  },
  afterRead(e) {
    let { index } = e.currentTarget.dataset;
    const { file } = e.detail;
    let list0 = this.data.list[index].fileList;
    list0.push({ ...file, url: file.url });
    this.setData({
      ['list[' + index + '].fileList']: list0
    })

    // const { file } = e.detail, { fileList } = this.data;
    // fileList.push({ ...file, url: file.url });
    // this.setData({ fileList });

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
  onResize: function () {
    // 页面尺寸变化时执行
    console.log('assa')
  },

})
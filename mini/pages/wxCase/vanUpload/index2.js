// pages/wxCase/vanUpload/index2.js
Page({

  data: {
    memu_list: [{
        title: "选项一",
        fileList: []
      },
      {
        title: "选项2",
        fileList: []
      },
      {
        title: "选项3",
        fileList: []
      },
      {
        title: "选项4",
        fileList: []
      },
      {
        title: "选项5",
        fileList: []
      },
    ],
  },

  afterRead(e) {
    let {
      index
    } = e.currentTarget.dataset;
    const {
      file
    } = e.detail;
    let list = this.data.memu_list[index].fileList;
    list.push({
      ...file,
      url: file.url
    });
    this.setData({
      [`memu_list[` + index + `].fileList`]: list
      // ['memu_list[' + index + '].fileList']: list
    })

  },
  beforeRead(e) {
    const {
      file,
      callback
    } = e.detail;
    callback(file.type === 'image');
  },
  fileDel(e) {
    let i = e.currentTarget.dataset.index,
      {
        index
      } = e.detail;
    let list = this.data.memu_list[i].fileList;
    list.splice(index, 1);
    // this.setData({
    //   memu_list:this.data.memu_list
    // })
    this.setData({
      ['memu_list[' + i + '].fileList']: list
    })
  }
})
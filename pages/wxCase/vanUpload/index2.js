// pages/wxCase/vanUpload/index2.js
Page({

  data: {
    memu_list: [
      { title: "身份证(正反面)", hint: false, fileList: [] },
      { title: "学生证或者工作证", hint: false, fileList: [] },
      { title: "证件照电子版", hint: false, fileList: [] },
      { title: "考试报名登记表(须在报名网站上下载)", hint: false, fileList: [] },
      { title: "报名推荐表", hint: false, fileList: [] },
    ],
  },

  afterRead(e) {
    let { index } = e.currentTarget.dataset;
    const { file } = e.detail;
    let list = this.data.memu_list[index].fileList;
    list.push({ ...file, url: file.url });
    this.setData({
      ['memu_list[' + index + '].fileList']: list
    })
  
  },
  beforeRead(e) {
    const { file, callback } = e.detail;
    callback(file.type === 'image');
  },
  fileDel(e) {
    let i = e.currentTarget.dataset.index, { index } = e.detail;
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
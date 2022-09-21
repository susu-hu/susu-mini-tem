// pages/wxCase/fileDown/index.js
Page({


  data: {
    doc: ['docx', 'doc'],
    excel: ['xlsx'],
    ppt: ['ppt'],
    downloadFile: [{
        name: "test.xlsx",
        path: "https://eln-public.oss-cn-shanghai.aliyuncs.com/dev/ee74ca70-7a62-45e7-849c-751c9dab8d00.xlsx",
        time: 1641448025,
      },
      {
        name: "test.docx",
        path: "http://124.223.40.74:8233/img/Test.doc",
        time: 1641448025,
      }
    ], //下载到本地的文件列表
    upfilelist: [], // 要上传的文件列表 
  },


  onShow: function (options) {
    const manager = wx.getFileSystemManager(); //获取全局唯一的文件管理器
    this.readFiles(manager)
  },
  //选择要上传的上传文件
  chooseFile() {
    wx.chooseMessageFile({ //开发者工具普通编译
      count: 10,
      type: 'all',
      success: (res) => {
        wx.showToast({
          title: '上传成功',
          icon: 'none'
        })
        let tempFiles = res.tempFiles;
        let {
          upfilelist
        } = this.data;
        tempFiles.forEach(item => {
          upfilelist.push(item)
        })
        this.setData({
          upfilelist,
        })
      }
    })
  },
  openfile(e) {
    console.log(e)
    let path = e.currentTarget.dataset.path;
    wx.downloadFile({
      url: path,
      filePath: wx.env.USER_DATA_PATH + '/' +'自定义',//指定文件下载后存储的路径 (本地路径)
      success: (res) => {
        console.log(res)
        wx.openDocument({
          filePath: res.filePath,
          fileType:"xlsx",
          showMenu: true,
          success: (res) => {},
          fail: (err) => {
            console.log(err)
          }
        })
      }
    })
  },
  openfile1(e) {
    let path = e.currentTarget.dataset.path;
    wx.openDocument({
      showMenu: true,
      filePath: path,
      success: (res) => {},
      fail: (err) => {
        console.log(err)
      }
    })
  },
  delFile(e) {
    let {
      index
    } = e.currentTarget.dataset;
    this.data.upfilelist.splice(index, 1);
    this.setData({
      upfilelist: this.data.upfilelist
    })
  },
  selectFile(e) {
    let {
      index
    } = e.currentTarget.dataset;
    this.setData({
      ['downloadFile[' + index + '].checked']: !this.data.downloadFile[index].checked
    })
  },
  downFile() {
    let list = this.data.downloadFile.filter(item => item.checked)
    console.log(list)
    if (list.length == 0) {
      return wx.showToast({
        title: '尚未选择',
        icon: 'none'
      })
    }
    wx.downloadFile({
      url: list[0].path,
      filePath: wx.env.USER_DATA_PATH + '/' + list[0].name,//指定文件下载后存储的路径 (本地路径)
      success: (res) => {
        console.log(res)
        // const tempFilePath = res.tempFilePath;//临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件
        const filePath=res.filePath;//用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致
        wx.saveFile({
          tempFilePath:filePath,
          success: function (res) {
            const savedFilePath = res.savedFilePath;
            // 查看下载的文件列表
            wx.getSavedFileList({
              success: function (res) {
                console.log(res);
              }
            })
            wx.openDocument({
              filePath: savedFilePath,
              showMenu: true,
              success: function (res) {
                console.log('打开文档成功')
              },
            });
          },
          fail: function (err) {
            console.log('保存失败：', err)
          }
        });
      },
      fail: function (err) {
        console.log('下载失败：', err);
      },
    });
  },
  readFiles(manager) {
    // manager.readdir({
    //   dirPath: `${wx.env.USER_DATA_PATH}/download`,
    //   success: (res) => {
    //     console.log('本地文件列表: ', res)
    //     let downloadFile = [];
    //     res.files.forEach((item, index) => {
    //       downloadFile.push({
    //         file: item,
    //         path: `${wx.env.USER_DATA_PATH}/download/` + item,
    //       })
    //     })
    //     console.log(downloadFile)
    //   },
    //   fail: (err) => {
    //     console.log(err)
    //   }
    // })
    manager.getSavedFileList({
      success: (res) => {
        console.log(res)
        // wx.removeSavedFile({
        //   filePath: res.fileList[0].filePath,
        //   complete(res) {
        //     console.log(res)
        //   }
        // })
      }
    })
  },
  // readFiles(fileName) {
  //   return new Promise((resolve, reject) => {
  //     const FileSystemManager = wx.getFileSystemManager()
  //     FileSystemManager.readFile({ //读文件
  //       filePath: wx.env.USER_DATA_PATH + "/" + fileName,
  //       encoding: 'utf8',
  //       success(res) {
  //         console.log(res)
  //         if (res.data) {
  //           let obj = JSON.parse(res.data);
  //           resolve(obj)
  //         }
  //       },
  //       fail(err) {
  //         console.log('读取失败', err)
  //         reject(err)
  //       }
  //     })
  //   })
  // },


})
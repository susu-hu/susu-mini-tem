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


  onLoad: function (options) {
    // const manager = wx.getFileSystemManager(); //获取全局唯一的文件管理器
    // this.readFiles(manager, this)
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
  //读取本地缓存文件
  readFiles1(manager, $this) {
    manager.readdir({
      dirPath: `${wx.env.USER_DATA_PATH}/download`,
      encoding: 'utf8',
      success: (res) => {
        // console.log('本地文件列表: ', res)
        let downloadFile = [];
        res.files.forEach((item, index) => {
          downloadFile.push({
            file: item,
            path: `${wx.env.USER_DATA_PATH}/download/` + item,
            sel: false,
          })
        })
        $this.setData({
          downloadFile,
        })
      },
      fail: (err) => {
        console.log('本地文件列表读取失败: ', err)
      }
    })
  },
  readFiles(fileName) {
    return new Promise((resolve, reject) => {
      const FileSystemManager = wx.getFileSystemManager()
      FileSystemManager.readFile({ //读文件
        filePath: wx.env.USER_DATA_PATH + "/" + fileName,
        encoding: 'utf8',
        success(res) {
          console.log(res)
          if (res.data) {
            let obj = JSON.parse(res.data);
            resolve(obj)
          }
        },
        fail(err) {
          console.log('读取失败', err)
          reject(err)
        }
      })
    })
  },
  openfile(e) {
    let path = e.currentTarget.dataset.path;
    wx.downloadFile({
      url: path,
      success: (res) => {
        console.log(res)
        wx.openDocument({
          filePath: res.tempFilePath,
          success: (res) => {},
          fail: (err) => {
            console.log(err)
          }
        })
      }
    })

  },

})
// pages/wxCase/fileDown/index.js
Page({


  data: {
    downloadFile: [{
        name: "test.xlsx",
        size: 8714,
        time: 1641448025,
        path: "https://susu-file.oss-cn-beijing.aliyuncs.com/susu/test.xlsx",
        type: "file"
      },
      {
        name: "testppt.ppt",
        size: 0,
        time: 1641448055,
        path: "http://tmp/sIpYAAEIYPQPd41d8cd98f00b204e9800998ecf8427e.ppt",
        type: "file"
      },
      {
        name: "苏苏word.docx",
        size: 11639,
        time: 1641446030,
        path: "http://tmp/fqjFrp737iPIb5c37166c350c0551919c488bc663057.docx",
        type: "file"
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
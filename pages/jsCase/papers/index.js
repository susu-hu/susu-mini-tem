Page({
  /**
   * 页面的初始数据
   */
  data: {
    paperId: '',
    nc_paper_id: '',
    checkedStoreId: '', //选择的门店
    paper_name: '', //试卷名称
    status: 0, //状态
    is_again: false, //是否再次答题
    img: [],
    list: [],
    left_time: '',//剩余时间
    end_time: '',
    show_tip: true,//用来展示10分钟提示


    list:[
      {
        question_name:'下列关于RTS/CTS机制的叙述，不正确的是',
        question_type:1,//单选题
        option_list:[
          {
            id:1001,
            option_label:'A',
            option_name:'RTS/CTS机制是CSMA/CA协议的一部分',
          },
          {
            id:1002,
            option_label:'B',
            option_name:'RTS/CTS机制的主要作用是解决无线局域网中“暴露节点”问题',
          },
          {
            id:1003,
            option_label:'C',
            option_name:'RTS/CTS机制适合于传输较大的帧时使用',
          },
          {
            id:1004,
            option_label:'D',
            option_name:'以上均不正确',
          },
        ]
      },
      {
        question_name:'下列关于RTS/CTS机制的叙述，不正确的是',
        question_type:1,//单选题
        option_list:[
          {
            id:1001,
            option_label:'A',
            option_name:'RTS/CTS机制是CSMA/CA协议的一部分',
          },
          {
            id:1002,
            option_label:'B',
            option_name:'RTS/CTS机制的主要作用是解决无线局域网中“暴露节点”问题',
          },
          {
            id:1003,
            option_label:'C',
            option_name:'RTS/CTS机制适合于传输较大的帧时使用',
          },
          {
            id:1004,
            option_label:'D',
            option_name:'以上均不正确',
          },
        ]
      },
      {
        question_name:'下列关于RTS/CTS机制的叙述，不正确的是',
        question_type:1,//单选题
        option_list:[
          {
            id:1001,
            option_label:'A',
            option_name:'RTS/CTS机制是CSMA/CA协议的一部分',
          },
          {
            id:1002,
            option_label:'B',
            option_name:'RTS/CTS机制的主要作用是解决无线局域网中“暴露节点”问题',
          },
          {
            id:1003,
            option_label:'C',
            option_name:'RTS/CTS机制适合于传输较大的帧时使用',
          },
          {
            id:1004,
            option_label:'D',
            option_name:'以上均不正确',
          },
        ]
      },
      {
        question_name:'下列关于RTS/CTS机制的叙述，不正确的是',
        question_type:1,//单选题
        option_list:[
          {
            id:1001,
            option_label:'A',
            option_name:'RTS/CTS机制是CSMA/CA协议的一部分',
          },
          {
            id:1002,
            option_label:'B',
            option_name:'RTS/CTS机制的主要作用是解决无线局域网中“暴露节点”问题',
          },
          {
            id:1003,
            option_label:'C',
            option_name:'RTS/CTS机制适合于传输较大的帧时使用',
          },
          {
            id:1004,
            option_label:'D',
            option_name:'以上均不正确',
          },
        ]
      }
    ]
  },


  onLoad: function (options) {
    // var _this = this;
    // _this.setData({
    //   checkedStoreId: wx.getStorageSync('checkedStoreId'),
    //   paperId: options.id
    // })
    // _this.getPaperDetail()
  },

  

  //获取未来时间-当前时间的秒数
  handleBtnClick(end_time) {
    // 当前时间
    var currentTime = parseInt(new Date().getTime() / 1000);
    // 未来时间
    var futureTime = parseInt(new Date(end_time.replace(/-/g, '/')).getTime() / 1000);
    if (futureTime <= currentTime) {
      this.time = 0;
      return false;
    } else {
      this.time = (futureTime - currentTime);
      return this.time
    }
  },

  //获取剩余时间
  getLeftTime(end_time) {
    let left_time = this.handleBtnClick(end_time)
    console.log(left_time)
    this.data.timer = setInterval(() => {
      if (--left_time === 0) {
        this.setData({
          left_time: 0
        })
        clearInterval(this.data.timer)
      } else {
        this.setData({
          left_time: left_time
        })
      }

      if (this.data.left_time <= 600 || this.data.left_time > 0) {
        if (this.data.show_tip) {
          // wx.showToast({
          //   title:'离结束时间10分钟',
          //   icon: 'none',
          //   duration: 1500,
          // })

          wx.showModal({
            title: '提示',
            content: '离结束时间不到10分钟',
            success: (res) => {
              if (res.confirm) {
                this.setData({
                  show_tip: false
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })

        }
      }

      if (this.data.left_time <= 0) {
        wx.showToast({
          title: '时间已到，将自动交卷',
          icon: 'none',
          duration: 1500,
        })
        // 交卷
      }
    }, 1000);
  },

  //单选
  radioChange(e) {
    var list = this.data.list
    var index = e.currentTarget.dataset.index
    for (let i = 0, len = list.length; i < len; ++i) {
      for (let j = 0; j < list[i].option_list.length; j++) {
        if (i == index) {
          list[i].option_list[j].checked = false
        }
        if (list[i].option_list[j].id == e.detail.value) {
          list[i].option_list[j].checked = true
        }
      }
    }
    this.setData({
      list: list
    })
  },

  //多选
  checkboxChange(e) {
    var list = this.data.list
    var index = e.currentTarget.dataset.index
    var values = e.detail.value
    for (let i = 0, lenI = list.length; i < lenI; ++i) {
      for (let j = 0; j < list[i].option_list.length; j++) {
        if (i == index) {
          list[i].option_list[j].checked = false
          list[i].checked = false
        }
        for (let g = 0, lenG = values.length; g < lenG; ++g) {
          if (list[i].option_list[j].id === values[g]) {
            list[i].option_list[j].checked = true
            list[i].checked = true
            break
          }
        }
      }
    }
    this.setData({
      list: list
    })
  },


  //获取详细信息
  getPaperDetail: function () {
    let _this = this;
    api.getPaperDetail({ retailer_id: _this.data.checkedStoreId, paper_id: _this.data.paperId }).then(res => {
      if (res.code == 200) {
        _this.setData({
          nc_paper_id: res.data.nc_paper_id,
          paper_name: res.data.paper_name,
          list: res.data.question_list,
          status: res.data.status,
          is_again: res.data.is_again,
          end_time: res.data.end_time
        }, () => {
          wx.setNavigationBarTitle({
            title: res.data.paper_name,
          })
          // _this.getLeftTime(res.data.end_time)
        })

      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500,
        })
        setTimeout(function () {
          return wx.navigateBack({
            delta: 1
          })
        }, 1500)
      }
    })
  },

  //提交试卷
  submitPaper: function () {
    var _this = this
    var list = _this.data.list
    let unIndex = [];
    list.forEach((item, index) => {
      let chosed = [];
      item.option_list.forEach(item0 => {
        if (item0.checked) {
          chosed.push({ id: item0.id })
        }
      })
      item.chosed = chosed.length > 0 ? true : false

      if (!item.chosed) {
        unIndex.push(index + 1)
      }
    })

    if (unIndex.length > 0) {
      wx.showToast({
        title: '第' + unIndex[0] + '题目未作答',
        icon: "error"
      })
      return false
    }
    // _this.savePaper()
  },

  //提交试卷
  savePaper: function () {
    api.submitPaper({ retailer_id: this.data.checkedStoreId, nc_paper_id: this.data.nc_paper_id, question: this.data.list }).then(res => {
      if (res.code == 200) {
        wx.showToast({
          title: '提交试卷成功',
          icon: 'none',
          duration: 1500
        })
        setTimeout(function () {
          wx.switchTab({
            url: '/pages/paper/index'
          })
        }, 1500)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500,
        })
      }
    })
  }


})
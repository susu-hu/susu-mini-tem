// pages/jsCase/keyWordHight/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: "",
    filterList: [],
    list: [
      {
        name: " 上海"
      },
      {
        name: " 江苏"
      },
      {
        name: " 江苏南京"
      },
      {
        name: " 江苏宿迁"
      },
      {
        name: " 江苏苏州"
      },
      {
        name: " 四川"
      },
    ]
  },
  getValue(e) {
    let val = e.detail.value;
    this.setData({ search: val })
    if (val.length > 0) {
      let arr = [];
      for (let i = 0; i < this.data.list.length; i++) {
        if (this.data.list[i].name.indexOf(val) > -1) {
          arr.push({ name: this.data.list[i].name })
        }
      }
      this.setData({ filterList: arr, }, () => {
        this.getHighlight(arr, val)
      })
    } else {
      this.setData({ filterList: [], })
    }
  },
  /**
 * 关键字高亮处理
 * @param { String } datalist - 文本
 * @param { String } val - 关键字
 */
  getHighlight(datalist, val) {
    datalist.forEach(item => {
      let textList = item.name.split("");
      let keyList = val.split("");
      let list = [];
      for (let i = 0; i < textList.length; i++) {
        let obj = {
          set: false,
          val: textList[i]
        }
        list.push(obj);
      };
      for (let k = 0; k < keyList.length; k++) {
        list.forEach(i0 => {
          if (i0.val === keyList[k]) {
            i0.set = true;
          }
        })
      }
      item.list = list;
    });
    this.setData({
      filterList: datalist
    })
  },
  clear_input() {
    this.setData({
      search: "",
      filterList: []
    })
  }
})
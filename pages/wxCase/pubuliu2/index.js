Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [{
        cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png",
        name: "苏苏1"
      },
      {
        cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png",
        name: "苏苏2"
      },
      {
        cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/3.png",
        name: "苏苏3"
      },
      {
        cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/4.png",
        name: "苏苏4"
      },
      {
        cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/5.png",
        name: "苏苏5"
      },
      {
        cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/6.png",
        name: "苏苏6"
      },
      // {
      //   cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png", name: "苏苏7"
      // },
      // {
      //   cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", name: "苏苏8"
      // },
      // {
      //   cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png", name: "苏苏9"
      // },
      // {
      //   cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png", name: "苏苏10"
      // },
      // {
      //   cover: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png", name: "苏苏11"
      // },
    ],
    leftList: [],
    rightList: [],
    leftHight: 0,
    rightHight: 0
  },
  loadImage(e) {
    //定义两个临时的变量来记录左右两栏的高度，避免频繁调用setData方法
    var {
      leftHight,
      rightHight,
      list
    } = this.data;
    var leftList = [];
    var rightList = [];
    list.forEach((item) => {
      if (item.cover == e.currentTarget.dataset.item) {
        item.width = e.detail.height;
        item.height = e.detail.width;
        item.actual_height = parseInt(Math.round(e.detail.height * 345 / e.detail.width))
      }
      //   var actual_height = parseInt(Math.round(e.detail.height * 345 / e.detail.width))
      //   if (leftHight == rightHight || leftHight < rightHight) {//判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
      //     console.log('11')
      //     leftList.push(item)
      //     leftHight += actual_height
      //   } else {
      //     console.log('22')
      //     rightList.push(item)
      //     rightHight += actual_height
      //   }
    })
    this.setData({
      // leftHight,
      // rightHight,
      // leftList,
      // rightList,
      list,
    }, () => {
      setTimeout(() => {
        this.initData()
      }, 200)
    })
  },
  initData() {
    //定义两个临时的变量来记录左右两栏的高度，避免频繁调用setData方法
    var {
      leftHight,
      rightHight,
      list
    } = this.data;
    var leftList = [];
    var rightList = [];
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].actual_height)
      if (leftHight == rightHight || leftHight < rightHight) {
        leftList.push(list[i])
        console.log('lll', leftList)
        leftHight += list[i].actual_height,
          this.setData({
            leftList,
            leftHight
          })
      } else {
        rightList.push(list[i])
        console.log('rrrr', rightList)
        rightHight += list[i].actual_height;
        this.setData({
          rightList,
          rightHight
        })
      }
    }
    // for (let i = 0; i < list.length; i++) {
    //   var currentItemHeight = parseInt(Math.round(list[i].height * 345 / list[i].width));
    //   list[i].actual_height = currentItemHeight;
    //   if (leftH == rightH || leftH < rightH) { //判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
    //     leftData.push(list[i]);
    //     leftH += currentItemHeight;
    //   } else {
    //     rightData.push(list[i]);
    //     rightH += currentItemHeight;
    //   }
    // }
    // console.log(leftHight,rightHight)
    // list.forEach((item) => {
    //   console.log(item)
    //   if (leftHight == rightHight || leftHight < rightHight) { //判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
    //     console.log('左边')
    //     leftList.push(item)
    //     leftHight = leftList.reduce((t, item) => {
    //       return t + item.actual_height;
    //     }, 0)
    //     console.log('执照号', leftHight)
    //   } else {
    //     console.log('you边')
    //     rightList.push(item)
    //     rightHight = rightList.reduce((t, item) => {
    //       return t + item.actual_height;
    //     }, 0)
    //     console.log('执照号youb', rightHight)
    //   }
    // })
    //更新左右两栏的数据以及累计高度
    this.setData({
      leftHight,
      rightHight,
      leftList,
      rightList,
      list
    })
  }
})

// 1.左右两栏布局的确定
// 2.每张图片高度的计算
// 3.根据左右两栏的高度，确定每个item的摆放位置。
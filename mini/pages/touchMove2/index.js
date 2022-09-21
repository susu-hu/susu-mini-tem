// pages/touchMove2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList:[
      {
        id:'1',
        name:'左滑试试吧',
        xmove:0,
      }, 
      {
        id:'2',
        name:'左滑试试吧',
        xmove:0,
      },
      {
        id:'3',
        name:'左滑试试吧',
        xmove:0,
      },
      {
        id:'4',
        name:'左滑试试吧',
        xmove:0,
      }, 
    ]
  },

  /**
     * 处理touchstart事件
     */
    handleTouchStart(e) {
      this.startX = e.touches[0].pageX
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
      if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
          this.showDeleteButton(e)
      } else if (e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
          this.showDeleteButton(e)
      } else {
          this.hideDeleteButton(e)
      }
  },
  /**
     * 显示删除按钮
     */
    showDeleteButton: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setXmove(index, -65);
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setXmove(index, 0);
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (index, xmove) {
      let {cardList} = this.data;
      cardList[index].xmove = xmove;
      this.setData({
        cardList: cardList
      })
      console.log(this.data.cardList)
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
      if (e.detail.source === 'friction') {
          if (e.detail.x < -30) {
              this.showDeleteButton(e)
          } else {
              this.hideDeleteButton(e)
          }
      } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
          this.hideDeleteButton(e)
      }
  },
  onLoad: function (options) {

  },


 
  onShow: function () {

  },
  handleDelete(e) {
    let {id} = e.currentTarget.dataset;
    this.itemDel(id)
  },
  itemDel(id){
    this.data.cardList.forEach((item,index)=>{
      if(item.id==id){
        this.data.cardList.splice(index,1)
      }
      this.setData({
        cardList:this.data.cardList
      })
      wx.showToast({
        title: '删除成功',
        icon:'success'
      })
    })
  }
 
})
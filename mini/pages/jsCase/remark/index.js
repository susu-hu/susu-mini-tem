// pages/jsCase/remark/index.js
import { timeAgoFormat, getDateDiff } from '../util/dateTimer'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(new Date('2023-05-03 12:00').getTime())
    console.log(timeAgoFormat(new Date('2023-05-03 12:00')))
    console.log(timeAgoFormat(new Date('2023-05-02 22:34')))
    console.log(timeAgoFormat(new Date('2023-5-3 22:00')))
    console.log(timeAgoFormat(new Date('2000-5-3 22:00')))
    console.log('---------------------------------------------------')
    console.log(getDateDiff(Date.parse('2023-05-03 22:25')))
    console.log(getDateDiff(new Date('2023-5-3 22:00')))
    console.log(getDateDiff(new Date('2000-5-3 22:00')))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
// pages/manage/manage.js

import {
  allHabitsRequest,
  deleteHabitsRequest,
}from '../../api/main'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
  },

  getList() {
    const that = this
    allHabitsRequest().then(res => {
      console.log(res)
      that.setData({
        list: res.data
      })
    })
  },

  clickInHabits(e) {
    const habitId = e.currentTarget.dataset.habitid
    if (habitId == this.data.id) {
      this.setData({
        id:0,
      })
    }
    else {
      this.setData({
        id:habitId,
      })
    }
  },


  addHabits() {
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },

  modifyHabits(e) {
    const habitId = e.currentTarget.dataset.habitid
    console.log(habitId + "修改")
    wx.navigateTo({
      url: '/pages/modify/modify?id=' + habitId,
    })
   
  },

  deleteHabits(e) {
    const habitId = e.currentTarget.dataset.habitid
    console.log(habitId + "删除")
    deleteHabitsRequest(habitId).then(res => {
      wx.switchTab({
        url: '/pages/manage/manage',
      })
    })
  }
})
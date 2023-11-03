// pages/mine/mine.js

import {
  logoutRequest
}from '../../api/main'

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

  },

  exitLogin() {    
    logoutRequest().then(res => {
      wx.showToast({
        title: '退出成功',
        icon: 'success'
      })
    })
    wx.removeStorageSync('token')
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }, 1500);
  }
})
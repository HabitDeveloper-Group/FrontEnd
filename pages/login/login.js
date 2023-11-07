// pages/login/login.js

import {
  loginRequest
}from '../../api/main'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',//登陆用户名
    password: '', //密码
    saveCount: true, //是否记住账号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initCount()
  },

  //初始化账号
  initCount() {
    const accountCache = wx.getStorageSync('account')
    if (accountCache) {
      this.setData({
        ...accountCache
      })
    }
  },

  //登录
  login() {
    const that = this
    const postDate = {
      userName:that.data.userName,
      password:that.data.password
    }
    wx.showLoading({
      title: '登陆中...',
    })
    loginRequest(postDate).then(res => {
      console.log(res)
      wx.setStorageSync('token', res.data)
      if (that.data.saveCount) {
        wx.setStorageSync('account', postDate)
      }else {
        wx.removeStorageSync('account')
      }
      wx.showToast({
        title: '登陆成功',
        icon: 'success'
      })
      console.log("here")
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/home/home',
        })
      }, 500);
    })
  },
  switchStatus() {
    this.setData({
      saveCount: !this.data.saveCount
    })
  },
  registerNewUser(){
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/register/register',
      })
    }, 500);
  }
  
})
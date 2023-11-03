// pages/welcome/welcome.js
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
    const token = wx.getStorageSync('token')
    if (token) {
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/home/home',
        })
      }, 1500);
    }else {
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }, 1500);
    }
  },

  
})
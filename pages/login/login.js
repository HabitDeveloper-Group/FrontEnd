// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',//登陆用户名
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
      username:that.data.username,
      password:that.data.password
    }
    // wx.request({
    //   url: 'http://192.168.163.1:8080/user/login',
    //   data: postDate,
    //   method: 'POST',
    //   success(res) {
    //     console.log(res)
    //     if (res.data.code == 0) {
    //       wx.showToast({
    //         title: '登陆失败',
    //         icon: 'none'
    //       })
    //       return
    //     }
    //     wx.setStorageSync('token', res.data.data)
    //     if (that.data.saveCount) {
    //       wx.setStorageSync('account', postDate)
    //     }else {
    //       wx.removeStorageSync('account')
    //     }
    //     wx.showToast({
    //       title: '登陆成功',
    //       icon: 'none'
    //     })
    //     setTimeout(() => {
    //       wx.redirectTo({
    //         url: '/pages/home/home',
    //       })
    //     }, 1500);
    //   }
      
    // })
    if (that.data.saveCount) {
      wx.setStorageSync('account', postDate)
    }else {
      wx.removeStorageSync('account')
    }
    wx.showToast({
      title: '登陆成功',
      icon: 'none'
    })
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/home/home',
      })
    }, 1500);
  },
  switchStatus() {
    this.setData({
      saveCount: !this.data.saveCount
    })
  },
  registerNewUser(){
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/register/register',
      })
    }, 500);
  }
  
})
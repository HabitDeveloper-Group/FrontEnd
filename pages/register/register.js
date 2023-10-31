// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',//注册用户名
    name: '',    //昵称
    password: '',//密码
    password_again: '', //确认密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  check_username() {
    const that = this
    const getDate = {
      username:that.data.username,
    }
    // wx.request({
    //   url: '/user/register',
    //   data: getDate,
    //   method: 'GET',
    //   success(res) {
    //     console.log(res)
    //     if (res.code == 0) {
    //       wx.showToast({
    //         title: '用户已存在！',
    //         icon: 'erroe'
    //       })
    //       return
    //     } 
    //   }
    // })
    if (that.data.username == 'hh') {
      wx.showToast({
        title: '用户已存在！',
        icon: 'error'
      })
      return
    }
  },
  check_password() {
    if (this.data.password === this.data.password_again) return true;
    else return false;
  },
  register() {
    if (this.check_password() === false) {
      wx.showToast({
        title: '请检查密码是否正确输入！',
        icon: 'none'
      })
      return
    }
    const that = this
    const postDate = {
      username:that.data.username,
      name:that.data.name,
      password:that.data.password
    }
    // wx.request({
    //   url: '/user/register',
    //   data: postDate,
    //   method: 'POST',
    //   success(res) {
    //     console.log(res)
    //     if (res.code == 0) {
    //       wx.showToast({
    //         title: '注册失败',
    //         icon: 'error'
    //       })
    //       return
    //     }
    //     wx.showToast({
    //       title: '注册成功',
    //       icon: 'success'
    //     })
    //   }
    // })
    wx.showToast({
      title: '注册成功',
      icon: 'success'
    })
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }, 500);
  }
})
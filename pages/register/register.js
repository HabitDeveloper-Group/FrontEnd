// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',//注册用户名
    name: '',    //昵称
    password: '',//密码
    password_again: '', //确认密码
    userNameExited: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //像后端请求当前用户名是否存在，并使用userNameExisted标记
  check_username() {
    const that = this
    const getDate = {
      userName:that.data.userName,
    }
    // wx.request({
    //   url: '/user/register',
    //   data: getDate,
    //   method: 'GET',
    //   success(res) {
    //     console.log(res)
    //     that.data.userNameExited=false
    //     if (res.code == 0) {
    //       wx.showToast({
    //         title: '用户已存在！',
    //         icon: 'erroe'
    //       })
    //       that.data.userNameExited=true
    //       return
    //     } 
    //   }
    // })
    that.data.userNameExited=false
    if (that.data.userName == 'hh') {
      that.data.userNameExited=true
      wx.showToast({
        title: '用户已存在！',
        icon: 'error'
      })
      return
    }
  },

  //检查两次密码输入是否一致
  check_password() {
    if (this.data.password === this.data.password_again) return true;
    else return false;
  },

  //点击注册按钮的响应，检查密码是否一致，检查用户名当前是否存在，都满足条件则向后端发送注册请求
  register() {
    if (this.check_password() === false) {
      wx.showToast({
        title: '请检查密码是否正确输入！',
        icon: 'none'
      })
      return
    }
    if (this.data.userNameExited == true) {
      wx.showToast({
        title: '用户名已存在！',
        icon: 'error'
      })
      return
    }
    const that = this
    const postDate = {
      userName:that.data.userName,
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
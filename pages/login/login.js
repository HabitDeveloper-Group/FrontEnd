// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',//登陆用户名
    password: '' //密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  login() {
    const postDate = {
      username:this.data.username,
      password:this.data.password
    }
    wx.request({
      url: 'http://192.168.163.1:8080/user/login',
      data: postDate,
      method: 'POST',
      success(res) {
        console.log(res)
        if (res.data.code == 0) {
          wx.showToast({
            title: '登陆失败',
            icon: 'none'
          })
        }
        wx.showToast({
          title: '登陆成功',
          icon: 'none'
        })
      }
    })

    
  }
})
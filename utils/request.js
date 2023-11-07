export default function createRequest(options) {
  return new Promise((resolve) => {
    const token = wx.getStorageSync('token')
    if (options.needLogin !== false && !token) {
      wx.showToast({
        title: '请先登录！',
        icon: 'none'
      })
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }, 500);
      return 
    }

    const baseUrl = "https://z55024643k.goho.co" 
    //https://z55024643k.goho.co
    //https://d4e1eed8-1e2b-45c8-b358-249df221e2ce.mock.pstmn.io
    //https://a627c4df-2cf4-4c97-afec-0f2670bc0211.mock.pstmn.io
    const url = `${baseUrl}${options.url}`
    const header = {
      token
    }
    const data = options.data

    let showLoading = false
    if (options.loading !== false) {
      showLoading = true
      wx.showLoading({
        title: '正在加载',
        mask: true 
      })
    }
    wx.request({
      url,
      method: options.method || 'GET',
      timeout: options.timeout || 2000,
      header,
      data:options.data || {},
      success(res) {        
        res = res.data        
        switch(res.code) {
          case 1:
            return resolve(res)
          case 0:
            wx.showToast({
              title: res.msg,
              icon: 'none'
            })
            break
          default:
            wx.showToast({
              title: '服务器开小差啦~',
              icon: 'none'
            })
            break
        }
      },
      fail() {
        wx.showToast({
          title: '服务器开小差啦~',
          icon: 'none'
        })
      },
      complete() {
        if (showLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}
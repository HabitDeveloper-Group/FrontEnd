// home.js
import {
  processingHabitsRequest,
  complishedHabitsRequest,
  failedHabitsRequest
}from '../../api/main'


Page({
   /**
   * 页面的初始数据
   */
  data: {
    type: 3,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
  },

  getList() {
    const that = this
    let p = null
    if (that.data.type == 1) {
      p = processingHabitsRequest()
    }else if (that.data.type == 2) {
      p = complishedHabitsRequest()
    }else if (that.data.type == 3) {
      p = failedHabitsRequest()
    }
    p.then(res => {
      console.log(res)
      that.setData({
        list: res.data
      })
    })
  },

})

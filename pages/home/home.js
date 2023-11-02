// home.js
import {
  processingHabitsRequest,
  complishedHabitsRequest,
  failedHabitsRequest,
  checkInHabitsRequest,

}from '../../api/main'


Page({
   /**
   * 页面的初始数据
   */
  data: {
    type: 1,
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

  //改变成绩类型
  changeHabitsType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      type
    })
    this.getList()
  },

  clockInHabits(e) {
    const that = this
    //!命名不能用驼峰，需要全小写
    const habitId = e.currentTarget.dataset.habitid
    if (that.data.type == 1) {
      checkInHabitsRequest(habitId).then(res => {
        wx.showToast({
          title: '已成功打卡！',
          icon: 'success'
        })
        that.getList()
      })
    }
  }
})

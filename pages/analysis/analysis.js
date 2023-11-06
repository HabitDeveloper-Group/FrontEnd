// pages/analysis/analysis.js
import {
  analysisHabitsRequest,
}from '../../api/main'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    currentWeekShow:"本周",
    currentWeek:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
  },


  getList() {
    const that = this
    const date = new Date()
    var weekNum = this.getWeek(date)
    that.setData({
      currentWeek:weekNum
    })
    
    var thisweek = this.getDay(weekNum) 
    console.log(thisweek)
    var getData = thisweek.start_day + '&' + thisweek.end_day

    analysisHabitsRequest(getData).then(res => {
      console.log(res)
      that.setData({
        list: res.data
      })
    })
  },

  getDay(week) {
    var thisweek = {};
    var date = new Date();
    // 本周一的日期
    date.setDate(date.getDate() - date.getDay() + 1);
    thisweek.start_day = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() ;
  
    // 本周日的日期
    date.setDate(date.getDate() + 6);
    thisweek.end_day = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return thisweek
  },

  

  getWeek(dt) {
    let d1 = new Date(dt);
    let d2 = new Date(dt);
    d2.setMonth(0);
    d2.setDate(2);
    let rq = d1 - d2;
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    console.log(days)
    let num = Math.ceil(days / 7);    
    return num + 1;
},

  
})
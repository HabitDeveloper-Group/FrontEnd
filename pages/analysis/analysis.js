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

  onShow() {
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
    var getData = 'begin=' + thisweek.start_day + '&' + 'end=' + thisweek.end_day
    console.log(getData)
    analysisHabitsRequest(getData).then(res => {
      console.log(res)
      that.setData({
        list: res.data
      })
    })
  },



  getDay(weekNumber, year = new Date().getFullYear()) {
    const date = new Date(year, 0, 1 + (weekNumber - 1) * 7);
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    var res = {};
    res.start_day = formatDate(weekStart)
    res.end_day = formatDate(weekEnd)
    return res;
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

  clickLeft() {
    const that = this
    var week = that.data.currentWeek
    var weekshow = that.data.currentWeekShow
    if (week > 0) {
      week = week - 1
    }
    console.log(week)
    const todayweek = that.getWeek(new Date())
    if (week == todayweek - 1) {
      weekshow = "上周"
    }else {
      weekshow = "第" + week + "周"
    }

    var thisweek = that.getDay(week) 
    console.log(week)
    var getData = 'begin=' + thisweek.start_day + '&' + 'end=' + thisweek.end_day
    analysisHabitsRequest(getData).then(res => {
      console.log(res)
      that.setData({
        list: res.data,
        currentWeek:week,
        currentWeekShow:weekshow
      })
    })

  },

  clickRight() {
    const that = this
    var week = that.data.currentWeek
    var weekshow = that.data.currentWeekShow
    const todayweek = that.getWeek(new Date())
    if (week >= todayweek) return
    week = week + 1
    if (week == todayweek - 1) {
      weekshow = "上周"
    }else if(week == todayweek){
      weekshow = "本周"
    }else {
      weekshow = "第" + week + "周"
    }

    var thisweek = that.getDay(week) 
    var getData = 'begin=' + thisweek.start_day + '&' + 'end=' + thisweek.end_day
    analysisHabitsRequest(getData).then(res => {
      console.log(res)
      that.setData({
        list: res.data,
        currentWeek:week,
        currentWeekShow:weekshow
      })
    })

  }
  
})
// pages/add/add.js
// pages/modify/modify.js

import {
  allIconsRequest,
  addHabitsRequest
}from '../../api/main.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIcon: {
      i:0,
      x:0,
      arr:[        
      ]
    },
    swiperTag: {
      i:0,
      x:0,
      arr:[
        {
          v:0, content:"任意"
        },
        {
          v:1, content:"运动"
        },
        {
          v:2, content:"学习"
        },
        {
          v:3, content:"作息"
        },
        {
          v:4, content:"健康"
        },
        {
          v:5, content:"休闲"
        },
        {
          v:6, content:"娱乐"
        },
        
      ]
    },
    countArray:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    
    currentIconUrl: "",

    habitName:"",

    currentTag:"",

    description:"",

    earliestTime:"00:00",

    lastestTime:"23:59",

    lowerLimit:""
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init();
  },

  init() {
    this.onLoadIcons();
    this.setData({
      currentTag: this.data.swiperTag.arr[0].content
    })
  },
  
  swiperIcon:function(e){　
    　/*获取可视窗口宽度*/
    　var w=wx.getSystemInfoSync().windowWidth;
    　var leng=this.data.swiperIcon.arr.length;
    　var i = e.target.dataset.i;
    　var disX = (i - 2) * w / leng;
      //console.log(this.data.arr['i'])
    　if(i!=this.data.swiperIcon.i){
    　　this.setData({
    　　　'swiperIcon.i':i,
          'currentIconUrl': this.data.swiperIcon.arr[i].content
    　　})
    　}
    　this.setData({
    　　'swiperIcon.x':disX
    　})
    },

  onLoadIcons() {
    const that = this
    var arr = 'swiperIcon.arr'
    allIconsRequest().then(res => {
      console.log(res)
      that.setData({
        [arr]: res.data.arr,
        currentIconUrl:res.data.arr[0].content
      })      
    })
  },

  swiperTag:function(e) {
    /*获取可视窗口宽度*/
    　var w=wx.getSystemInfoSync().windowWidth;
    　var leng=this.data.swiperTag.arr.length;
    　var i = e.target.dataset.i;
    　var disX = (i - 2) * w / leng;
      //console.log(this.data.arr['i'])
    　if(i!=this.data.swiperTag.i){
    　　this.setData({
    　　　'swiperTag.i':i,          
    　　})
    　}
    　this.setData({
    　　'swiperTag.x':disX,
        'currentTag': this.data.swiperTag.arr[i].content
    　})
  },

  addHabits() {
    const that = this

    if (that.data.habitName == "" || that.data.tag == "") {
      wx.showToast({
        title: '习惯名称和标签是必填项',
        icon: 'none'
      })
      return
    }
   
    const postData = {
      habitName: that.data.habitName,
      icon:that.data.currentIconUrl,
      tag:that.data.currentTag,
      description:that.data.description,
      earliestTime:that.data.earliestTime,
      latestTime:that.data.lastestTime,
      lowerLimit:that.data.lowerLimit
    }

    addHabitsRequest(postData).then(res=> {
      console.log(res)
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/manage/manage',
        })  
      }, 1000);     
    })

  },

  
  
})
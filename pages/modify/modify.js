// pages/modify/modify.js

import {
  allIconsRequest,
  getInitHabitsRequest,
  modifyHabitsRequest
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

    earliestTime:"",

    latestTime:"",

    lowerLimitIdex:"0",

    lowerLimit:"1",
    
    habitId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      habitId: options.id
    });    

    this.init();
  },

  findIndex(str, arr) {    
    for (let i = 0; i < arr.length; i++) {           
      if (arr[i].content === str) {
        console.log(i)
        return i;
      }
    }
    return -1;
  },
  

  init() {
    this.onLoadIcons()
    const that = this
    getInitHabitsRequest(that.data.habitId).then(res => {        
        that.setData({       
        habitName:res.data.habitName,
        currentTag:res.data.tag,
        currentIconUrl:res.data.icon,
        description:res.data.description,
        latestTime:res.data.latestTime,
        earliestTime:res.data.earliestTime,        
        lowerLimit:res.data.lowerLimit,                     
      }, ()=>{
        var idx1 = this.findIndex(this.data.currentIconUrl, this.data.swiperIcon.arr)
        var idx2 = this.findIndex(this.data.currentTag, this.data.swiperTag.arr)
        var w = wx.getSystemInfoSync().windowWidth
        console.log(w)
        var X1 = (idx1 - 2) * w / 6;
        var X2 = (idx2 - 2) * w / 6;
        that.setData({
          'swiperIcon.i':idx1,
          'swiperTag.i':idx2,
          'swiperIcon.x': X1,
          'swiperTag.x': X2
        })
      })
    })    
    
  },
  
  swiperIcon:function(e){　
    　/*获取可视窗口宽度*/
    　var w=wx.getSystemInfoSync().windowWidth;
    　var leng=this.data.swiperIcon.arr.length;    
    　var i = e.target.dataset.i;
      console.log(i)
    　var disX = (i - 2) * w / 6;
      console.log(disX)
      //console.log(this.data.arr['i'])
    　if(i!=this.data.swiperIcon.i){
    　　this.setData({
    　　　'swiperIcon.i':i,          
    　　})
    　}

    　this.setData({
    　　'swiperIcon.x':disX,
        'currentIconUrl': this.data.swiperIcon.arr[i].content
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
    　var disX = (i - 2) * w / 6;
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

  modifyHabits() {
    const that = this
    const putDatas = {
          habitId:that.data.habitId,
          habitName:that.data.habitName,
          icon:that.data.currentIconUrl,
          tag:that.data.currentTag,
          description:that.data.description,
          earliestTime:that.data.earliestTime,
          latestTime:that.data.latestTime,
          lowerLimit:that.data.lowerLimit
    }

    modifyHabitsRequest(putDatas).then(res => {
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/manage/manage',
        })  
      }, 1000);     
    })
  },

  limitpick:function(e) {
    this.setData({
      lowerLimit:this.data.countArray[this.data.lowerLimitIdex]
    })
  }


})
// pages/modify/modify.js

import {
  allIconsRequest
}from '../../api/main.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperNav: {
      i:0,
      x:0,
      arr:[
        {v:0, icon: "https://habit-developer-icons.oss-cn-beijing.aliyuncs.com/icons/running.png"},
        {v:1, icon: "https://habit-developer-icons.oss-cn-beijing.aliyuncs.com/icons/running.png"},
        {v:2, icon: "https://habit-developer-icons.oss-cn-beijing.aliyuncs.com/icons/running.png"},
        {v:3, icon: "https://habit-developer-icons.oss-cn-beijing.aliyuncs.com/icons/running.png"},
        {v:4, icon: "https://habit-developer-icons.oss-cn-beijing.aliyuncs.com/icons/running.png"},
        {v:5, icon: "https://habit-developer-icons.oss-cn-beijing.aliyuncs.com/icons/running.png"},
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.onLoadIcons();

  },

  swiperNav:function(e){
    　console.log(e);
    　this.setData({
    　　'swiperNav.i':e.target.dataset.i
    　})
    },
  
  swiperNav:function(e){
    　console.log(e);
    　/*获取可视窗口宽度*/
    　var w=wx.getSystemInfoSync().windowWidth;
    　var leng=this.data.swiperNav.arr.length;
    　var i = e.target.dataset.i;
    　var disX = (i - 2) * w / leng;
    　if(i!=this.data.swiperNav.i){
    　　this.setData({
    　　　'swiperNav.i':i
    　　})
    　}
    　this.setData({
    　　'swiperNav.x':disX
    　})
    },

  onLoadIcons() {
    const that = this
    var arr = 'swiperNav.arr'
    allIconsRequest().then(res => {
      console.log(res)
      that.setData({
        [arr]: res.data.arr
      })
    })
  }
  

})
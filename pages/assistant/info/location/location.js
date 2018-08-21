// pages/assistant/info/location/location.js
Page({
  data:{
    locations:["北京市海淀区中国技术交易大厦A座17层", "北京市海淀区中国技术交易大厦A座17层", "北京市海淀区中国技术交易大厦A座17层", "北京市海淀区中国技术交易大厦A座17层"]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },


  addLocation:function() {
    wx.navigateTo({
      url: 'add/add'
    })
  }
})
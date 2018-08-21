// pages/student/appraise/appraise.js
Page({
  data:{
    starNum:0
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

  choose:function(e){
   var num = e.currentTarget.dataset.id;
   this.setData({
     starNum:num
   })
 },

 save:function() {
   
   wx.navigateBack({
     delta: 1, // 回退前 delta(默认为1) 页面
     success: function(res){
       // success
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
 }
})
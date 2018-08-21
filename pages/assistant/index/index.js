// pages/assistant/msg/msg.js
Page({
  data:{
    orders: [
      {
        name: '张一',
        phone: '10000000001',
        date: '2017-2-13',
        time: '17:00-18:00'
      },
      {
        name: '张二',
        phone: '10000000002',
        date: '2017-2-13',
        time: '18:00-19:00'
      },
      {
        name: '张三',
        phone: '10000000003',
        date: '2017-2-13',
        time: '19:00-20:00'
      },
      {
        name: '张四',
        phone: '10000000004',
        date: '2017-2-13',
        time: '20:00-21:00'
      }
    ]
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


  msgClick: function() {
    wx.navigateTo({
      url: '../msg/msg'
    })
  },

  itemClick: function (e) {
    // TODO 条目点击 index 是点击位置
    var index = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: '../order/order'
    })
  }
})
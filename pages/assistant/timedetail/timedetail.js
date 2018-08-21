// pages/assistant/timedetail/timedetail.js
Page({
  data: {
    orders: [
      {
        name: '王子文',
        phone: '158xxxxxxxx',
        remark: '诗歌，是一种文学体裁，透过语言，除了表达文字的意义外，也表达情感与美感，引发共鸣',
        location: '北京市海淀区中国技术交易大厦A座17层',
        orderTime: '2017-3-10 14:00'
      },
      {
        name: '王子文',
        phone: '158xxxxxxxx',
        remark: '诗歌，是一种文学体裁，透过语言，除了表达文字的意义外，也表达情感与美感，引发共鸣',
        location: '北京市海淀区中国技术交易大厦A座17层',
        orderTime: '2017-3-10 14:00'
      }
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.raw)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
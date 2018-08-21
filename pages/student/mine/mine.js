// pages/student/mine/mine.js
Page({
  data: {
    current_index: 0,
    swiperHeight: 0,
    orders:['李一', '李二', '李三', '李四', '李五', '李六']
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          swiperHeight: (res.windowHeight - 45)
        })
      }
    })
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
  },

// 页面滑动关联
  switchTab: function (e) {
    console.log(e.detail.current)
    console.log(e.detail)
    this.setData({
      current_index: e.detail.current
    })
  }
})
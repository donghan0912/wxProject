// pages/assistant/info/school/school.js
Page({
  data: {
    schools: ["北京大学", "清华大学", "北京邮电大学", "北京人民大学", "北京师范大学"]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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

  itemlongclick: function (e) {
    var index = e.currentTarget.id;
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否删除该学校',
      confirmColor: '#000000',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log("取消")
        }
      }
    })
  }
})
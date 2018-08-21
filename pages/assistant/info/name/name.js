// pages/assistant/info/name/name.js
var name;
var that;
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
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

  bindKeyInput: function (e) {
    console.log(e.detail.value);
    // name = e.detail.value;
  },

  save: function () {
    console.log(name)
  }
})
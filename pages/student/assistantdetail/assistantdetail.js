// pages/student/assistantdetail/assistantdetail.js
var list = new Array() // 每次拉取的评论数
Page({
  data: {
    scrollHeight:300,
    hiddens: true,
    ssss: 13,
    school: '北京大学、北京理工大学、北京师范大学、北京航空航天大学、北京邮电大学',
    appraise: [
      '北京市海淀区中国技术交易大厦A座12层',
      '北京市海淀区中国技术交易大厦A座15层',
      '北京市海淀区中国技术交易大厦A座16层',
      '北京市海淀区中国技术交易大厦A座17层',
      '北京市海淀区中国技术交易大厦A座17层',
      '北京市海淀区中国技术交易大厦A座18层',
      '北京市海淀区中国技术交易大厦A座19层',
      '北京市海淀区中国技术交易大厦A座20层'
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight
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

  clickLoadMore: function () {
    if (this.data.hidden) {
      this.setData({
        hiddens: false
      })
    } else {
      this.setData({
        hiddens: true
      })
    }
  },

  loadMore:function() {
    // 显示收起并且上次拉取的评论个数少于10，才加载更多
    if (!this.data.hidden && list.length >= 10) {
      console.log('加载更多了')
    }
  }
})
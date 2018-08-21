// pages/assistant/mine.js
var array = new Array(14);
for (var i = 0; i < 14; i++) {
  array[i] = new Array(7)
}
var raw1 
    var column1
Page({
  data: {
    current_index: 0,
    mark: 0, // 0: 不显示“预约”，1：显示“预约”
    weeks: [
      {
        week: "周一",
        date: "1-5",
        num: 2
      },
      {
        week: "周二",
        date: "1-6",
        num: 5
      },
      {
        week: "周三",
        date: "1-7",
        num: 11
      },
      {
        week: "周四",
        date: "1-8",
        num: 0
      },
      {
        week: "周五",
        date: "1-9",
        num: 32
      },
      {
        week: "周六",
        date: "1-10",
        num: 4
      },
      {
        week: "周日",
        date: "1-11",
        num: 6
      },
      {
        week: "周一",
        date: "2-5",
        num: 2
      },
      {
        week: "周二",
        date: "2-6",
        num: 5
      },
      {
        week: "周三",
        date: "2-7",
        num: 11
      },
      {
        week: "周四",
        date: "2-8",
        num: 0
      },
      {
        week: "周五",
        date: "2-9",
        num: 32
      },
      {
        week: "周六",
        date: "2-10",
        num: 4
      },
      {
        week: "周日",
        date: "2-11",
        num: 6
      }
    ],
    time: [
      "10:00-11:00",
      "11:00-12:00",
      "12:00-13:00",
      "13:00-14:00",
      "14:00-15:00",
      "15:00-16:00",
      "16:00-17:00",
      "17:00-18:00"
    ],
    tttt4: [
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ],
      [
        '1', '3', '2', '1', '3', '2', '1', '2'
      ]
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    for (var i = 0; i < this.data.tttt4.length; i++) {
      for (var j = 0; j < this.data.tttt4[0].length; j++) {
        var n = this.data.tttt4[i][j]
        if (n == 3) {
          // this.data.color[i][j] = '#F0F0F0'
          array[i][j] = '#F0F0F0'
        } else if (n == 1) {
          // this.data.color[i][j] = '#FFFFFF'
          array[i][j] = '#FFFFFF'
        
        } else if (n == 2) {
          // this.data.color[i][j] = '#99CCFF'
          array[i][j] = '#99CCFF'
      
        }
      }
    }

    this.setData({
            array: array
          })
  },
  // onReady: function () {
  //   // 页面渲染完成
  // },
  // onShow: function () {
  //   // 页面显示
  // },
  // onHide: function () {
  //   // 页面隐藏
  // },
  // onUnload: function () {
  //   // 页面关闭
  // },
  switch1: function () {
    this.setData({
      current_index: 0
    })
  },
  switch2: function () {
    this.setData({
      current_index: 1
    })
  },
  itemClick: function (e) {
    // var raw
    // var column
    raw1 = e.target.dataset.row
    column1 = e.target.dataset.column
    console.log(e.target.dataset.num)
    console.log("第" + raw1+ "行")
    console.log(this.data.time[e.target.dataset.row])
    console.log("第" + column1 + "列")
    var gsUserId = "1234"
    var id = "999"
    var tt = new Array()
    tt.push('id'),
      tt.push('title')
    tt.push('sss')
    var ss = JSON.stringify(tt)
    console.log(ss)

    wx.navigateTo({
      url: '../timedetail/timedetail?raw=' + raw1 + '&column=' + column1
    })
   
  },

  startUserInfo:function() {
    wx.navigateTo({
      url: '../info/info'
    })
  }
})
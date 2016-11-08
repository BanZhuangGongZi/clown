//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  test: function (e) {
    var that = this;
    wx.request({
      method: "POST",
      url: "http://localhost:8083/test",
      data: {
        name: this.data.userInfo.nickName
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({ "motto": res.data });
      }
    });
  }
})

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    exClass: {
      exClass1: "",
      exClass2: "",
      exClass3: "",
      exClass4: "",
      exClass5: ""
    },
    emotion: "",
    inputValue: ""
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
  test: function () {
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
  },
  setEmotion: function (e) {
    var id = e.currentTarget.id;
    for (var ex in this.data.exClass) {
      var temp = {};
      if (id.substr(id.length - 1, 1) == ex.substr(ex.length - 1, 1)) {
        this.data.emotion = id.substr(id.length - 1, 1);
        temp[ex] = "emotion-set";
      } else {
        temp[ex] = "";
      }
      this.setData(temp);
    }
  },
  getEmotionDes: function (e) {
    var value = e.detail.value;
    this.setData({
      "inputValue": value
    });
  }
})

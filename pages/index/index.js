//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgs: [
      {
        url: '../../static/img/nc-banner-1.png',
        id: 1
      },
      {
        url: '../../static/img/nc-banner-2.png',
        id: 2
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    products: [
      {
        name: '狗狗理财1',
        interest: '10.00%',
        type: '商业承兑汇票',
        balance: '1000.00',
        id: 1
      },
      {
        name: '狗狗理财2',
        interest: '6.00%',
        type: '商业承兑汇票',
        balance: '10000.00',
        id: 2
      },
      {
        name: '狗狗理财3',
        interest: '7.00%',
        type: '商业承兑汇票',
        balance: '9998.00',
        id: 3
      },
      {
        name: '狗狗理财4',
        interest: '8.00%',
        type: '商业承兑汇票',
        balance: '4567.00',
        id: 4
      },
      {
        name: '狗狗理财5',
        interest: '9.50%',
        type: '商业承兑汇票',
        balance: '1000.00',
        id: 5
      },
      {
        name: '狗狗理财6',
        interest: '10.00%',
        type: '商业承兑汇票',
        balance: '1000.00',
        id: 6
      },
      {
        name: '狗狗理财7',
        interest: '10.25%',
        type: '商业承兑汇票',
        balance: '1000.00',
        id: 7
      },
      {
        name: '狗狗理财8',
        interest: '9.20%',
        type: '商业承兑汇票',
        balance: '1000.00',
        id: 8
      },
      {
        name: '狗狗理财9',
        interest: '8.00%',
        type: '商业承兑汇票',
        balance: '1000.00',
        id: 9
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

//logs.js
const util = require('../../utils/util.js');

Page({
  data: {
    imgUrls: [
      'https://nc-banners.oss-cn-beijing.aliyuncs.com/nc-banner-1.png',
      'https://nc-banners.oss-cn-beijing.aliyuncs.com/nc-banner-2.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log));
      })
    });
  },
  takePhoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: res => {
        this.setData({
          src: res.tempImagePath
        });
      }
    });
  },
  error(e) {
    console.log(e.detail);
  }
});

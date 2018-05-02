// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        'https://hamlet.b0.upaiyun.com/1609/19171/2788065f96c04ad38c8db50ad723bc37.jpg!/fwfh/640x352/quality/80',
        'https://hamlet.b0.upaiyun.com/1609/23150/4cc74e62833e4cdaaec79f3a2ef256e5.jpg!/fwfh/640x352/quality/80',
        'https://hamlet.b0.upaiyun.com/1609/23150/4cc74e62833e4cdaaec79f3a2ef256e5.jpg!/fwfh/640x352/quality/80',
        'https://hamlet.b0.upaiyun.com/1609/20180/934270f1be264c63bfaf85b37e545928.jpg!/fwfh/640x352/quality/80',
        'https://hamlet.b0.upaiyun.com/1609/20171/77f7a3c93fd641bf95150501ef9a7cad.jpg!/fwfh/640x352/quality/80',
        'https://hamlet.b0.upaiyun.com/1609/19171/2788065f96c04ad38c8db50ad723bc37.jpg!/fwfh/640x352/quality/80',
        'https://hamlet.b0.upaiyun.com/1609/23171/70065cf9e45d46729ca51dec55d5f650.jpg!/fwfh/640x352/quality/80'
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },
    grids1:[
      { name: '去下单', src: '../../static/img/u321.png', url:'../placeOrder2/placeOrder2' },
      { name: '采购单', src: '../../static/img/u325.png', url: '../orderList/orderList' },
    ],
    grids2:[
      { name: '跳蚤市场', src: '../../static/img/u320.png', url: '' },
      { name: '求职介绍', src: '../../static/img/u333.png', url: '' },
    ]
  },
  //未开发的提示
  uncultivated:function(e){
    console.log(e)
    var name = e.currentTarget.dataset.name
    if (name == '跳蚤市场' || name == '求职介绍'){
      wx.showModal({
        content: "暂未开放",
        showCancel: false,
      })
    }   
  },
  // 轮播滚动事件
  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/finance/finance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //搜索部分
    inputShowed: false,
    inputVal: "",
    collectData: [
      { price: '42.26', name: '关南社区顺丰配送点',time:'2018-05-01' },
      { price: '596', name: '关南社区顺丰配送点', time: '2018-05-21'},
      { price: '42.26', name: '关南社区顺丰配送点', time: '2018-05-01' },
    ]
  },
  // 搜索框事件开始
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    console.log(e)
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 搜索框事件结束
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
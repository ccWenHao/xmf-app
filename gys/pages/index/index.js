// pages/order/order.js
// 设置slider之间的宽度
var sliderWidth = 70;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //搜索部分
    inputShowed: false,
    inputVal: "",
    // tab栏部分
    tabs: ["全部", "接待单", "待配送", "已完成", "已取消"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    //列表数据
    listData: [
      { addr: '光谷信息技术股份有限公司', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 1, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 1, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 2, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 2, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 3, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 4, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 4, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 4, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 3, supplier: '光谷信息技术股份有限公司' },
      { addr: '光谷八路光谷广场', creatTime: '2018-3-9', src: '../../static/img/banner.png', id: '../orderDetail/orderDetail', status: 3, supplier: '光谷信息技术股份有限公司' }
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
  // 导航tab切换事件
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  handleDetail:function(e){
    console.log(e)
    getApp().globalData.detaileType = e.currentTarget.dataset.item.status
    console.log(getApp().globalData.detaileType)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
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
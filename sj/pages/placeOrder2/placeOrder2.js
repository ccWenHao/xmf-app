// pages/placeOrder2/placeOrder2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeOrderList:[
      {
        supplier: '供应商名称',addr:'湖北省武汉市洪山区', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '42.26/袋',name: '猪脚10只', total: 0, goodsId: 0 },
          { price: '12', unit: '12/袋', name: '大蒜', total: 0, goodsId: 1 }
        ]
      }, {
        supplier: '川味串串', addr: '光谷一路', remark: '3333', supplierId: 1, list: [
          { price: '56.36', unit: '56.36/袋', name: '麻辣九宫格锅底', total: 0, goodsId: 0 },
          { price: '28', unit: '28/扎', name: '西瓜汁', total: 0, goodsId: 1 }
        ]
      }, {
        supplier: '重庆老火锅', addr: '关南社区配送点', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '42.26/锅', name: '麻辣小龙虾', total: 0, goodsId: 0 },
          { price: '12', unit: '12/只', name: '开边蒜蓉虾', total: 0, goodsId: 1 }
        ]
      }
    ]
  },
  handlepPayment:function(){
    console.log('点击了提交')
    wx.redirectTo({
      url: '../payment/payment',
    });
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
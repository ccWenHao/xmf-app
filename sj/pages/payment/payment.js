// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paymentData:[
      {
        supplier: '麻辣香菇', list: [{ name: '金针菇', total: 5 }, { name: '芒果', total: 5 }]        
      },{
        supplier: '麻辣香菇', list: [{ name: '小花菇', total: 6 }, { name: '胡萝卜', total: 5 }, { name: '芒果', total: 5 }]
      },{
      supplier: '麻辣香菇', list: [{ name: '西瓜', total: 3 }, { name: '芒果', total: 5 }, { name: '黄瓜', total: 3 }],
      }
    ],
    addr:{phone:'15927427723',name:'康罗娜',addr:'湖北省武汉市洪山区光谷一路关南街道'}
  },

  handleRemarks: function (){
    console.log('点击了备注')
    wx.redirectTo({
      url: '../remarks/remarks',
    });
  },
  handleAddress:function(){
    console.log('点击了地址')
    wx.redirectTo({
      url: '../address/address',
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
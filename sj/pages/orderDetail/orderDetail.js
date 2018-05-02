// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: [
      {
        supplier: '供应商名称', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 0 },
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 1 }
        ]
      }, {
        supplier: '供应商名称', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 0 },
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 1 }
        ]
      }, {
        supplier: '供应商名称', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 0 },
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 1 }
        ]
      }
    ],
    detaileType:1,
    edit:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detaileType: getApp().globalData.detaileType
    })
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
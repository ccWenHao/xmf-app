// pages/placeOrder/placeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //搜索部分
    inputShowed: false,
    inputVal: "",
    placeData:[
      {
        supplier: '供应商名称', remark: '3333', supplierId:1,list: [
        { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0 ,goodsId:0}, 
        { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 1}
        ]
      }, {
        supplier: '供应商名称', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 0 },
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 1 }
        ]
      },{
        supplier: '供应商名称', remark: '3333', supplierId: 1, list: [
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 0 },
          { price: '42.26', unit: '瓶', name: '猪脚10只', total: 0, goodsId: 1 }
        ]
      }
    ],
    //总价格
    totalPrice:0,
    totals:0,
    edit:true
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
  // 商品数据增减
  handeAdd:function(e){
    console.log(e)
    //获取子索引
    var index = e.currentTarget.dataset.list
    // 获取父索引
    var indexs = e.currentTarget.dataset.items

    var data = this.data.placeData
    var total = data[indexs].list[index].total
    var price = data[indexs].list[index].price
    var totalPrice = this.data.totalPrice
    // if (total>=0){
      total+=1
      data[indexs].list[index].total = total
      console.log(price)
      console.log(Number(price))
      console.log(totalPrice)
      totalPrice = this.getNumber(totalPrice,price,1)
    // }
    this.setData(
      {
        placeData:data,
        totalPrice: totalPrice,
        totals: this.data.totals+1
      }
    )
    
  },
  getNumber:function(a,b,types){
    var aNumber = Number(a) * 100
    var bNumber = Number(b)*100
    var total = 0
    if (types == 1){ //加
      total = aNumber + bNumber
    }else{ //减
      total = aNumber - bNumber
    }
    return total/100
  },
  handeDel: function (e) {
    console.log(e)
    //获取子索引
    var index = e.currentTarget.dataset.list
    // 获取父索引
    var indexs = e.currentTarget.dataset.items

    var data = this.data.placeData
    var total = data[indexs].list[index].total
    var price = data[indexs].list[index].price
    var totalPrice = this.data.totalPrice
    if (total > 0) {
      total -= 1
      data[indexs].list[index].total = total
      totalPrice = this.getNumber(totalPrice, price, 2)
    }else{
      wx.showModal({
        content: "不能再少了！",
        showCancel: false,
      })
      return false
    }
    this.setData(
      {
        placeData: data,
        totalPrice: totalPrice,
        totals: this.data.totals - 1
      }
    )
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
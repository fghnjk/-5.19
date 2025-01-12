// pages/top.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  tapToSearch: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  tapToDetail() {
    wx.navigateTo({
      url: '../detailpost/detailpost',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    rowColsAvater: [{ size: '96rpx', type: 'circle' }],
    rowColsImage: [{ size: '96rpx', type: 'rect' }],
    rowColsContent: [{ width: '50%' }, { width: '100%' }],
    userInfo: {
      avatarUrl: defaultAvatarUrl,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
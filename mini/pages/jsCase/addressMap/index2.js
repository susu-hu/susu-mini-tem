let keys = 'SGXBZ-6X3K6-NYLSF-MALZD-QC6PK-BABOS';
let _page, _this;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this;
    wx.getLocation({
      success: function (res) {
        _this.getDistrict(res.latitude, res.longitude)
      },
    })
  },


  getDistrict(latitude, longitude) {
    _page = this;
    wx.request({
      url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${keys}`,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.result.address_component.district, res.data.result)

        // 省
        let province = res.data.result.address_component.province;
        // 市
        let city = res.data.result.address_component.city;
        // 区
        let district = res.data.result.address_component.district;

        _page.setData({
          district: res.data.result.address_component.district,
          region: [province, city, district]
        })
      }
    })
  },

  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
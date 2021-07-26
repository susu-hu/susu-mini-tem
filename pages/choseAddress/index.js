// pages/choseAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add:true,
    addressName:'',
    addressDetail:'',
    params:{
      detail:"",
      phone:"",
      contact:"",
    },
    can_click:false,//默认不可点击
  },
  setInput(e){
    let {type}=e.currentTarget.dataset,val = e.detail.value;
    let k = `params.${type}`
    this.setData({
      [k]: val,
    })
    this.inputClick()
  },
  inputClick(){
    let params = this.data.params,status=true,
    {addressName,addressDetail}=this.data;
    if (addressName == '') {
      status = false;
    }
    if (addressDetail == '') {
      status = false;
    }
    if (params.detail == '') {
      status = false;
    }

    if (params.phone == '') {
      status = false;
    }

    if (params.contact == '') {
      status = false;
    }
    this.setData({
      can_click:status
    })
  },

 
  onLoad: function (options) {

  },

 
  onShow: function () {

  },
   //获取用户定位授权，地图选点
   getLocation: function () {
    wx.getSetting({
      success:res=>{
        if(!res.authSetting['scope.userLocation']){
          wx.authorize({ 
            scope: 'scope.userLocation', 
            success:res=>{

            },fail:res=>{
              wx.showModal({
                title: '提示',
                content: '系统需要获取该您当前的定位，请确保您的位置授权已开启',
                showCancel: false,
                success: res=>{
                  if (res.confirm) {
                    wx.openSetting({
    
                    })
                  }
                }
              })
            }
          });
        }
        wx.chooseLocation({ 
          success: res=>{
            console.log(res)
            if(res.address!='' && res.name!=''){
              this.setData({
                addressName: res.name,
                addressDetail: res.address,
                add:false
              })
              this.inputClick()
            }
          }
        })
      }
    })

   },
   //获取微信收货地址
   chooseAddress(){
    // scope.address 通讯地址（已取消授权，可以直接调用对应接口）
    wx.chooseAddress({
      success: (res) => {
        console.log(res)
        this.setData({
          addressName: res.detailInfo,
          addressDetail: res.provinceName+res.cityName+res.countyName,
          'params.contact': res.userName,
          'params.phone': res.telNumber,
          'params.detail':res.detailInfo,
          add: false
        })
        this.inputClick()
      },
    })
  },
  subAddress(){
    let params = this.data.params,  {addressName,addressDetail}=this.data;
    let tmp = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
    if(params.phone!=''){
      if (!tmp.test(params.phone)) {
        return wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 2000,
          mask: true
        });
      }
    }else{
      wx.showToast({
        title: '请输入手机号',
        icon:'none'
      })
    }
    if (addressName == '' || addressDetail == ''){
      wx.showToast({
        title: '请选择收货地址',
        icon:'none'
      })
      return false;
    }
    if (params.detail == '' ){
      wx.showToast({
        title: '请输入详细地址',
        icon:'none'
      })
      return false;
    }
    if (params.contact == '' ){
      wx.showToast({
        title: '请输入联系人',
        icon:'none'
      })
      return false;
    }
    let subParams=params;
    subParams.addressName=addressName;
    subParams.addressDetail=addressDetail
    
  }
 

 
})
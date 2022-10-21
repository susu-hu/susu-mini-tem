// pages/jsCase/mapLocation/index.js
import qqMapSdk from "../util/qqmap.js";
Page({
  // 需要位置授权
  data: {
    address: "正在获取地址...",
    longitude: "",
    latitude: "",
    show_ani: "",
  },

  onLoad: function (options) {
    this.getNowLocation();
  },
  getNowLocation() {
    // map 组件使用的经纬度是火星坐标系，调用 wx.getLocation 接口需要指定 type 为 gcj02
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        console.log(res);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        this.getAddress(res.longitude, res.latitude);
      },
      fail: (err) => {
        console.log(err);
      },
      // requiredPrivateInfos
      // 自 2022 年 7 月 14 日后发布的小程序，使用以下8个地理位置相关接口时，需要声明该字段，否则将无法正常使用。2022 年 7 月 14 日前发布的小程序不受影响。

      // 申明需要使用的地理位置相关接口，类型为数组。目前支持以下项目：

      // getFuzzyLocation: 获取模糊地理位置
      // getLocation: 获取精确地理位置
      // onLocationChange: 监听试试地理位置变化事件
      // startLocationUpdate: 接收位置消息（前台）
      // startLocationUpdateBackground: 接收位置消息（前后台）
      // chooseLocation: 打开地图选择位置
      // choosePoi: 打开 POI 列表选择位置
      // chooseAddress: 获取用户地址信息
    });
  },
  regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
    if (e.type == "end" && (e.causedBy == "scale" || e.causedBy == "drag")) {
      this.setData({
        address: "正在获取地址...",
      });
      this.map = wx.createMapContext("maps");
      this.map.getCenterLocation({
        type: "gcj02",
        success: (res) => {
          this.setData({
            show_ani: "show",
            latitude: res.latitude,
            longitude: res.longitude,
          });
          this.getAddress(res.longitude, res.latitude);
        },
      });
    }
  },
  getAddress: function (lng, lat) {
    //根据经纬度====>转换腾底图----》获取地址信息
    qqMapSdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lng,
      },
      success: (res) => {
        console.log(res);
        this.setData(
          {
            address:
              res?.result?.formatted_addresses?.recommend || "获取位置信息失败",
          },
          () => {
            setTimeout(() => {
              this.setData({
                show_ani: "",
              });
            }, 1000);
          }
        );
      },
      fail: (res) => {
        this.setData({
          address: "获取位置信息失败",
        });
      },
    });
  },
});

import { baseUrl } from '../config.js'
import util from '../utils/util.js'
var app = getApp();

function httpReq(url, method, data = '', is_show_msg = false, msg = '', header = '') {// 再次封装请求
  var access_token = wx.getStorageSync('access_token');
  var token = access_token == undefined || access_token == '' ? '' : access_token;
  var api_url = baseUrl + url + '?access_token=' + token;
  var header_data = header == '' ? { 'content-type': 'application/json' } : header;

  //自定义加载内容
  if (is_show_msg) {
    var msg = msg != '' ? msg : '加载中...';
    wx.showLoading({
      title: msg,
      mask: true
    })
  }

  //组装参数加密
  var json_data = {
    'timestamp': util.getNowTime(),
    'access_token': token,
  };

  if (data != '' && data != undefined) {
    json_data.params = JSON.stringify(data)
  }

  var req_data = util.getRequestData(json_data);

  return new Promise(function (resolve, reject) {
    wx.request({
      url: api_url,
      method: method,
      data: req_data,
      header: header_data,
      success: (res) => {
        if (is_show_msg) {
          wx.hideLoading();
        }
        if (res.statusCode == 200) {
          if (res.data.code == 20003) {
            console.log('登录会话失效，重新登录');
            autoLogin().then(res => {
              if (res.code == 10000) {
                httpReq(url, method, data, is_show_msg, msg, header).then(res => {
                  resolve(res);
                });
              } else {
                resolve(res);
              }
            })
          } else if (res.data.code == 20008) {
            console.log('需要进行微信授权');
            wx.navigateTo({
              url: '/pages/empower/index',
            })
          } else {
            resolve(res.data);
          }

        } else {
          reject(res.data);
        }
      },
      fail: (err) => {
        if (is_show_msg) {
          wx.hideLoading();
        }

        wx.showToast({ title: '网络请求异常,请稍后再试', icon: 'none', duration: 2000, mask: true });

        reject('网络出错');
      }
    })
  })
}

//自动登录方法
function autoLogin() {
  return new Promise(function (resolve, reject) {
    //进行自动登录
    let come_from = app.globalData.user_come_from;
    let sup_mem_id = app.globalData.sup_mem_id;

    wx.login({
      success(res) {
        if (res.code) {
          httpReq('/user-member/auto-login', 'post', { 'wx_code': res.code, 'come_from': come_from, 'sup_mem_id': sup_mem_id }).then(
            function (res) {
              if (res.code == 10000) {
                wx.setStorageSync('access_token', res.data);
              } else {
                console.log(res);
              }
              resolve(res);
            })
        } else {
          wx.showToast({ title: '微信code获取失败！' + res.errMsg, icon: 'none', duration: 2000 });
          reject('微信code获取失败！');
        }
      }
    })

  })
}

module.exports = {
  httpReq: httpReq,
  autoLogin: autoLogin,
}

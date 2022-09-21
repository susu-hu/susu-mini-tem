import { baseUrl, appId } from '../config.js'
import util from '../utils/util.js'
import ajax from '../utils/http.js'

function upload(url, filePath, data = '') {
  var access_token = wx.getStorageSync('access_token');
  var token = access_token == undefined || access_token == '' ? '' : access_token;
  var api_url = baseUrl + url + '?access_token=' + token;

  //组装参数加密
  var json_data = {
    'timestamp': util.getNowTime(),
    'access_token': token,
  };

  if (data != '' && data != undefined) {
    json_data.params = JSON.stringify(data)
  }

  var req_data = util.getRequestData(json_data);

  wx.showLoading({
    title: "上传中...",
    mask: true
  })


  return new Promise(function (resolve, reject) {
    wx.uploadFile({
      url: api_url,
      filePath: filePath,
      name: 'file',
      formData: req_data,
      success(res) {
        wx.hideLoading();
        if (res.statusCode == 200) {
          var json_d = JSON.parse(res.data);
          if (json_d.code == 20003) {
            console.log('登录会话失效，重新登录');
            ajax.autoLogin().then(res => {
              if (res.code == 10000) {
                upload(url, filePath, data).then(res => {
                  resolve(res);
                })
              } else {
                resolve(res);
              }

            }
            )
          } else if (res.data.code == 20008) {
            console.log('需要进行微信授权');
            wx.navigateTo({
              url: '/pages/empower/index',
            })
          }else {
            resolve(json_d);
          }
        } else {
          reject(res.data);
        }
      },
      fail(err) {
        wx.hideLoading();
        console.log(err);
        wx.showToast({ title: '网络请求异常,请稍后再试', icon: 'none', duration: 2000, mask: true });
        reject('网络出错');
      }
    })
  })

}

module.exports = {
  upload: upload,
}
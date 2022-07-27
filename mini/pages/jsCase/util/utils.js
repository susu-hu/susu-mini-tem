const app_secret = "W4FuYOK4ggFDleCSGdHfi7xncOCNaj";//接口请求秘钥

//  js 时间戳转日期格式 --- zwj
function formatDate(timestamp) {
  var date = new Date(timestamp);
  var YY = date.getFullYear() + '-';
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  // var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  // var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  // var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return YY + MM + DD;
}
/*
*获取当前时间
*
*/

function getNowTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) {
    month = '0' + month;
  };

  if (day < 10) {
    day = '0' + day;
  };


  //  如果需要时分秒，就放开
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  var formatDate = year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s;
  return formatDate;
}

/*
*获取接口请求数据
*/
function getRequestData(data) {
  var jsonstr = objKeySort(data);
  return jsonstr;
}

//排序的函数
function objKeySort(arys) {
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newkey = Object.keys(arys).sort();
  var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
  var str = '';
  for (var i = 0; i < newkey.length; i++) {
    //遍历newkey数组
    newObj[newkey[i]] = arys[newkey[i]];
    //向新创建的对象中按照排好的顺序依次增加键值对

    if (typeof arys[newkey[i]] === "object") {
      str += newkey[i] + JSON.stringify(arys[newkey[i]])
    } else {
      str += newkey[i] + arys[newkey[i]]
    }

  }

  newObj['sign'] = sha1(app_secret + str + app_secret);

  return newObj; //返回排好序的新对象
}



function encodeUTF8(s) {
  var i, r = [], c, x;
  for (i = 0; i < s.length; i++)
    if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
    else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
    else {
      if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
        c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
          r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
      else r.push(0xE0 + (c >> 12 & 0xF));
      r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
    };
  return r;
};

// 字符串加密成 hex 字符串
function sha1(s) {
  var data = new Uint8Array(encodeUTF8(s))
  var i, j, t;
  var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
  s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
  for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
  s[l - 1] = data.length << 3;
  var w = [], f = [
    function () { return m[1] & m[2] | ~m[1] & m[3]; },
    function () { return m[1] ^ m[2] ^ m[3]; },
    function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
    function () { return m[1] ^ m[2] ^ m[3]; }
  ], rol = function (n, c) { return n << c | n >>> (32 - c); },
    k = [1518500249, 1859775393, -1894007588, -899497514],
    m = [1732584193, -271733879, null, null, -1009589776];
  m[2] = ~m[0], m[3] = ~m[1];
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0);
    for (j = 0; j < 80; j++)
      w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
        t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
        m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
    for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
  };
  t = new DataView(new Uint32Array(m).buffer);
  for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

  var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
    return (e < 16 ? "0" : "") + e.toString(16);
  }).join("");

  return hex;
};

//微信版本比较
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

//字符串分割为数组
function explode(inputstring, separators, includeEmpties) {
  inputstring = new String(inputstring);
  separators = new String(separators);

  if (separators == "undefined") {
    separators = " :;";
  }

  var fixedExplode = new Array(1);
  var currentElement = "";
  var count = 0;

  for (var x = 0; x < inputstring.length; x++) {
    var str = inputstring.charAt(x);
    if (separators.indexOf(str) != -1) {
      if (((includeEmpties <= 0) || (includeEmpties == false)) && (currentElement == "")) {
      }
      else {
        fixedExplode[count] = currentElement;
        count++;
        currentElement = "";
      }
    }
    else {
      currentElement += str;
    }
  }

  if ((!(includeEmpties <= 0) && (includeEmpties != false)) || (currentElement != "")) {
    fixedExplode[count] = currentElement;
  }
  return fixedExplode;
}

function limitFloat(val) {
  let sNum = val.toString(); //先转换成字符串类型
  if (sNum.indexOf('.') == 0) {//第一位就是
    sNum = '0' + sNum
  }
  sNum = sNum.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
  sNum = sNum.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
  sNum = sNum.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  sNum = sNum.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数
  //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
  if (sNum.indexOf(".") < 0 && sNum != "") {
    sNum = parseFloat(sNum);
  }

  return sNum
}

// 自定义工具类
var toolsFn = {
  // 提示信息, 并且支持显示完成后,做一些操作
  toastMsg: function (msg, icon = 'none', duration = 2000, mask = true, callback = null) {
    wx.showToast({
      title: msg,
      icon: icon,
      mask: mask,
      duration: duration,
    });

    // 如果回调方法存在, 则调用回调
    setTimeout(function () {
      callback && callback();
    }, duration)
  },
  // 地址跳转 (会自动判断是否是 tab栏, 如果不是tab 栏链接, 则使用对应方式跳转)
  //  link_url  跳转链接   
  //  type      跳转方式  navigateTo | redirectTo
  jump: function (link_url, type = 'navigateTo') {
    if (link_url) {
      if (link_url.indexOf('https://') != -1) {
        // 如果是外部链接, 则使用一个新页面来承载一下吧
        wx.navigateTo({
          url: '/pages/webview/index?url=' + link_url,
        })
        return false;
      }

      // 如果是 Tab 栏链接, 则使用 switchTab, 否则则使用 对应跳转方式
      // 如果是 tab 栏链接, 因为不允许带 ? 等参数, 所以只能使用 tabUrl[i] 来跳转
      var tabUrl = ['/pages/shop/index', '/pages/index/index', '/pages/welfare/index', '/pages/my/index'];
      for (var i = 0; i < tabUrl.length; i++) {
        if (link_url.indexOf(tabUrl[i]) != -1) {
          wx.switchTab({
            url: tabUrl[i],
          })
          return false;
        }
      }

      // 重定向/跳转方式
      switch (type) {
        // 跳转
        case 'navigateTo':
          wx.navigateTo({
            url: link_url,
          });
          break;
        // 重定向  
        case 'redirectTo':
          wx.redirectTo({
            url: link_url,
          })
          break;
      }
    }
  },
  // 获取当前时间
  getNowTime: function (type = 1) {
    var now = new Date();
    var year = now.getFullYear();
    var month = this.add0(now.getMonth() + 1);
    var day = this.add0(now.getDate());
    var h = this.add0(now.getHours());
    var m = this.add0(now.getMinutes());
    var s = this.add0(now.getSeconds());
    switch (type) {
      // 2020-10-10 12:12:12
      case 1:
        return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s;
      // 2020-10-10  
      case 2:
        return year + '-' + month + '-' + day;
    }
  },
  // 补零
  add0: function (data) {
    return data < 10 ? '0' + data : data;
  },
  //将对象中某个值转换成数组
  formatPickerArray: function (obj, index) {
    let array = [];
    Object.keys(obj).forEach(function (key) {
      if (obj[key][index]) {
        array.push(obj[key][index])
      }
    });
    return array;
  },
  //通过key+value，找到对应对象
  searchObj: function (index, value, obj) {
    let result = {};
    Object.keys(obj).forEach(function (key) {
      if (obj[key][index] === value) {
        result = obj[key];
      }
    });
    return result;
  }
};

//用户设置
function userSetting() {
  return new Promise((resolve, reject) => wx.getSetting({ success: resolve, fail: reject }));
}

//用户授权
function userAuth(scope) {
  return new Promise((resolve, reject) => wx.authorize({ scope: scope, success: resolve, fail: reject }));
}

//用户位置
function userLocation(type, isHighAccuracy) {
  return new Promise((resolve, reject) => wx.getLocation({ type: type, isHighAccuracy: isHighAccuracy, success: resolve, fail: reject }));
}

//获取用户信息
function userProfile(lange = 'zh_CN', desc = '用于完善会员资料') {
  return new Promise((resolve, reject) => wx.getUserProfile({ lang: lange, desc: desc, success: resolve, fail: reject }));
}

//用户选择地址
function userChooseLocation() {
  return new Promise((resolve, reject) => wx.chooseLocation({ success: resolve, fail: reject }));
}

function checkSession() {
  return new Promise((resolve, reject) => wx.checkSession({ success: resolve, fail: reject }));
}

//批量保存文件到相册
function batchSaveFileToLocal(filePath, video = false) {
  return new Promise(function (resolve, reject) {
    for (let n in filePath) {
      let downloadTask = wx.downloadFile({
        url: filePath[n],
        success: function (ret) {
          if (ret.statusCode === 200) {
            if (video) {
              wx.saveVideoToPhotosAlbum({
                filePath: ret.tempFilePath,
                success: function (res) {
                  resolve('success');
                },
                fail: function (err) {

                }
              })
            } else {
              wx.saveImageToPhotosAlbum({
                filePath: ret.tempFilePath,
                success: function (res) {
                  resolve('success');
                },
                fail: function (err) {

                }
              })
            }
          }
        }
      });
      downloadTask.onProgressUpdate((req) => {
        if (req.progress === 100) {
          wx.hideLoading({
            success: (res) => { },
          })

        } else {
          wx.showToast({
            title: '正在保存' + req.progress + '%',
            icon: 'none',
            duration: 1000,
            mask: true,
          })
        }
      });
    }
  })
}

function saveVideo(filePath, listener) {
  listener.onStart && listener.onStart();
  const task = wx.saveVideoToPhotosAlbum({
    filePath: filePath,
    success: function (re) {
      listener.onProgress && task.onProgressUpdate(listener.onProgress)
    },
    fail: function (err) {
      console.log(err);
    }
  })
}

module.exports = {
  sha1: sha1,
  getRequestData: getRequestData,
  getNowTime: getNowTime,
  formatDate: formatDate,
  compareVersion: compareVersion,
  explode: explode,
  limitFloat: limitFloat,
  toolsFn: toolsFn,
  userSetting: userSetting,
  userAuth: userAuth,
  userLocation: userLocation,
  userProfile: userProfile,
  userChooseLocation: userChooseLocation,
  batchSaveFileToLocal: batchSaveFileToLocal
}

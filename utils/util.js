const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


var toolsFn = {
  // 提示信息, 并且支持显示完成后,做一些操作
  toastMsg: function (msg, icon = 'none', duration = 2000, mask = 'true', callback = '') {
    wx.showToast({
      title: msg,
      icon: icon,
      mask: mask,
      duration: duration,
    });

    // 如果回调方法存在, 则调用回调
    callback && callback();
  },
  // 验证手机号码, 验证通过返回 true, 验证不通过 返回 false;
  validatePhone(mobile) {
    if ((/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile))) {
      return true;
    }
    return false;
  },
};

//保存图片到相册
const writePhotosAlbum = (successFun, failFun) => {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.writePhotosAlbum']) {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success: function () {
            successFun && successFun()
          },
          fail: function (res) {
            wx.hideLoading()
            wx.showModal({
              title: '提示',
              content: "微信授权保存图片，是否重新授权？",
              showCancel: true,
              cancelText: "否",
              confirmText: "是",
              success: function (res) {
                if (res.confirm) { //用户点击确定'
                  wx.openSetting({
                    success: (res) => {
                      if (res3.authSetting['scope.writePhotosAlbum']) {
                        //已授权
                        successFun && successFun()
                      } else {
                        failFun && failFun()
                      }
                    }
                  })
                } else {
                  failFun && failFun()
                }
              }
            });
          }
        })
      } else {
        successFun && successFun()
      }
    }
  })
}

function formatTime0(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// function formatNumber(n) {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

function formatTimeTwo(number, format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];
  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

const getWeekByDate = dates => {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = date.getDay();
  return show_day[day];
}



module.exports = {
  formatTime,
  toolsFn: toolsFn,
  formatTimeTwo: formatTimeTwo,
  getWeekByDate: getWeekByDate,
  writePhotosAlbum,
}
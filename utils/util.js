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
  toastMsg: function (msg, icon = 'none', duration = 2000, mask='true', callback = '') {
    wx.showToast({
      title: msg,
      icon: icon,
      mask : mask,
      duration: duration,
    });

    // 如果回调方法存在, 则调用回调
    callback && callback();
  },
  // 验证手机号码, 验证通过返回 true, 验证不通过 返回 false;
  validatePhone(mobile){
    if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile))){ 
      return true;
    }
    return false;
  },
};
module.exports = {
  formatTime,
  toolsFn: toolsFn,
}

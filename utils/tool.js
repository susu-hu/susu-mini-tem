// 提示弹出层
function showToast(title, icon, time) {
  var time = time != "" && time !=undefined ? time : 1500;
  wx.showToast({
    title,
    icon,
    duration: time,
    mask: true
  })
}

module.exports = {
  showToast:showToast,
}
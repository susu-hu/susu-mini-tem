/**
 * 获取当前日期一周内的时间
 * @param {*} data 日期Date
 */
export const getCurrWeekList = (data) => {
  //根据日期获取本周周一~周日的年-月-日
  let weekList = [],
    date = new Date(data);
  //获取当前日期为周一的日期
  date.setDate(date.getDay() == "0" ? date.getDate() - 6 : date.getDate() - date.getDay() + 1);
  // push周一数据
  weekList.push(formateDate(date));
  console.log(weekList)
  //push周二以后日期
  for (var i = 0; i < 6; i++) {
    date.setDate(date.getDate() + 1);
    weekList.push(formateDate(date));
  }
  return weekList;
}
/**
 * 格式化日期
 * @param {*} time 
 */
export const formateDate = (time) => {
  let year = time.getFullYear();
  let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
  let day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  return year + '-' + month + '-' + day;
}
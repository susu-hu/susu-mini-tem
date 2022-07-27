function pingfenxing(pingfen) {
  var _this = this,             // 这里的图片的路径, 自己需要修改
  data = {
    ling: "https://ico.dongtiyan.com/tu-125.png",
    zheng: "https://ico.dongtiyan.com/tu-123.png",
    ban: "https://ico.dongtiyan.com/tu-124.png",
  },
  nums =[];//这里是返回图片排列的顺序的数组, 这里要注意在页面使用的时候图片的路径,不过使用网络图片无所谓if((pingfen/0.2)%2==0){// 如果评分为正数,如4.0, 5.0}
  if((pingfen/0.2) % 2 == 0) {
    for (var i = 0; i < 5; i++) {
      if (i < pingfen) {
        nums.push(data.zheng);
      } else {
        nums.push(data.ling)
      }
    }
  } else { // 评分不为整数, 如3.5, 2.5
    for(var i=0; i<5; i++) {
      if(i<pingfen-0.5) {
        nums.push(data.zheng);        //先把证书分离出来,如: 3.5 这里就是先把3分离出来,把代表1的图片放进去
      } else if(i==(pingfen-0.5)) {
        nums.push(data.ban);        // 把小数的部分分离出来,如: 3.5里的0.5, 把代表0.5的图片放进去
      } else {
        nums.push(data.ling);   //然后剩下的就是没有满的用代表0的图片放进去,如: 3.5, 里面放进去了3个代表1的图片,然后放入了1个代表0.5的图片,最后还剩下一个图片的位置,这时候就放代表0的图片
      }
    }
  }
  return nums;
}
module.exports = {
  pingfen: pingfenxing
}
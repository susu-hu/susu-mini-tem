// pages/jsCase/richImg/index.js
Page({


  data: {
    desc: '<p>哈哈哈</p><img src="https://i.postimg.cc/fyg1vrhS/1.png" style="max-width:100%;width:100%;height:auto!important;display:block"/>',
    img_url: '',
  },

  onLoad: function (options) {
    // 给图片添加样式
    let content = this.data.desc;
    content = content.replace(/\<img/gi, '<img style="max-width:100%;width:100%;height:auto!important;display:block"');
    this.setData({
      desc: content
    })

    // 获取到富文本图片中的img链接
    // 判断含有图片
    if (content.indexOf("src") >= 0) {
      let that = this;
      content.replace(/]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        that.setData({
          img_url: capture
        },() => {
          that.setData({
            desc:content.replace(/<\/?(img)[^>]*>/gi, '')
          })
        })
      })
    }
  },

  rtxt(e) {
    console.log(e)
    // this.createSelectorQuery().selectAll('.rich-text-img').fields({
    //   rect: true
    // }).exec((res) => {
    //   console.log(res)
    // })
    // 使用正则把图片的url进行剖离出来，push进一个数组中，点击富文本组件，运行wx.previewImage方法。
    // 不足之处：
    // 1、点击事件是加在富文本组件rich-text上的，渲染到页面也是一样，并不会把富文本中的dom渲染在页面中；
    // 2、在预览图片时，无法知道用户点击的当前是哪个图片。所以，含有多张图片时，预览始终会从第一张图片开始，可左右滑动。
    const richContent = this.data.desc;
    // 判断含有图片
    if (richContent.indexOf("src") >= 0) {
      const imgs = [];
      richContent.replace(/]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        imgs.push(capture);
      })
      wx.previewImage({
        current: imgs[0], // 当前显示图片的http链接
        urls: imgs
      })
    }
  }

})
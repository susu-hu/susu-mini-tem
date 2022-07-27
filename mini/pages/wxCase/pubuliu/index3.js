let col1H = 0;
let col2H = 0;

Page({

  data: {
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []
  },

  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        this.loadImages();
      }
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;   //图片原始宽度
    let oImgH = e.detail.height;  //图片原始高度
    let imgWidth = this.data.imgWidth; //图片设置的宽度
    let scale = imgWidth / oImgW;  //比例计算
    let imgHeight = oImgH * scale;  //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },

  loadImages: function () {
    let images = [
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/3.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/5.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/6.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/4.png", height: 0 },
      { pic: "https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png", height: 0 },
    ];

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
  }

})
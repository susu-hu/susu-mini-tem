// pages/effects/3dClound/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {

  },



  onShow: function () {
    this.innit()
  },

  innit() {
    var tagEle = [{
        title: '测试1',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0,
        color:"pink"
      },
      {
        title: '测试2',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0,
        color:"#222"
      },
      {
        title: '测试3',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0,
        color:"#234234"
      },
      {
        title: '测试4',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试5',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试6',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试7',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试8',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试9',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试10',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试11',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试12',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试123',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试14',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试15',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试16',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试177',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试188',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试199',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      },
      {
        title: '测试200',
        x: 0,
        y: 0,
        z: 0,
        s: 0,
        o: 1,
        f: 15,
        angleX: 0,
        angleY: 0
      }
    ]
    for (var i = 0; i < tagEle.length; i++) {
      var fallLength = 100 //圆的焦点
      var angleX = Math.PI / 100
      var angleY = Math.PI / 100
      var k = (2 * (i + 1) - 1) / tagEle.length - 1;
      //计算按圆形旋转
      var a = Math.acos(k);
      var b = a * Math.sqrt(tagEle.length * Math.PI);
      //计算元素x，y坐标
      var numx = 120 * Math.sin(a) * Math.cos(b)
      var numy = 120 * Math.sin(a) * Math.sin(b);
      var numz = 220 * Math.cos(a);

      // console.log(numo)
      //计算元素缩放大小
      tagEle[i].x = numx * 2
      tagEle[i].y = numy * 2
      tagEle[i].z = numz
      tagEle[i].s = 250 / (400 - tagEle[i].z)
    }
    //动画
    setInterval(() => {
      for (var i = 0; i < tagEle.length; i++) {
        var a = Math.acos(k);
        var numz = 240 * Math.cos(a);
        tagEle[i].s = 250 / (400 - tagEle[i].z)
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        var y1 = tagEle[i].y * cos - tagEle[i].z * sin;
        var z1 = tagEle[i].z * cos + tagEle[i].y * sin;
        tagEle[i].y = y1;
        tagEle[i].z = z1;

        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        var x1 = tagEle[i].x * cos - tagEle[i].z * sin;
        var z1 = tagEle[i].z * cos + tagEle[i].x * sin;
        tagEle[i].x = x1;
        tagEle[i].z = z1;
        this.setData({
          tagEle: tagEle
        })
      }
    }, 100)
  },

})
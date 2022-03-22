// pages/index/index.js
import util from '../../utils/util';
Page({

  data: {
    aaa: {
      'c': '王五',
      'd': '马六',
      'a': '张三',
      'b': '李四',
    },
    brand: {
      Gold: {
        per: 89.95,
        le: 157128,
        act: 155560,
      },
      Novas: {
        per: 89.95,
        le: 157128,
        act: 155560,
      },
      Prestige: {
        per: 102.3,
        le: 157128,
        act: 155560,
      },
      total: {
        per: 89.95,
        le: 157128,
        act: 155560,
      },
    },
    page_list: [{
        showmore: true,
        name: '主包',
        list: [{
            name: '物流页面+skeleton条',
            url: '/pages/demo/index'
          },
          {
            name: '物流的第二种写法(伪元素after)',
            url: '/pages/demo/index2'
          },
          {
            name: '日历样式一',
            url: '/pages/cal/index'
          },
          {
            name: '日历样式二',
            url: '/pages/cal2/index'
          },
          {
            name: '日历样式三',
            url: '/pages/cal/index2'
          },
          {
            name: '日历样式四',
            url: '/pages/cal2/index2'
          },
          {
            name: 'vant日历多日期选择',
            url: '/pages/vantCalen/index'
          },
          {
            name: '滑动删除',
            url: '/pages/touchMove2/index'
          },
          {
            name: '滑动删除2',
            url: '/pages/touchRemove/index'
          },
          {
            name: '自定义指示点',
            url: '/pages/dots/index'
          },
          {
            name: '自定义指示点2',
            url: '/pages/dots/index2'
          },
          {
            name: 'echarts的折线图',
            url: '/pages/charts/index3'
          },
          {
            name: 'echarts的折线图1',
            url: '/pages/charts/index5'
          },
          {
            name: 'echarts的饼图',
            url: '/pages/charts/index4'
          },
          {
            name: 'echarts的柱形图',
            url: '/pages/charts/index6'
          }
        ]
      },
      {
        showmore: true,
        name: '分包another',
        list: [{
            name: 'scroll-view左右滚动导航条',
            url: '/pages/another/scroll-x/index'
          },
          {
            name: 'swiper3D轮播图',
            url: '/pages/another/swiper-threeD/index'
          },
          {
            name: '圆环进度条一(wx.canvasToTempFilePath)',
            url: '/pages/another/circleRing/index'
          },
          {
            name: '圆环进度条2(接口已废弃)',
            url: '/pages/another/circleRing/index2'
          },
          {
            name: '自定义滚动条样式',
            url: '/pages/another/customScroll/index'
          },
          {
            name: '一个简单的登录页面',
            url: '/pages/another/login/index'
          },
          {
            name: '头部横向滚动的消息提示',
            url: '/pages/another/scrollNews/index'
          },
          {
            name: '图片带有圆弧',
            url: '/pages/another/imgRadius/index'
          },
          {
            name: ' 堆叠式轮播',
            url: '/pages/another/cust-swiper/index'
          },
        ]
      },
      {
        showmore: true,
        name: '分包subPack',
        list: [{
            name: 'loading加载动画17个（1）',
            url: '/pages/subPack/loading/index'
          },
          {
            name: 'loading加载动画15个（2）',
            url: '/pages/subPack/loading/index2'
          },
          {
            name: 'loading加载动画20个（3）',
            url: '/pages/subPack/loading/index3'
          },
          {
            name: 'loading加载动画n个（4）',
            url: '/pages/subPack/loading/index4'
          },
          {
            name: '拟物态',
            url: '/pages/subPack/otherAnimation/index'
          },

          {
            name: '小程序启动页面动画',
            url: '/pages/subPack/loading/loadPage'
          },
          {
            name: 'canvas生成海报',
            url: '/pages/subPack/canvasPoster/index'
          },
          {
            name: 'animation动画，五福合成效果',
            url: '/pages/subPack/animationBox/index'
          },
          {
            name: '日历样式五',
            url: '/pages/subPack/calen/index2'
          },
          {
            name: '日历样式六',
            url: '/pages/subPack/calen/index3'
          },
          {
            name: 'canvas2d圆环进度条(同层渲染)',
            url: '/pages/subPack/canvas2d/index'
          },
          {
            name: '卡片实现翻转',
            url: '/pages/subPack/roateY180/index'
          },
          {
            name: '自定义input输入框',
            url: '/pages/subPack/customIpt/index'
          },
          {
            name: '固定顶部的navTab切换',
            url: '/pages/subPack/navTab/index'
          },
        ]
      },
      {
        showmore: true,
        name: '分包cssCase',
        list: [{
            name: 'css3的圆锥渐变',
            url: '/pages/cssCase/conic-gradient/index'
          },
          {
            name: '仿照手机充电的动画',
            url: '/pages/cssCase/chargeCss/index'
          },
          {
            name: '颜色盘',
            url: '/pages/cssCase/colorChange/index'
          },
          {
            name: '炫酷能量球',
            url: '/pages/cssCase/rotateBall/index'
          },
          {
            name: '螺旋线条',
            url: '/pages/cssCase/line/index'
          },
          {
            name: '警示图标',
            url: '/pages/cssCase/warnIcon/index'
          },
          {
            name: '旋转字符',
            url: '/pages/cssCase/rotateTetx/index'
          },
          {
            name: '翻转字符',
            url: '/pages/cssCase/fanzhuanText/index'
          },
          {
            name: '一个蛋黄派按钮',
            url: '/pages/cssCase/aButton/index'
          },
          {
            name: '可爱的小熊switch开关',
            url: '/pages/cssCase/cuteSwitch/index'
          },
          {
            name: '一个正在输入的动画',
            url: '/pages/cssCase/aWirting/index'
          },
          {
            name: '一个有趣的404页面',
            url: '/pages/cssCase/404Page/index'
          },
          {
            name: '渐变字体',
            url: '/pages/cssCase/shadingText/index'
          },
          {
            name: '一个左右摇晃的灯泡',
            url: '/pages/cssCase/dengpao/index'
          },
          {
            name: '0.5rpx的线',
            url: '/pages/cssCase/lineHalf/index'
          },
          {
            name: 'input密码框,*号显示',
            url: '/pages/cssCase/inputPass/index'
          },
          {
            name: '折叠文字动画',
            url: '/pages/cssCase/loadText/index'
          },
          {
            name: '半圆的卡片,底部色值需固定',
            url: '/pages/cssCase/card/index'
          },
          {
            name: '半圆的卡片,底部设置动态',
            url: '/pages/cssCase/cardTrans/index'
          },
          {
            name: '半圆弧头部背景',
            url: '/pages/cssCase/circleHead/index'
          },
          {
            name: '步骤条不定长度',
            url: '/pages/cssCase/stepsAnt/index'
          },
          {
            name: '流星雨来啦',
            url: '/pages/cssCase/meteor/index'
          },
          {
            name: '位于底部的提示文字',
            url: '/pages/cssCase/bottomText/index'
          },
          {
            name: '跳动的方块',
            url: '/pages/cssCase/cubeRun/index'
          },
          {
            name: '落日',
            url: '/pages/cssCase/sunset/index'
          }, {
            name: '雪花飘落01',
            url: '/pages/cssCase/snow/index'
          },
          {
            name: '图标飘落',
            url: '/pages/cssCase/iconFall/index'
          },
          {
            name: '冰墩墩',
            url: '/pages/cssCase/bdd/index'
          },
          {
            name: '雪容融',
            url: '/pages/cssCase/xrr/index'
          },
          {
            name: '媒体查询',
            url: '/pages/cssCase/mediaScreen/index'
          },
          {
            name: 'Grid布局',
            url: '/pages/cssCase/gird/index'
          },
          {
            name: '进度条',
            url: '/pages/cssCase/progress/index'
          },
          {
            name: '自定义tabbar',
            url: '/pages/cssCase/cusCircleTab/index'
          },
        ]
      },
      {
        showmore: true,
        name: '分包wxCase',
        list: [{
            name: '裁剪图片',
            url: '/pages/wxCase/cutImage/index'
          },
          {
            name: '老虎机',
            url: '/pages/wxCase/laohuji/index'
          },
          {
            name: '小程序的navigator标签',
            url: '/pages/wxCase/navigator/index'
          },
          {
            name: '一个弹出框动画',
            url: '/pages/wxCase/popCustom/index'
          },
          {
            name: 'checkbox自定义样式',
            url: '/pages/wxCase/checkbox/index'
          },
          {
            name: '单选框+textarea(scroll-into-view)',
            url: '/pages/wxCase/radioBox/index'
          },
          {
            name: '瀑布流1',
            url: '/pages/wxCase/pubuliu/index'
          },
          {
            name: '瀑布流2',
            url: '/pages/wxCase/pubuliu2/index'
          },
          {
            name: '瀑布流3',
            url: '/pages/wxCase/pubuliu3/index'
          },
          {
            name: '网易云音乐播放',
            url: '/pages/wxCase/wclound/index'
          },
          {
            name: '导航栏自定义',
            url: '/pages/wxCase/costomNav/index'
          },
          {
            name: '一个商城首页（普通版）',
            url: '/pages/wxCase/shopIndex/index'
          },
          {
            name: '背景图片在一屏内且满屏',
            url: '/pages/wxCase/bgImg/index'
          },
          {
            name: '实现进度条的多种方式',
            url: '/pages/wxCase/circleBar/index'
          },
          {
            name: '自定义actionSheet面板(单图片下载）',
            url: '/pages/wxCase/customSheet/index'
          },
          {
            name: '保存多张图片（下载图片)',
            url: '/pages/wxCase/downFile/index'
          },
          {
            name: '保存文件与上传文件等',
            url: '/pages/wxCase/fileDown/index'
          },
          {
            name: '文字的展开与收起)',
            url: '/pages/wxCase/exlipText/index'
          },
          {
            name: '一定长度文字的展开与收起',
            url: '/pages/wxCase/exlipTwo/index2'
          },
          {
            name: '边框圆角渐变色',
            url: '/pages/wxCase/buttonGr/index'
          },
          {
            name: '上下循环滚动的弹幕条',
            url: '/pages/wxCase/swiper_ve/index'
          },
          {
            name: '文字右下角的展开按钮',
            url: '/pages/wxCase/showEli/index'
          },
          {
            name: 'swiper商品滑动区域',
            url: '/pages/wxCase/swiper_goods/index'
          },
          {
            name: '高频出现的各类奇形怪状按钮',
            url: '/pages/wxCase/rects/index'
          },
          {
            name: '不定长消息滚动条swiper',
            url: '/pages/wxCase/newsSwiper/index'
          },
          {
            name: '不定长消息滚动条swiper,高度随着变化',
            url: '/pages/wxCase/newsSwiper/index2'
          },
          {
            name: 'text标签换行，空格相关',
            url: '/pages/wxCase/text/index'
          },
          {
            name: '操作按钮的显示与隐藏',
            url: '/pages/wxCase/showAction/index'
          },
          {
            name: '引入外部字体',
            url: '/pages/wxCase/exFont/index'
          },
          {
            name: '80%高度的弹框',
            url: '/pages/wxCase/popCust/index'
          },
          {
            name: '不同状态不同颜色',
            url: '/pages/wxCase/statusList/index'
          },
          {
            name: 'vant上传文件',
            url: '/pages/wxCase/vanUpload/index'
          },
          {
            name: '自定义组件的slot用法',
            url: '/pages/wxCase/slot/index'
          },
          {
            name: '一个加载条',
            url: '/pages/wxCase/loadingBar/index'
          },
          {
            name: 'webview',
            url: '/pages/wxCase/webview/index'
          },
          {
            name: 'scroll-view实现滚动卡片',
            url: '/pages/wxCase/scrollCard/index'
          },
          {
            name: 'scrollIntoView的实现',
            url: '/pages/wxCase/scrollIntoView/index'
          },
        ]
      },
      {
        showmore: true,
        name: '分包jsCase',
        list: [{
            name: '搜索历史',
            url: '/pages/jsCase/historySearch/index'
          },
          {
            name: '关键字高亮',
            url: '/pages/jsCase/keyWordHight/index2'
          },
          {
            name: '点击实现震动',
            url: '/pages/jsCase/shaing/index'
          },
          {
            name: '打卡样式一',
            url: '/pages/jsCase/clock/index'
          },
          {
            name: '打卡样式二',
            url: '/pages/jsCase/clockIn/index'
          },
          {
            name: '打卡样式三（加入日期）',
            url: '/pages/jsCase/checkIn/index'
          },
          {
            name: '图片大小自适应',
            url: '/pages/jsCase/imgLoad/index'
          },
          {
            name: '抽奖活动1.0',
            url: '/pages/jsCase/draw/index'
          },
          {
            name: '抽奖活动2.0',
            url: '/pages/jsCase/draw2/index'
          },
          {
            name: '抽奖活动3.0',
            url: '/pages/jsCase/draw3/index'
          },
          {
            name: '抽奖',
            url: '/pages/jsCase/draw4/index'
          },
          {
            name: 'page-container',
            url: '/pages/jsCase/pageCon/index'
          },
          {
            name: '自定义日历组件01',
            url: '/pages/jsCase/cal/index'
          },
          {
            name: '自定义日历组件02',
            url: '/pages/jsCase/cal2/index'
          },
          {
            name: 'wx.onLocationChange()持续定位',
            url: '/pages/jsCase/onLoaction/index'
          },
          {
            name: '自定义多日期选择03',
            url: '/pages/jsCase/dateSel/index'
          },
          {
            name: '关于富文本中的图片预览等问题',
            url: '/pages/jsCase/richImg/index'
          },
          {
            name: '手动添加选项，可新增可删除',
            url: '/pages/jsCase/addNew/index'
          },
          {
            name: 'scroll-view实现左右两列列表',
            url: '/pages/jsCase/scList/index'
          },
          {
            name: '数组中某项数量的增加与减少',
            url: '/pages/jsCase/plusAredu/index'
          },
          {
            name: '试卷列表（单选+多选+时间倒计时)',
            url: '/pages/jsCase/papers/index'
          },
          {
            name: '多列选择器，时间+日期',
            url: '/pages/jsCase/multiTime/index4'
          },
          {
            name: '点击按钮有音频效果',
            url: '/pages/jsCase/btnAudio/index'
          },
          {
            name: '固定头部筛选项',
            url: '/pages/jsCase/fixChose/index'
          },
          {
            name: '控制台打印图片',
            url: '/pages/jsCase/consoleLog/index'
          },
          {
            name: '页面跳转及卸载事件',
            url: '/pages/jsCase/pageDestory/index'
          },
          {
            name: '图片懒加载（待更新.....',
            url: '/pages/jsCase/lazyLoad/index'
          },
        ]
      },
      {
        showmore: true,
        name: '分包effects',
        list: [{
            name: '六角灯笼',
            url: '/pages/effects/denglong/index'
          },
          {
            name: '圆角灯笼',
            url: '/pages/effects/cdenglong/index'
          },
          {
            name: '红包雨',
            url: '/pages/effects/redRain/index'
          },
          {
            name: '仿微信拆红包',
            url: '/pages/effects/clipRed/index'
          },
          {
            name: '数组标签自定义颜色',
            url: '/pages/effects/labelColor/index'
          },
          {
            name: '播放背景音乐',
            url: '/pages/effects/audioCust/index'
          },
          {
            name: '雪花飘落2.0',
            url: '/pages/effects/snows/index'
          }, {
            name: '雪花飘落canvas（太卡，不建议）',
            url: '/pages/effects/snow2/index'
          }, {

            name: '弹出的菜单',
            url: '/pages/effects/popMenu/index2'
          },
          {
            name: '弹出的菜单2',
            url: '/pages/effects/popMenu2/index'
          },
          {
            name: '生成头像',
            url: '/pages/effects/avatar/index'
          },
          {
            name: '3d云',
            url: '/pages/effects/3dClound/index'
          }, {
            name: '刮刮乐',
            url: '/pages/effects/guaguale/index'
          }, {
            name: '大转盘抽奖',
            url: '/pages/effects/roatePan/index'
          },
          {
            name: '福字',
            url: '/pages/effects/fu/index'
          },
          {
            name: '在小程序中使用mixins',
            url: '/pages/effects/mixins/index'
          },
        ]
      },
      {
        showmore: true,
        name: '分包api Demos',
        list: [
          // {
          //   name: '水平仪',
          //   url: '/pages/apiDemo/accelerometer/index'
          // },
          // {
          //   name: '摇一摇',
          //   url: '/pages/apiDemo/shad/index'
          // },
          // {
          //   name: '图片添加边框',
          //   url: '/pages/apiDemo/canvastoImg/index'
          // },
          {
            name: 'canvas图形验证码',
            url: '/pages/apiDemo/moveCert/index5'
          },
        ]
      },
      {
        showmore: true,
        name: '分包实用页面',
        list: [{
            name: '列表页',
            url: '/pages/actualPage/list/index'
          },
          {
            name: '按钮可拖拽',
            url: '/pages/actualPage/drag/index'
          },
          {
            name: '一键返回顶部',
            url: '/pages/actualPage/oneTop/index'
          },
          {
            name: '状态步骤条',
            url: '/pages/actualPage/steps/index'
          },
          {
            name: '进度条百分比',
            url: '/pages/actualPage/percent/index'
          },
          {
            name: '上滑关闭,下拉加载',
            url: '/pages/actualPage/scrollGap/index'
          },
          {
            name: '上下滑动scroll-view',
            url: '/pages/actualPage/konw/index'
          },
          {
            name: '一个切换图片的ui交互',
            url: '/pages/actualPage/switchIndex/index'
          },
        ]
      }
    ],
    bb_list: {
      brand: {
        Gold: {
          act: 155560,
          le: 455,
          per: 12.95,

        },
        Novas: {
          per: 44.95,
          le: 234,
          act: 155560,
        },
        Prestige: {
          per: 102.3,
          le: 1,
          act: 223423,
        },
        total: {
          per: 89.95,
          le: 157128,
          act: 155560,
        },
      },
      channel: {
        '2B': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'EC': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'FrisoGo': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        '2B': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'LKA': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'NKA': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'Other': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'RKA': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'Total': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
      },
      Zone: {
        'West Zone': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'South Zone': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'FrisoGo': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'Go wide': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'ROC': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'North Zone': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'NKA NON Field': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'Go Far': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'EC': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'East Zone': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
        'Total': {
          act: 155560,
          le: 455,
          per: 12.95,
        },
      }
    }

  },

  toDetail(e) {
    let {
      url
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },

  onLoad: function (options) {},
  onPullDownRefresh() {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {
    // console.log(this.getSeconds(61.24))
  },
  showTip() {
    util.toolsFn.toastMsg('苏苏就是小苏苏呀！！！喜欢的点个关注啊~创作不易，star一下~')
  },


  onShow: function () {
    wx.showNavigationBarLoading()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 1000)
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

  },
  showMore(e) {
    let {
      index
    } = e.currentTarget.dataset, {
      page_list
    } = this.data;
    page_list[index].showmore = !page_list[index].showmore
    this.setData({
      page_list: page_list
    })
  },

  tap: function (res) {
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 90;
    this.setData({
      left: x,
      top: y,
      anim: "ripple 0.4s linear"
    });
    setTimeout(() => {
      this.setData({
        left: '',
        top: '',
        anim: ""
      })
    }, 400)
  },
  getSeconds(s) {
    var sTime = parseInt(s); // 秒
    var mTime = 0; // 分
    var hTime = 0; // 时
    if (sTime > 60) { //如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      mTime = parseInt(sTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      sTime = parseInt(sTime % 60);
      //如果分钟大于60，将分钟转换成小时
      if (mTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hTime = parseInt(mTime / 60);
        //获取小时后取佘的分，获取分钟除以60取佘的分
        mTime = parseInt(mTime % 60);
      }
    }
    var result = '';
    if (sTime >= 0 && sTime < 10) {
      result = "0" + parseInt(sTime) + "";
    } else {
      result = "" + parseInt(sTime) + "";
    }
    if (mTime >= 0 && mTime < 10) {
      result = "0" + parseInt(mTime) + ":" + result;
    } else {
      result = "" + parseInt(mTime) + ":" + result;
    }
    if (hTime >= 0 && hTime < 10) {
      result = "0" + parseInt(hTime) + ":" + result;
    } else {
      result = "" + parseInt(hTime) + ":" + result;
    }
    return result;
  },


})
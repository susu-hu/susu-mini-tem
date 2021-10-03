# 微信小程序实现购物车+日历等页面

#### 介绍
微信小程序实现日历，可进行月份切换
微信小程序实现物流页面
自定义轮播图指示点页面
购物车页面+左滑删除
movable-area组件实现滑动删除
卡券实现半圆状态
自定义弹框 禁止底层滑动

#### 软件架构
软件架构说明


#### 安装教程

1.  微信开发者工具打开(2021.8.15 新增页面导航，首页为所有页面导航）
2.  cal：为日历页面
3.  demo/index：为物流页面,在页面完全渲染之前，通过一些灰色的区块大致勾勒出轮廓，待数据加载完成后，再替换成真实的内容。通常在小程序中，我们需要手工维护骨架屏的代码。
    demo/index2:新增伪元素写法。
4.  dots：为自定义轮播图指示点页面
5.  touchRemove： 购物车页面+左滑删除
6.  touchMove2： 滑动删除2  movable-area组件
7.  cardCircle： 卡券实现半圆状态
8.  pop： 自定义弹框 禁止底层滑动（catchtouchmove+scroll-view)
9.  pie: echarts的饼图和折线图(wxcharts.js)
10. charts/index: echarts官方推荐小程序使用的ec-canvas组件和echarts.js
11. index: 自定义tabbar组件，cover-view进行覆盖
12. getStar:星星评分 1-5颗星 分别对应'极好','较好','一般','较差','很差'，点星星字段产生变化  点字段星星变化
13. sendCode/index: 自定义input输入框的样式 （粘贴的时候无法实现长按粘贴 待完善的bug）
14. sendCode/index2:自定义弹框验证码组件（v-code)+新增背景图虚化(filter: blur(10rpx);)+新增三角形 箭头 矩形 梯形 圆弧等样式
15. addImg: 上传多张图片 wx.chooseImage()+预览图片wx.previewImage()+上传文件到服务器 wx.uploadFile()
16. choseList: 筛选页（1.小程序自带日期选择2.tab切换 3.右边弹框筛选，超出4条数据默认隐藏，可点击展开）
17. charts/index: 自定义导航 "navigationStyle": "custom" 获取胶囊和导航栏等高度，自定义图标等
18. scroll: scroll-view填充剩余高度 ，滚动条滑动选中相应分类，点击分类实现锚点定位。
19. index2: 自定义导航栏+swiper+ 新增消息滚动弹框+左滑的tablist
20. charts/index2: echarts实现饼图，canvas为原生组件，层级很高，用cover-view实现覆盖，可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher。新增修改，头部用cover-view实现fixed的tab栏 。多个cover-view的层级关系，写在页面越后面层级越高！（存在tooltip被底部字体遮挡的bug 待解决）
21. another/choseGoods:数值计算，引入math.min.js处理精度问题。
22. choseAddress:地址选择，wx.chooseLocation(需要用户授权）+wx.chooseAddress（无须用户授权，直接调用该接口）
23. scroll/index3:商品详情页，头部导航栏为自定义的tab(fixed)+双向锚点（scroll-view实现点击tab选中对应的区域，页面滚动头部tab被选中)，新增富文本样式修改，正则表达式进行匹配。（情况一：富文本不带style，此时可以正则添加style，class。或者在rich-text或父元素标签来定义样式！情况二：富文本带style，正则添加class才行）
24. another/mrovevideos:视频页面，自定义播放与暂停的按钮与事件
25. another/swiper-threeD新增swiper+transform: scale(1)实现3D轮播效果，animation实现动画效果，360度翻转，来回滚动等效果
26. subPack/animationBox 新增wx.createAnimation+css3：transform的rotate+translate形成一个五福合成的效果。
27. another/circleRing/index 新增canvas（接口wx.createCanvasContext）绘制圆环的组件，层级很高，cover-view能力有限，采用wx.canvasToTempFilePath转换成图片，展示图片，避免穿透的发生，（该接口已被废弃，canvas2d支持同层渲染）
28. subPack/canvas2d/index 新增canvas2d 绘制圆环进度条组件，同层渲染，canvas层级不会发生穿透现象（原接口wx.createCanvasContext已被废弃）
29. another/scroll-x 新增scroll-view+swiper实现左右滚动导航条。
30. subpack/loading/index 新增17个loading动画，可以根据这些样式进行其他的变化，animation实现。
31. subpack/loading/indedx2 新增15个炫酷的loading动画。
32. 分包csscase/conic-gradient/index 新增css的圆锥渐变，实现圆弧进度条，颜色盘，饼图等样式。
33. csscase/colorChange,颜色盘，暂更新2种色盘，后续更新渐变色。
34. subpack/loading/indedx3,新增18个炫酷的loading动画。
35. 学习案例：炫酷能量球+螺旋线条
36. css写警示按钮+蓝云+小花
37. 实现搜索历史记录，localStorage存储前15条，选择的最新一条放置数组的第一条。
38. 实现navigator及其相关属性，hover-class+页面跳转接口的区别。
39. 一个蛋黄派样式的可爱的switch按钮，(input+label+伪元素实现）
40. 旋转字符+翻转字符
41. 一个正在输入文字的动画
#### 效果截图
![输入图片说明](https://images.gitee.com/uploads/images/2021/0815/033934_0a4d1de7_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/014902_58a0114f_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0611/134711_a94e772a_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0708/160232_d0a6c802_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0706/094522_d9f4edd2_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0706/133743_364a7e9e_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0622/172244_6fb1820e_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0622/202320_1f0fc980_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0624/011304_db1c1301_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0624/135040_dd3e47de_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0628/024530_4aac3d1a_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0628/172928_2a09dda9_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0630/234347_ab08d7ff_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0701/215113_594682a5_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0702/180223_9717aca8_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0704/174532_8f716965_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0705/003442_3bf4c90a_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0801/234214_094d9427_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0705/195514_8d93c7a2_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0708/144350_35f1473c_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0710/203648_bc744c24_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0731/234212_daa602ea_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0725/001154_b595fe93_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/011703_a6b02f93_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/144805_f583bdb8_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/170500_2159196e_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0808/002806_73c8f2be_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0805/120304_81f75c5f_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0808/183102_ea59811f_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0812/004542_f323df58_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0815/031157_b0c5c5ad_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0818/113837_8bea02e5_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0818/114200_b39c99c4_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0820/000229_2699901d_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0826/160929_902bf951_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0828/205748_8abc177e_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/175550_c342295a_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0909/225355_0bc7e7f1_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0911/210337_3310def0_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0912/003809_22dcf91f_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0913/234228_a80b5232_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0922/235247_bec409fb_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0929/000500_d469a29b_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0929/144514_f98d9dfa_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1001/151042_487fb12e_8576727.gif "GIF.gif")![输入图片说明](https://images.gitee.com/uploads/images/2021/1001/180950_1bf761fc_8576727.gif "GIF.gif")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1002/021439_fac24b28_8576727.gif "GIF.gif")
#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

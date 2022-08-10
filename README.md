# 微信小程序模板页面合集
![输入图片说明](https://img.shields.io/badge/%E8%87%AA%E5%AE%9A%E4%B9%89tabbar----yellowgreen)
![输入图片说明](https://img.shields.io/badge/UI%E7%BB%84%E4%BB%B6----yellowgreen)
![输入图片说明](https://img.shields.io/badge/%20%20%E5%8E%9F%E7%94%9F----blue)
![输入图片说明](https://img.shields.io/badge/vant----green)
![输入图片说明](https://img.shields.io/badge/%E7%BB%84%E4%BB%B6%E5%8C%96----red)
![输入图片说明](https://img.shields.io/badge/%E6%8A%BD%E5%A5%96%E7%BB%84%E4%BB%B6----orange)
![输入图片说明](https://img.shields.io/badge/%E6%97%A5%E5%8E%86%E7%BB%84%E4%BB%B6----orange)
![输入图片说明](https://gitee.com/susuhhhhhh/wxmini_demo/badge/star.svg)
![输入图片说明](https://gitee.com/susuhhhhhh/wxmini_demo/badge/fork.svg)

![](https://s3.bmp.ovh/imgs/2022/07/27/85dabf1d5821a98b.png)
#### 介绍
微信小程序封装组件，覆盖常用需求：包括轮播组件（堆叠式轮播等）、canvas（圆环、生海报、裁图片等）、map、echarts、css3动画，scroll-view、步骤条、日历组件、自定义tabbar+导航栏、loading加载动画、css渐变、雪碧图、瀑布流、关键词高亮、搜索历史、图片懒加载、节流防抖、索引选择（如城市）、微信拆红包、红包雨、菜单弹出动画、3d云、按钮拖拽、营销组件（九宫格等）等！（ **_无其他ui组件库----vant引入只为做测试_** ）
##### 注意：所使用到的图片素材均为学习交流使用, 请勿将其用于商业用途, 由此产生的任何法律纠纷概不负责。

### 伙伴们，这是一个小程序组件合集，涵盖了常见的一些需求，该版本是开源版，后续我将重新对此版本改版，并加上一些新的需求，作为一个ui组件库出现，针对微信小程序和uniapp！

### 开源不易，您如果觉得项目不错的话可以给项目一个 Star 嘛，也是对我一直更新代码的一种鼓励啦，谢谢各位的支持。
2022！新年快乐🎉 艾瑞巴蒂！

#### 功能总结

1.  首页为所有页面导航(2021.8.15 新增页面导航）
2.  cal：为日历页面
3.  demo/index：物流页面,页面完全渲染前，展示骨架屏（需要手工维护），待数据加载完成后，替换为真实的内容、demo/index2:新增伪元素写法。
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
42. 一个有趣的404页面
43. -webkiit-background-clip:text实现一个渐变色的文字
44. scroll-view包裹一个单选弹框和textarea，textarea给定id值，与scroll-into-view绑定，实现页面定位到文本输入框。
45. 多选框checkbox实现多选
46. 一个带半圆的卡片
47. 自定义导航栏（精准定位）
48. 商城首页普通版（自定义导航栏）
49. vant日历多日期选择（安装vant step1：npm init step2：npm i @vant/weapp -S --production step3：将 app.json 中的 "style": "v2" 去除 step4：使用npm模块 
step5：构建npm）
50. 背景图片在一屏之内
51.自定义actionSheet+保存图片（开启授权-》引导用户打开设置页）,需在调式下运行。
52.  一个左右摇摆的灯泡动画
53. 文字的展开与收起
54. 一定高度的文字展开与收起
55. 卡片翻转的效果
56. 实现打卡（卡片翻转效果）
57. 自定义input输入框
58. 自定义日历组件，可设置不同的主题色
59. 上下循环滚动的swiper弹幕条
60. 文字右下角的展开按钮
61. 抽奖活动
62. 圆角边框渐变色
63. 自定义多日期选择组件，可设置不同主题色
64. swiper实现商品轮播
65. css实现常见的一些特殊的形状，谷歌导航栏等等
66. 0.5rpx的线
67. swiper不定长展示数据
68. text标签空格，换行，转换等等
69. input密码的显示与隐藏
70. 背景图片
71. 多选框按钮的显示与隐藏
72. 手动添加列表
73. 折叠文字动画
74. scroll-view铺满剩余高度，左右两列
75. 数组中某项数量的增加与减少，金额的计算
76. 设置上一个data值并返回上一页
77. 纯css实现六角灯笼
78. css实现卡券背景透明，随着内容自动撑开元素大小
79. 多列选择器实现时间和日期的选择
80. css实现圆角灯笼
81. 新增n个loading动画
82. 弹框高度不定长，一屏长度的80%
83. 实现圆弧的两种方式
84. 步骤条不定长高度+气泡框
85. css实现流星雨效果
86. flex布局实现位于页面底部的提示文字
87. 跳动的方块
88. 数组每一项展示随机颜色
89. 按钮点击水波纹效果+录音圆环扩散效果
90. css实现落日效果
91. 小程序的animation实现雪花飘落的效果
92. 固定tab切换栏
93. 多图片下载
94. 弹出的菜单
95. css实现一个弹出的菜单
96. vant上传图片
97. swiper展示数量的不同，swiper高度随之变化
98. 横向消息滚动条
99. css实现一个笑脸
100. border-radius实现一个图片带弧度
101. 折线图，柱形图等echarts图表
102. 引入外部icon，阿里巴巴矢量图标
103. 一个可以拖拽的按钮
104. 一键返回顶部
105. canvas实现图片文字验证码
106. 一个福字
107. 一个弹出框动画
108. 一个等级进度条
109. 百分比进度条
110. 文件的上传下载与预览
111. 头部固定筛选不定高度
112. 纯css实现一个冰墩墩
113. css实现一个雪容融
115. 实现关键词高亮
116. 背景高斯模糊
117. 卡片切换效果
118. 小程序中的媒体查询 @media screen
119. 实现堆叠式轮播图
120. 加载进度条
121. 抽奖4.0走马灯效果
122. 小程序实现grid布局
123. 渐变色实现条纹进度条
124. swiper+scroll-view实现不同内容的滑动切换
124. 自定义tabbar样式
125. 瀑布流写法1
126. scroll-view实现滚动卡片
127. scroll-into-view实现页面联动
128. canvas图片裁剪
129. 首页loading加载页
130. loading加载动画（更新ing）
131. 节流+防抖
132. rotateZ实现卡片翻转
133. css渐变实现条纹背景
134. 单选跳跃选择动画
135. 页面监听watch
136. wx.createAnimation实现一个带有transition效果的弹框动画
137. tab切换添加过渡效果
138. 雪碧图+帧动画
139. mask自定义tabbar样式
140. 微信拆红包动画
141. map+腾讯地图sdk，地图拖拽，经纬度到地址转换
142. scroll-view+swiper，切换状态下scroll-left的使用
143. canvas生成海报图片
144. 关闭小房子+按钮退出小程序
145. canvas手写签名
146. 颜色选择器
147. 列表显示动画
148. 城市索引选择
149. 滚动吸顶
150. 数字滚动
151. 一些tab选中样式
152. 上下左右滑动切换（transform）
153. 数据懒加载
154. 营销组件滚动抽奖
155. 共享元素+ page-container实现弹出动画
156. 地址选择组件（支持主题色选择）
157. 多个菜单按钮滑动轮播（数组拆分成几个一组）
158. 引导用户添加-小程序-动画效果
159. 图片九宫格拖拽 
160. 折线面积图-玫瑰图-立体柱状图
161. 横向步骤条
162. 指定时间倒计时
163. 课程表
#### 页面部分截图
##### 页面导航
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%A6%96%E9%A1%B5.png)
##### 日历组件1
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/014902_58a0114f_8576727.png "屏幕截图.png")
##### 日历组件2
![输入图片说明](https://images.gitee.com/uploads/images/2021/0611/134711_a94e772a_8576727.png "屏幕截图.png")
##### 骨架屏+物流步骤条
![输入图片说明](https://images.gitee.com/uploads/images/2021/0708/160232_d0a6c802_8576727.png "屏幕截图.png")
##### 自定义指示点（新增指示点
![输入图片说明](https://images.gitee.com/uploads/images/2021/0706/094522_d9f4edd2_8576727.png "屏幕截图.png")
##### 自定义指示点（修改原样式
![输入图片说明](https://images.gitee.com/uploads/images/2021/0706/133743_364a7e9e_8576727.png "屏幕截图.png")
##### 购物车页面+左滑删除
![输入图片说明](https://images.gitee.com/uploads/images/2021/0622/172244_6fb1820e_8576727.png "屏幕截图.png")
##### 左滑删除（movable-area组件
![输入图片说明](https://images.gitee.com/uploads/images/2021/0622/202320_1f0fc980_8576727.png "屏幕截图.png")
##### 卡券半圆
![输入图片说明](https://images.gitee.com/uploads/images/2021/0624/011304_db1c1301_8576727.png "屏幕截图.png")
##### 弹框+禁止底层滑动
![输入图片说明](https://images.gitee.com/uploads/images/2021/0624/135040_dd3e47de_8576727.png "屏幕截图.png")
##### 饼图+折线图（wxcharts.js
![输入图片说明](https://images.gitee.com/uploads/images/2021/0628/024530_4aac3d1a_8576727.png "屏幕截图.png")
##### 官方ec-canvas组件
![输入图片说明](https://images.gitee.com/uploads/images/2021/0628/172928_2a09dda9_8576727.png "屏幕截图.png")
##### 自定义tabbar
![输入图片说明](https://images.gitee.com/uploads/images/2021/0630/234347_ab08d7ff_8576727.png "屏幕截图.png")
##### 星星评分 
![输入图片说明](https://images.gitee.com/uploads/images/2021/0701/215113_594682a5_8576727.png "屏幕截图.png")
##### 自定义input输入框
![输入图片说明](https://images.gitee.com/uploads/images/2021/0702/180223_9717aca8_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0704/174532_8f716965_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0705/003442_3bf4c90a_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0801/234214_094d9427_8576727.png "屏幕截图.png")
##### 多图上传
![输入图片说明](https://images.gitee.com/uploads/images/2021/0705/195514_8d93c7a2_8576727.png "屏幕截图.png")
##### 侧边弹框筛选，超出4条数据默认隐藏，可点击展开
![输入图片说明](https://images.gitee.com/uploads/images/2021/0708/144350_35f1473c_8576727.png "屏幕截图.png")
##### 自定义导航栏
![输入图片说明](https://images.gitee.com/uploads/images/2021/0710/203648_bc744c24_8576727.png "屏幕截图.png")
##### 锚点定位
![输入图片说明](https://images.gitee.com/uploads/images/2021/0731/234212_daa602ea_8576727.png "屏幕截图.png")
##### swiper消息滚动
![输入图片说明](https://images.gitee.com/uploads/images/2021/0725/001154_b595fe93_8576727.png "屏幕截图.png")
##### echarts饼图+tooltip
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/011703_a6b02f93_8576727.png "屏幕截图.png")
##### 数值计算math.min
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/144805_f583bdb8_8576727.png "屏幕截图.png")
##### 地址选择（chooseLocation
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/170500_2159196e_8576727.png "屏幕截图.png")
##### 双向锚点+富文本（商品详情页
![输入图片说明](https://images.gitee.com/uploads/images/2021/0808/002806_73c8f2be_8576727.png "屏幕截图.png")
##### 气泡框（三角形+矩形+梯形等
![输入图片说明](https://images.gitee.com/uploads/images/2021/0805/120304_81f75c5f_8576727.png "屏幕截图.png")
##### 自定义播放与暂停的按钮与事件
![输入图片说明](https://images.gitee.com/uploads/images/2021/0808/183102_ea59811f_8576727.png "屏幕截图.png")
##### 3d轮播（swiper+scale
![输入图片说明](https://images.gitee.com/uploads/images/2021/0812/004542_f323df58_8576727.png "屏幕截图.png")
##### css3动画（五福合成效果
![输入图片说明](https://images.gitee.com/uploads/images/2021/0815/031157_b0c5c5ad_8576727.png "屏幕截图.png")
##### canvas2d圆环
![输入图片说明](https://images.gitee.com/uploads/images/2021/0818/113837_8bea02e5_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0818/114200_b39c99c4_8576727.png "屏幕截图.png")
##### scroll-view+swiper双向切换
![输入图片说明](https://images.gitee.com/uploads/images/2021/0820/000229_2699901d_8576727.png "屏幕截图.png")
##### 不错的loading动画
![输入图片说明](https://images.gitee.com/uploads/images/2021/0826/160929_902bf951_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0828/205748_8abc177e_8576727.png "屏幕截图.png")
##### 圆锥渐变
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/175550_c342295a_8576727.png "屏幕截图.png")
##### 颜色盘
![输入图片说明](https://images.gitee.com/uploads/images/2021/0909/225355_0bc7e7f1_8576727.png "屏幕截图.png")
##### 炫酷的loading动画
![输入图片说明](https://images.gitee.com/uploads/images/2021/0911/210337_3310def0_8576727.png "屏幕截图.png")
##### 炫酷能量球+螺旋线条（学习案例
![输入图片说明](https://images.gitee.com/uploads/images/2021/0912/003809_22dcf91f_8576727.png "屏幕截图.png")
##### 纯css图标（警示按钮+蓝云+小花
![输入图片说明](https://images.gitee.com/uploads/images/2021/0913/234228_a80b5232_8576727.png "屏幕截图.png")
##### 搜索历史（前15条数据
![输入图片说明](https://images.gitee.com/uploads/images/2021/0922/235247_bec409fb_8576727.png "屏幕截图.png")
##### navigator
![输入图片说明](https://images.gitee.com/uploads/images/2021/0929/000500_d469a29b_8576727.png "屏幕截图.png")
##### 蛋黄派switch(学习案例
![输入图片说明](https://images.gitee.com/uploads/images/2021/0929/144514_f98d9dfa_8576727.png "屏幕截图.png")
##### 一些css3动画
![输入图片说明](https://images.gitee.com/uploads/images/2021/1005/003351_333fc9ca_8576727.gif "2.gif")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1005/003038_32f73c30_8576727.gif "1.gif")
##### 404页面（动画
![输入图片说明](https://images.gitee.com/uploads/images/2021/1005/002616_da70a6d9_8576727.gif "GIF.gif")
##### 文字渐变（background-clip:text
![输入图片说明](https://images.gitee.com/uploads/images/2021/1012/222321_b5bf3e44_8576727.gif "GIF3345.gif")
##### scroll-into-view输入框定位
![输入图片说明](https://images.gitee.com/uploads/images/2021/1015/174057_7cbdc2b7_8576727.gif "radio.gif")
##### checkbox（自定义样式
![输入图片说明](https://images.gitee.com/uploads/images/2021/1017/234406_e90b242a_8576727.gif "导出.gif")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1025/001059_4a1f6a90_8576727.png "屏幕截图.png")
##### 自定义导航栏（精准定位）
![输入图片说明](https://images.gitee.com/uploads/images/2021/1026/221355_86e61315_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1029/180110_5a53c09a_8576727.png "屏幕截图.png")
##### vant日历多日期选择
![输入图片说明](https://images.gitee.com/uploads/images/2021/1102/104516_6f6ed9ce_8576727.png "屏幕截图.png")
##### 背景一屏
![输入图片说明](https://images.gitee.com/uploads/images/2021/1102/175157_e2eedfa3_8576727.png "屏幕截图.png")
##### 图片授权保存
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/123530_a8e55a87_8576727.png "屏幕截图.png")
##### 摇摆的灯泡动画
![输入图片说明](https://images.gitee.com/uploads/images/2021/1109/135245_a1043136_8576727.gif "灯泡.gif")

##### 文字的展开与收起
![输入图片说明](https://images.gitee.com/uploads/images/2021/1110/190031_ece1d834_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1111/193011_b672c847_8576727.png "屏幕截图.png")
##### 卡片翻转动画

![输入图片说明](https://images.gitee.com/uploads/images/2021/1112/011030_44abb6b1_8576727.gif "阿萨德.gif")
##### 打卡（腾讯地图sdk
![输入图片说明](https://images.gitee.com/uploads/images/2021/1114/235332_f44cc0cf_8576727.gif "123123.gif")
##### input自定义样式2
![输入图片说明](https://images.gitee.com/uploads/images/2021/1115/191543_05224ce8_8576727.gif "薯条.gif")
##### 日历组件03+主题色选择
![输入图片说明](https://images.gitee.com/uploads/images/2021/1117/001314_c8cd11c0_8576727.png "屏幕截图.png")
##### 消息飘窗（swiper
![输入图片说明](https://images.gitee.com/uploads/images/2021/1117/204706_2449da10_8576727.gif "弹幕.gif")
##### 文字省略右下角的展开按钮
![输入图片说明](https://images.gitee.com/uploads/images/2021/1118/005140_c4f66bc1_8576727.gif "扎克.gif")
##### 营销组件抽奖
![输入图片说明](https://images.gitee.com/uploads/images/2021/1118/141402_8d2bc909_8576727.gif "抽奖.gif")
##### 圆角边框渐变色
![输入图片说明](https://images.gitee.com/uploads/images/2021/1120/205323_a07eb076_8576727.png "屏幕截图.png")
##### 日历组件04+主题色选择
![输入图片说明](https://images.gitee.com/uploads/images/2021/1122/134217_6561af6b_8576727.png "屏幕截图.png")
##### swiper实现商品轮播
![输入图片说明](https://images.gitee.com/uploads/images/2021/1123/000811_3d250d72_8576727.gif "撒旦发.gif")
##### css高频形状
![输入图片说明](https://images.gitee.com/uploads/images/2021/1123/180409_6ed34605_8576727.png "屏幕截图.png")
##### 0.5rpx的线
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F0.5rpximage.png)
##### swiper不定长展示数据
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/swiper.gif)
##### text标签空格，换行，转换
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/image.png)
##### input密码的显示与隐藏
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%A3%89%E9%BA%BB.gif)
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E4%BD%8E%E5%88%86%E5%B1%80.gif)
##### 多选框按钮的显示与隐藏
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E7%88%B1%E4%BB%95%E8%BE%BE.gif)
##### 手动添加列表
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%88%97%E8%A1%A8.gif)
##### 折叠文字动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%8A%98%E5%8F%A0%E6%96%87%E5%AD%97.gif)
##### 左右两列满屏（滑动选择
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/sc.gif)
##### 金额的计算（reduce
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%80%89%E6%8B%A9.gif)
##### 页面栈(设置上一页数据并返回
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/setData.gif)
##### css实现六角灯笼(学习案例)
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E7%81%AF%E7%AC%BC.gif)
##### 卡券背景透明，随着内容自动撑开元素大小
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%8D%A1%E7%89%87.png)
##### 多列选择器实现时间和日期的选择
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/time.gif)
##### css实现圆角灯笼
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9C%86%E8%A7%92%E7%81%AF%E7%AC%BC.gif)
##### 新增n个loading动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/loading.gif)
##### 一屏长度的80%的弹框
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/pop.png)
##### 实现圆弧的两种方式
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9C%86%E5%BC%A7.png)
##### 气泡框+步骤条不定长高度
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/steps.png)
##### css流星雨
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%B5%81%E6%98%9F%E9%9B%A8.gif)
##### 页面底部的提示文字（flex
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%BA%95%E9%83%A8%E6%96%87%E5%AD%97.png)
##### css3跳动的方块
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/jumpCubd.gif)
##### 列表标签随机颜色
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/labelColor.png)
##### css按钮点击水波纹+录音圆环扩散效果
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%BD%95%E9%9F%B3%E6%8C%89%E9%92%AE.gif)
##### css落日
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/sunset.gif)
##### css3实现雪花飘落
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/snows.gif)
##### 一次多图片下载
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9B%BE%E7%89%87%E4%B8%8B%E8%BD%BD.gif)
##### 实现一个弹出的菜单
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%BC%B9%E5%87%BAmenu.gif)
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E8%8F%9C%E5%8D%95pop.gif)
##### vant文件上传
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/upload.gif)
##### swiper高度与数量同步 
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/swiperHeight.png)
##### 消息走马灯效果
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%A8%AA%E5%90%91%E6%BB%9Awx.gif)
##### css3笑脸 
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/smile.gif)
##### border-radius实现一个图片带弧度
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/br.png)
##### 折线图+柱形图
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/echarts.png)
##### 引入外部icon（阿里巴巴矢量图标
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/iconFont.png)
##### 按钮可拖拽
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/drag.gif)
##### 一键返回顶部
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E4%B8%80%E9%94%AE%E9%A1%B6%E9%83%A8.gif)
##### canvas实现图片文字验证码
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/canvas%E5%9B%BE%E7%89%87%E9%AA%8C%E8%AF%81%E7%A0%81.gif)
##### css-福字
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E7%A6%8F%E5%AD%97.gif)
##### css3弹出框动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%BC%B9%E5%87%BA.gif)
##### 等级进度条
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/steps-mi.gif)
##### 百分比进度条
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E7%99%BE%E5%88%86%E6%AF%94%E8%BF%9B%E5%BA%A6.gif)
##### 文件的上传下载与预览
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/filedown.png)
##### 头部固定筛选不定高度
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%A4%B4%E9%83%A8%E7%AD%9B%E9%80%89.gif)
##### css-冰墩墩
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/bdd.png)
##### css-雪容融
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/xrr.png)
##### 关键词高亮
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%85%B3%E9%94%AE%E8%AF%8D%E9%AB%98%E4%BA%AE.gif)
##### css-高斯模糊
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A.png)
##### 手势滑动切换卡片组件（学习案例
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%8D%A1%E7%89%87.gif)
##### 媒体查询
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2.png)
##### 堆叠式轮播
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/dts.gif)
##### 加载进度条
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%8A%A0%E8%BD%BD%E8%BF%9B%E5%BA%A6%E6%9D%A1.gif)
##### 营销组件（抽奖走马灯
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%8A%BD%E5%A5%964gif.gif)
##### css-grid布局（display:grid
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/grid%E5%B8%83%E5%B1%80.png)
##### css-渐变色实现条纹进度条
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%9D%A1%E7%BA%B9%E8%BF%9B%E5%BA%A6.gif)
##### 自定义tabbar样式
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/cust-tabbar.png)
##### 瀑布流写法1
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E7%80%91%E5%B8%83%E6%B5%81.gif)
##### scroll-view实现滚动卡片
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/scard.gif)
##### scroll-into-view实现页面联动
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/scrollintoview.gif)
##### 图片裁剪
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/suUI/%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA.gif)
##### 首页loading加载页
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/index-lo.gif)
##### loading动画ing(++)
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/loainging.png)
##### 节流防抖
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E8%8A%82%E6%B5%81+%E9%98%B2%E6%8A%96.gif)
##### rotateZ实现卡片翻转
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/slide-image.gif)
##### css渐变实现条纹背景
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%9D%A1%E7%BA%B9%E8%83%8C%E6%99%AF.png)
##### 单选跳跃选择动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/radioChange.gif)
##### 页面监听watch
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/c1e03cc20975782fe7d98df56c360ec3d01a0f7f/%E5%B0%8F%E7%A8%8B%E5%BA%8F/watch.gif)
##### 带有transition效果的弹框动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/transition-modal.gif)
##### tab切换过渡效果
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E8%BF%87%E6%B8%A1%E6%80%A7tab%E9%80%89%E6%8B%A9.gif)
#####  雪碧图+帧动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/sprite-steps.gif)
##### mask自定义tabbar样式
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/customTab%E5%88%87%E6%8D%A2.gif)
##### 微信拆红包动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%BE%AE%E4%BF%A1%E6%8B%86%E7%BA%A2%E5%8C%85.gif)
##### 地图拖拽定位
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9C%B0%E5%9B%BE%E6%8B%96%E6%8B%BD.gif)
##### scroll-left切换
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/sleft.gif)
##### canvas生成海报图片
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E7%94%9F%E6%88%90%E6%B5%B7%E6%8A%A5.gif)
##### 关闭小房子+按钮退出小程序
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%80%80%E5%87%BA%E5%B0%8F%E7%A8%8B%E5%BA%8F.gif)
##### canvas手写签名
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/canvas%E7%AD%BE%E5%AD%97.gif)
##### 颜色选择器
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%A2%9C%E8%89%B2%E9%80%89%E6%8B%A91.gif)
##### 列表显示动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/ani-sldown.gif)
##### 城市索引选择
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9F%8E%E5%B8%82%E9%80%89%E6%8B%A9.gif)
##### 滚动吸顶
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%BB%9A%E5%8A%A8%E5%90%B8%E9%A1%B6.gif)
##### 数字滚动
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%95%B0%E5%AD%97%E6%BB%9A%E5%8A%A8.gif)
##### 一些tab选中样式
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/tab.gif)
##### 上下左右滑动切换（transform）
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E4%B8%8A%E4%B8%8B%E5%B7%A6%E5%8F%B3%E6%BB%91%E5%8A%A8%E5%88%87%E6%8D%A2.gif)
##### 数据懒加载
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%87%92%E5%8A%A0%E8%BD%BD.gif)
##### 营销组件滚动抽奖
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/yxzj.gif)
##### 共享元素+ page-container实现弹出动画
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%85%B1%E4%BA%AB%E5%85%83%E7%B4%A0%E5%8A%A8%E7%94%BB.gif)
##### 地址选择组件（主题色）
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9C%B0%E5%9D%80%E9%80%89%E6%8B%A9%E7%BB%84%E4%BB%B6.png)
##### 多个菜单按钮滑动轮播（数组拆分成几个一组）
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%8B%86%E5%88%86%E6%95%B0%E7%BB%84%E8%BD%AE%E6%92%AD.gif)
##### 引导用户添加-小程序-动画效果
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/guideFollow.gif)
##### 图片九宫格拖拽
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9B%BE%E7%89%87%E4%B9%9D%E5%AE%AB%E6%A0%BC%E6%8B%96%E6%8B%BD.gif)
##### 折线面积图-玫瑰图-立体柱状图
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9B%BE%E8%A1%A8echarts.gif)
##### 横向步骤条
![输入图片说明](https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E6%A8%AA%E5%90%91%E6%AD%A5%E9%AA%A4%E6%9D%A1.jpg)
##### 指定时间倒计时
![输入图片说明](mini-picture/%E6%8C%87%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%92%E8%AE%A1%E6%97%B6.gif)
##### 课程表
![输入图片说明](mini-picture/%E8%AF%BE%E7%A8%8B%E8%A1%A8.png)
#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 联系我
##### 公众号：苏苏的bug
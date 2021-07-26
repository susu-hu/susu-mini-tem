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

1.  微信开发者工具打开
2.  cal文件夹为日历页面
3.  demo文件夹为物流页面,在页面完全渲染之前，通过一些灰色的区块大致勾勒出轮廓，待数据加载完成后，再替换成真实的内容。通常在小程序中，我们需要手工维护骨架屏的代码。
4.  dots文件夹为自定义轮播图指示点页面
5.  touchRemove 购物车页面+左滑删除
6.  touchMove 滑动删除2  movable-area组件
7.  cardCircle 卡券实现半圆状态
8.  pop 自定义弹框 禁止底层滑动（catchtouchmove+scroll-view)
9.  echarts的饼图和折线图(wxcharts.js)
10. echarts官方推荐小程序使用的ec-canvas组件和echarts.js
11. 自定义tabbar组件，cover-view进行覆盖
12. 星星评分 1-5颗星 分别对应'极好','较好','一般','较差','很差'，点星星字段产生变化  点字段星星变化
13. 自定义input输入框的样式 （粘贴的时候无法实现长按粘贴 待完善的bug）
14. 自定义弹框验证码组件（v-code)
15. 上传多张图片 wx.chooseImage()+预览图片wx.previewImage()+上传文件到服务器 wx.uploadFile()
16. 筛选页（1.小程序自带日期选择2.tab切换 3.右边弹框筛选，超出4条数据默认隐藏，可点击展开）
17. 自定义导航 "navigationStyle": "custom" 获取胶囊和导航栏等高度，自定义图标等
18. scroll-view填充剩余高度 ，滚动条滑动选中相应分类
19. 自定义导航栏+swiper+ 新增消息滚动弹框+左滑的tablist
20. echarts实现饼图，canvas为原生组件，层级很高，用cover-view实现覆盖，可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher。新增修改，头部用cover-view实现fixed的tab栏 。多个cover-view的层级关系，写在页面越后面层级越高！（存在tooltip被底部字体遮挡的bug 待解决）
21. 数值计算，引入math.js处理精度问题。
22. 地址选择，wx.chooseLocation(需要用户授权）+wx.chooseAddress（无须用户授权，直接调用该接口）
#### 效果截图
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
![输入图片说明](https://images.gitee.com/uploads/images/2021/0705/135339_ffb24ada_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0705/195514_8d93c7a2_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0708/144350_35f1473c_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0710/203648_bc744c24_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0725/001154_b595fe93_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/011703_a6b02f93_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/144805_f583bdb8_8576727.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0726/170500_2159196e_8576727.png "屏幕截图.png")
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

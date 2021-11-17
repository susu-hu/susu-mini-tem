import {
    httpReq
} from './http'


import {
    upload
} from './upload'

/**
 * @description 所有的接口请求都放在这里
 * @author Thomas.yin
 * @date: 2021/5/26
 */
module.exports = {
    /**
     * @description 获取注册及服务协议
     * @author Thomas.yin
     * @date: 2021/9/9
     */
    getRegAgree: params => {
        return httpReq('/sys-params-setting/get-register-agree', 'GET', params)
    },

    /**
     * @description 用户头像昵称授权
     * @author Thomas.yin
     * @date: 2021/9/9
     */
    userAuth: params => {
        return httpReq('/user-member/user-auth', 'POST', params, true)
    },

    /**
     * @description 修改手机号
     * @author Thomas.yin
     * @date: 2021/9/9
     */
    changePhone: params => {
        return httpReq('/user-member/update-phone', 'POST', params, true, '处理中...')
    },

    /**
     * @description 首页数据
     * @author bruce
     * @date: 2021/9/13
     */
    homeData: params => {
        return httpReq('/home/get-index', 'GET', params, true)
    },

    /**
     * @description 商城首页数据
     * @author bruce
     * @date: 2021/9/13
     */
    shopData: params => {
        return httpReq('/home/get-score-index', 'GET', params, true)
    },

    /**
     * 商品详情
     */
    goodsDetail: params => {
        return httpReq('/goods-sku/get-goods-detail', 'GET', params, true)
    },

    /**
     * 订单确认
     */
    orderConfirm: params => {
        return httpReq('/order-info/score-order-confirm', 'GET', params, true)
    },

    /**
     * 生成订单
     */
    genOrder: params => {
        return httpReq('/order-info/gen-score-order', 'POST', params, true)
    },

    /**
     * 去支付
     */
    goPay: params => {
        return httpReq('/order-info/go-score-pay', 'POST', params, true)
    },

    /**
     * 收货地址列表
     */
    addList: params => {
        return httpReq('/address/addr-list', 'GET', params, true)
    },

    /**
     * @description 积分商品列表
     * @author bruce
     * @date: 2021/9/13
     */
    goodsList: params => {
        return httpReq('/goods-sku/get-score-sku-list', 'GET', params, true)
    },

    /**
     * @description 公告列表
     * @author bruce
     * @date: 2021/9/13
     */
    noticeList: params => {
        return httpReq('/notice/list', 'GET', params, true)
    },

    /**
     * @description 公告详情
     * @author bruce
     * @date: 2021/9/13
     */
    noticeDetail: params => {
        return httpReq('/notice/view', 'GET', params, true)
    },

    /**
     * @description 我的证件
     * @author zhanghy
     * @date: 2021/9/14
     */
    babyList: params => {
        return httpReq('/user-baby-info/baby-list', 'GET', params, true)
    },

    /**
     * @description 隐私协议
     * @author zhanghy
     * @date: 2021/9/14
     */
    privacyAgree: params => {
        return httpReq('/sys-params-setting/get-privacy-text', 'GET', params, true)
    },

    /**
     * @description 出生证专属隐私说明
     * @author zhengjinyu
     * @date: 2021/10/21
     */
    BirthCert: params => {
        return httpReq('/sys-params-setting/get-birth-cert-text', 'GET', params, true)
    },

    /**
     * @description 解析出生证
     * @author zhanghy
     * @date: 2021/9/14
     */
    privacyPhoto: params => {
        return httpReq('/user-baby-info/parsing-photo', 'POST', params, true)
    },

    /*
     * @description 收货地址列表
     * @author bruce
     * @date: 2021/9/14
     */
    addressList: params => {
        return httpReq('/address/addr-list', 'GET', params, true)
    },

    /**
     * @description 新增收货地址
     * @author bruce
     * @date: 2021/9/14
     */
    createAddress: params => {
        return httpReq('/address/create-addr', 'POST', params, true)
    },

    /**
     * @description 修改收货地址
     * @author bruce
     * @date: 2021/9/14
     */
    editAddress: params => {
        return httpReq('/address/edit-addr', 'POST', params, true)
    },

    /**
     * @description 收货地址详情
     * @author bruce
     * @date: 2021/9/14
     */
    addressDetail: params => {
        return httpReq('/address/get-addr-detail', 'GET', params, true)
    },

    /**
     * @description 删除收货地址
     * @author bruce
     * @date: 2021/9/14
     */
    deleteAddress: params => {
        return httpReq('/address/del-addr', 'POST', params, true)
    },

    /**
     * @description 设置默认收货地址
     * @author bruce
     * @date: 2021/9/14
     */
    defaultAddress: params => {
        return httpReq('/address/set-default-addr', 'POST', params, true)
    },

    /**
     * @description 待确认上传出生证
     * @author zhanghy
     * @date: 2021/9/14
     */
    confirmUploadCert: params => {
        return httpReq('/user-baby-info/confirm-page', 'GET', params, true)
    },


    /**
     * @description 确认上传出生证
     * @author zhanghy
     * @date: 2021/9/14
     */
    confirmSaveCert: params => {
        return httpReq('/user-baby-info/confirm-save', 'POST', params, true)
    },

    /**
     * @description 绑定出生证任务
     * @author zhanghy
     * @date: 2021/9/14
     */
    bindCertPage: params => {
        return httpReq('/task/bind-cert-page', 'GET', params, true)
    },

    /**
     * 支付结果
     */
    payResult: params => {
        return httpReq('/order-info/get-pay-result', 'GET', params, true)
    },

    /**
     * @description 我的首页数据
     * @author bruce
     * @date: 2021/9/14
     */
    myData: params => {
        return httpReq('/user-member/my-info', 'GET', params, true)
    },

    /**
     * @description 会员码
     * @author bruce
     * @date: 2021/9/14
     */
    myQrCode: params => {
        return httpReq('/user-member/get-user-code-img', 'GET', params, true)
    },

    /**
     * @description 出生证任务领取积分
     * @author zhanghy
     * @date: 2021/9/14
     */
    receiveCertScore: params => {
        return httpReq('/task/receive-cert-score', 'POST', params, true)
    },

    /**
     * 订单列表
     */
    orderList: params => {
        return httpReq('/order-info/score-order-list', 'GET', params, true)
    },

    /**
     * 订单详情
     */
    orderDetail: params => {
        return httpReq('/order-info/score-order-detail', 'GET', params, true)
    },

    /**
     * 修改订单状态
     */
    changeOrderStatus: params => {
        return httpReq('/order-info/change-score-order-status', 'POST', params, true)
    },

    /**
     * 查看物流信息
     */
    getOrderExpress: params => {
        return httpReq('/order-info/get-order-express', 'GET', params, true)
    },

    /**
     * @description 首页弹框
     * @author bruce
     * @date: 2021/9/14
     */
    indexPopup: params => {
        return httpReq('/home/get-index-popup', 'GET', params)
    },

    /**
     * @description 商城弹框
     * @author bruce
     * @date: 2021/9/14
     */
    shopPopup: params => {
        return httpReq('/home/get-score-index-popup', 'GET', params)
    },

    /**
     * 晒单赢积分页面
     */
    shareWinScorePage: params => {
        return httpReq('/activity-share-info/get-share-info', 'GET', params, true);
    },

    /**
     * 参与晒单活动
     */
    uploadShareUser: params => {
        return httpReq('/activity-share-info/join-share-activity', 'POST', params, true);
    },

    /**
     * 更新晒单活动图片
     */
    updateShareUser: params => {
        return httpReq('/activity-share-info/update-share-activity', 'POST', params, true);
    },
    /**
     * 晒单领取积分
     */
    shareUserGetScore: params => {
        return httpReq('/activity-share-info/get-score', 'POST', params, true);
    },
    /**
     * 晒单领取积分
     */
    helpShareUser: params => {
        return httpReq('/activity-share-info/share-help-info', 'GET', params, true);
    },

    /**
     * 礼品订单列表
     */
    giftOrderList: params => {
        return httpReq('/gift/gift-list', 'GET', params, true)
    },

    /**
     * 领取礼品确认页
     */
    confirmReceive: params => {
        return httpReq('/gift/get-receive-info', 'GET', params, true)
    },

    /**
     * 领取礼品
     */
    receiveGift: params => {
        return httpReq('/gift/right-get', 'POST', params, true)
    },

    /**
     * 礼品订单签收
     */
    confirmSign: params => {
        return httpReq('/gift/confirm-sign', 'POST', params, true)
    },

    /**
     * 礼品订单详情
     */
    giftOrderDetail: params => {
        return httpReq('/gift/get-order-detail', 'GET', params, true)
    },

    /**
     * @description 积分明细
     */
    userScoreRecord: params => {
        return httpReq('/user-score/get-serial-record', 'GET', params, true)
    },

    /**
     * @description 积分到期明细
     */
    userScoreExpiredRecord: params => {
        return httpReq('/user-score/get-about-expire-data', 'GET', params, true)
    },

    /**
     * @description 参与活动
     */
    userActivity: params => {
        return httpReq('/activity/get-my-activity', 'GET', params, true)
    },

    /**
     * 晒单助力页
     */
    shareHelpPage: params => {
        return httpReq('/activity-share-info/share-help-info', 'GET', params, true)
    },

    /**
     * 福利页
     */
    welfare: params => {
        return httpReq('/welfare-info/get-welfare-info', 'GET', params, true)
    },

    /**
     * @description 用户信息
     */
    getMemberInfo: params => {
        return httpReq('/user-member/get-user-info', 'GET', params, true)
    },

    /**
     * @description 修改用户信息
     */
    updateUserInfo: params => {
        return httpReq('/user-member/edit-user-info', 'POST', params, true)
    },

    /**
     * 买赠活动详情
     */
    buyActivityDetail: params => {
        return httpReq('/activity-give-info/get-give-info', 'GET', params, true)
    },

    /**
     * 用户微信信息
     */
    userWXInfo: params => {
        return httpReq('/user-member/get-wx-info', 'GET', params, true)
    },

    /**
     * 红包活动详情
     */
    redActDetail: params => {
        return httpReq('/activity-red-info/get-red-info-detail', 'GET', params, true)
    },
    /**
     * 上报埋点数据
     * @param params
     * @returns {Promise<unknown> | Promise}
     */
    reportLog: params => {
        return httpReq('/home/report-log', 'POST', params, false)
    },
    // beforeRender

    /**
     * 买一赠一活动主页
     */
    beforeRender: params => {
        return httpReq('/activity-buy-info/before-render', 'GET', params, true)
    },

    /**
     * 买一赠一活动集赞
     */
    showStar: params => {
        return httpReq('/activity-buy-info-star/show-star', 'GET', params, true)
    },

    /**
     * @description 下载海报
     */
    downloadPoser: params => {
        return httpReq('/activity-buy-info/download-poser', 'POST', params, true, '海报生成中...')
    },

    /**
     * @description 发起人助力页
     */
    helpStar: params => {
        return httpReq('/activity-buy-info-star/help-star', 'GET', params, true)
    },

    /**
     * @description 为TA助力
     */
    handleStar: params => {
        return httpReq('/activity-buy-info-star/handle-star', 'POST', params, true)
    }
}

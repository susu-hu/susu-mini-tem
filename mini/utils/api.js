import {
    httpReq
} from './http'


import {
    upload
} from './upload'

/**
 * @description 所有的接口请求都放在这里
 * @author susu
 * @date: 2021/12/16
 */
module.exports = {

    getRegAgree: params => {
        return httpReq('/sys-params-setting/get-register-agree', 'GET', params)
    },

    userAuth: params => {
        return httpReq('/user-member/user-auth', 'POST', params, true)
    },

    changePhone: params => {
        return httpReq('/user-member/update-phone', 'POST', params, true, '处理中...')
    },

    
    homeData: params => {
        return httpReq('/home/get-index', 'GET', params, true)
    },

    
}

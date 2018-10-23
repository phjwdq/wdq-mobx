/**
 * @file HTTP
 * @author luwenlong
 */

import axios from 'axios'
import qs from 'qs'
import cookie from 'cookie'
import {OS, BROWSER} from '@utils/platform'

const DEFAULTCONFIG = {
    baseURL: apiPath
}

const HTTPERROR = {
    NETWORKERROR: '网络错误',
    TIMEOUTERROR: '网络超时',
    LOGICERROR: '逻辑错误',
}

const cookies = cookie.parse(document.cookie)
const methods = ['get', 'post', 'put', 'delete']

const isSuccess = res => {
    return typeof res === 'object'
        && res.code !== undefined
        && res.code !== null
        && (+res.code === 0 || +res.status === 0 || +res.code === 200)
}

const resFormat = res => res.response || res.data

const http = {}

methods.forEach(v => {
    http[v] = (url, data, apiPath?) => {
        const axiosConfig = {
            method: v,
            url,
            baseURL: apiPath || DEFAULTCONFIG.baseURL
        }

        const instance = axios.create(DEFAULTCONFIG)
        const queries = qs.parse(window.location.search.slice(1))
        const hashes = qs.parse(window.location.hash.slice(1))

        data = Object.assign({}, data, {
            uid: cookies && cookies.inno_uid,
            openid: cookies && cookies.inno_openid,
            query: {...hashes, ...queries},
            channel: 'mobile',
            platform: OS.ios ? 'ios' : OS.android ? 'android' : '',
            version: '1.0'
        })

        // 拦截请求处理
        instance.interceptors.request.use(
            config => {
                const timestamp = Date.now() / 1000

                config.params = {
                    ...config.params,
                    timestamp
                }

                config.timeout = 150000

                return config
            },
            error => Promise.reject(error)
        )

        // 拦截响应处理
        instance.interceptors.response.use(
            response => {
                if (response.data.code === 402) {
                    //Notification.error({
                        //message: '登录已经过期'
                    //})

                    setTimeout(
                        () => {
                            location.href = '/login'
                        },
                        300
                    )

                    return Promise.reject({
                        msg: '登录已过期'
                    })
                }

                if (response.data.code === 401) {
                    //Notification.error({
                        //message: '你没有权限访问'
                    //})

                    return Promise.reject({
                        msg: '你没有权限访问'
                    })
                }

                let rdata = response.data

                if (!isSuccess(rdata)) {
                    const _err = {
                        msg: rdata.msg,
                        code: rdata.code,
                        type: HTTPERROR.LOGICERROR,
                        config: response.config
                    }

                    return Promise.reject(_err)
                }

                return resFormat(rdata)
            },
            error => {
                const _err = {
                    msg: error.message || '网络故障',
                    type: /^timeout of/.test(error.message)
                        ? HTTPERROR.TIMEOUTERROR
                        : HTTPERROR.NETWORKERROR,
                    config: error.config
                }

                return Promise.reject(_err)
            }
        )

        if (v === 'get') {
            axiosConfig.params = data
        }
        else {
            axiosConfig.data = data
        }

        axiosConfig.startTime = new Date()

        // TODO 响应状况上报 有些错误不再前端提示 上报到服务器
        return instance
            .request(axiosConfig)
            .then(res => res)
            .catch(err => {
                /*err.msg && err.msg.indexOf('</') > 0*/
                    //? Message({
                        //showClose: true,
                        //duration: 0,
                        //message: err.msg
                    //})
                    //: Message.error(
                        //err.response || err.msg || err.stack || JSON.stringify(err)
                    /*)*/
                //reporter({
                    //name: err.name,
                    //stack: err.stack,
                    //message: err.message,
                //})

                if (axiosConfig.url.includes('autoScript.set')) {
                    return Promise.resolve({err})
                }
                else {
                    return Promise.reject({
                        err,
                        stack: err.msg || err.stack || ''
                    })
                }
            }
        )
    }
})

export default http

/**
 * @file 统一接口请求
 * @author luwenlong
 */

import axios from 'axios'
import http from './http'
import API from './api'

const apis = {}

const iapi = ['productList', 'sendcode', 'diagsave', 'diagres']
const innoapi = ['trace']

Object.keys(API).forEach(it => {
    apis[it] = function (data): Promise<any> {
        let basePath = innoapi.includes(it) ? innoPath : iapi.includes(it) ? phpPath : apiPath
        return http.post(API[it], data || {}, basePath)
    }
})

export default apis

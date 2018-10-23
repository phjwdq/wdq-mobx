/**
 * @file 时间监控
 * @author luwenlong
 */

import axios from 'axios'

window.onload = function moni() {
    let monitor = {}

    if (!window.performance) {
        return false
    }

    setTimeout(
        () => {
            const {
                timing: {
                    unloadEventEnd,
                    unloadEventStart,
                    redirectStart,
                    redirectEnd,
                    connectEnd,
                    connectStart,
                    fetchStart,
                    responseStart,
                    responseEnd,
                    requestStart,
                    domComplete,
                    domInteractive,
                    navigationStart,
                    domContentLoadedEventEnd,
                    loadEventStart,
                    loadEventEnd,
                    domainLookupEnd,
                    domainLookupStart
                },
                navigation: {
                    type,
                    redirectCount
                }
            } = window.performance

            let enter = ''

            switch (+type) {
            case 1:
                enter = 'reload'
                break
            case 2:
                enter = 'back'
                break
            case 255:
                enter = 'abnormal'
                break
            default:
                enter = 'link'
                break
            }

            monitor = {
                time: {
                    // 卸载前页面
                    unloadPreDoc: unloadEventEnd - unloadEventStart,
                    // 准备页面
                    readyStart: fetchStart - navigationStart,
                    // 查缓存
                    appCache: domainLookupStart - fetchStart,
                    // 重定向
                    redirect: redirectEnd - redirectStart,
                    // dns查询
                    dns: domainLookupEnd - domainLookupStart,
                    // tcp连接
                    tcp: connectEnd - connectStart,
                    // ttfb
                    ttfb: responseStart - navigationStart,
                    // 请求耗时
                    request: responseEnd - requestStart,
                    // 白屏时间
                    nothing: responseStart - navigationStart,
                    // 解析dom耗时
                    domReady: domComplete - domInteractive,
                    // 请求结束dom加载
                    initDom: domInteractive - responseEnd,
                    // 页面可操作
                    operable: domContentLoadedEventEnd - navigationStart,
                    // onload回调耗时
                    loadTime: loadEventEnd - loadEventStart,
                    // 页面可用总耗时
                    totalLoad: loadEventEnd - navigationStart
                },
                type: enter,
                redirectCount: redirectCount
            }

            const url = /innolife/ig.test(apiPath)
                ? 'http://www.innolife.cc:8085/api/evamonitor'
                : 'http://123.57.81.151:8085/api/evamonitor'

            axios.post(url, monitor)
        },
        1000
    )

    return null
}

/**
 * @file 保单信息
 * @author wdq
 */

import {observable, action, runInAction} from 'mobx'
import {BaseStore} from '@utils/BaseStore'
import axios from 'axios'

class Insurance extends BaseStore {
    @observable fetchupload = ''
    @observable uploadData = {}
    @observable uploadmsg = ''

    @observable fetchprolist = ''
    @observable proListData = []
    @observable proListmsg = ''

    @observable fetchcode = ''
    @observable codeData = {}
    @observable codemsg = ''

    @observable fetchdiagsave = ''
    @observable diagsaveData = {}
    @observable diagsavemsg = ''

    @observable fetchdiagres = ''
    @observable diagresData = {}
    @observable diagresmsg = ''

    @observable saveParamsData = {}

    @action
    uploadFun = async function (params) {
        this.fetchupload = 'start'

         // url: `https://www.inno-life.cc/uploading?name=insurance`,
        try {
            let res = await axios({
                method: 'post',
                url: `${window.innoPath}uploading?name=insurance`,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {},
                responseType: 'json',
                transformRequest: [function (data) {
                    return params
                }],
                transformResponse: [function (data) {
                    return data
                }]
            })

            runInAction(() => {
                this.fetchupload = 'done'
                this.uploadmsg = '上传图片成功'
                this.uploadData = res.data.data
            })
        }
        catch(err) {
            runInAction(() => {
                this.fetchupload = 'fail'
                this.uploadmsg = '上传图片失败，请重试'
            })
        }
    }

    @action
    proList = async function (params) {
        this.fetchprolist = 'start'
        this.diagresData = {}
        this.fetchdiagres = ''

        try {
            let res = await this.apis.productList(params)

            runInAction(() => {
                this.diagresData = {}
                this.fetchdiagres = ''
                this.fetchprolist = 'done'
                this.proListmsg = '获取产品列表成功'
                this.proListData = Array.isArray(res) ? res : []
            })
        }
        catch(err) {
            runInAction(() => {
                this.fetchprolist = 'fail'
                this.proListmsg = '获取产品列表失败，请重试'
            })
        }
    }

    @action
    codeFun = async function (params) {
        this.fetchcode = 'start'

        try {
            let res = await this.apis.sendcode(params)

            runInAction(() => {
                this.fetchcode = 'done'
                this.codeData = res
                this.codemsg = '获取验证码成功'
            })
        }
        catch(err) {
            runInAction(() => {
                this.fetchcode = 'fail'
                this.codemsg = '获取验证码失败'
            })
        }
    }

    @action
    diagsaveFun = async function (params) {
        this.fetchdiagsave = 'start'

        try {
            let res = await this.apis.diagsave(params)

            runInAction(() => {
                this.fetchdiagsave = 'done'
                this.diagsaveData = res
                this.diagsavemsg = '提交信息成功'
            })
        }
        catch(err) {
            runInAction(() => {
                this.fetchdiagsave = 'fail'
                this.diagsavemsg = '提交信息失败'
            })
        }
    }

    @action
    diagresFun = async function (params) {
        this.fetchdiagres = 'start'

        try {
            let res = await this.apis.diagres(params)

            runInAction(() => {
                this.fetchdiagres = 'done'
                this.diagresData = res
                this.diagresmsg = '获取诊断结果成功'
            })
        }
        catch(err) {
            runInAction(() => {
                this.fetchdiagres = 'fail'
                this.diagresmsg = '获取诊断结果失败'
            })
        }
    }

    @action
    saveParamsFun = function (obj) {
        for (let key in obj) {
            this.saveParamsData[key] = obj[key] || void 0
        }
    }

    @action
    diagresClearFun = function () {
        this.diagresData.content = ''
        this.fetchdiagres = ''
    }

    // 打点统计
    @action
    traceFun = async function (params) {
        try {
            let res = await this.apis.trace(params)
        }
        catch(err) {

        }
    }

}

const insurance = new Insurance()

export default insurance

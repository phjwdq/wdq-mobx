/**
 * @file storeExt
 * @author luwenlong
 */

import {action} from 'mobx'
import apis from './apis'

/**
 * 扩展store类
 */
export class BaseStore {
    apis = apis
}

/**
 * @file PageLoading
 * @author luwenlong
 * @description loading
 */

/* eslint-disable */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './PageLoading.styl'

export default class PageLoading extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className={styles.pageloading}>
                <span>数据获取中...</span>
            </div>
        )
    }
}

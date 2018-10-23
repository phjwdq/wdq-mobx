/**
 * @file 保单诊断
 * @author wdq
 */

/* eslint-disable */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {reaction, autorun} from 'mobx'
import {observer, inject} from 'mobx-react'
import classNames from 'classnames'

@inject('insurance')
@observer
export default class Diagnose extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>llkkkllkkk</div>
        )
    }

    componentDidMount() {
        document.title = '保单诊断'
        const me = this

        me.props.insurance.proList({name: '平安'})

        me.sugListener = reaction(
            () => me.props.insurance.fetchprolist,
            fetch => {
                if (fetch === 'fail') {
                    me.props.insurance.saveParamsFun({pid: ''})
                }
                else if (fetch === 'done'
                    && Array.isArray(me.props.insurance.proListData.slice())
                    && me.props.insurance.proListData.slice().length
                ) {

                }
                else if (fetch === 'done'
                    && (!Array.isArray(me.props.insurance.proListData.slice()) || !me.props.insurance.proListData.slice().length)
                ) {

                }
            }
        )
    }

    componentWillUnmount() {
        const me = this

        me.sugListener && me.sugListener()
    }
}

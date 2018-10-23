/**
 * @file dingdangbao
 * @author luwenlong(zuiwosuifeng@gmail.com)
 */

/* eslint-disable */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import AppRouter from './router'
import store from './store'
import './styles/global.styl'

window.adapter = x => x * (parseFloat(document.documentElement.style.fontSize) || 46.875) / 46.875

render(
    <Provider {...store}>
        {AppRouter}
    </Provider>,
    document.getElementById('app')
)

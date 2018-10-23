/**
 * @file indexRoutes
 * @author luwenlong(zuiwosuifeng@gmail.com)
 */

/* eslint-disable */
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import Loadable from 'react-loadable'
import PageLoading from '@components/PageLoading'
import Error from '@components/Error'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/home'),
    loading: PageLoading
})

const Diagnose = Loadable({
    loader: () => import(/* webpackChunkName: "diagnose" */ '@views/diagnose'),
    loading: PageLoading
})


const AppRouter = (
    <Router basename='/wap'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/diagnose/:ctype?" component={Diagnose} />
            <Route component={Error} />
        </Switch>
    </Router>
)

export default hot(module)(AppRouter)

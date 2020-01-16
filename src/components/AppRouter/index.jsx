import React from 'react'
import { Route } from 'react-router'
import { Paket } from '../../container/Paket'
import { Signup } from '../../container/Signup'
import Home from '../../container/Home'
import { Login } from '../../container/Login'

export const AppRouter = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/paket" component={Paket} />
            <Route path="/signup" component={Signup} />
            <Route path='/login' component={Login} />
        </div>
    )
}

import React from 'react'
import { Route } from 'react-router'
import { Paket } from '../../container/Paket'
import { Signin } from '../../container/Signin'
import Home from '../../container/Home'

export const AppRouter = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/paket" component={Paket} />
            <Route path="/signin" component={Signin} />
        </div>
    )
}

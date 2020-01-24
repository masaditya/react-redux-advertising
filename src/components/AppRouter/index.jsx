import React from 'react'
import { Route } from 'react-router'
import { Paket } from '../../container/Paket'
import { Signup } from '../../container/Signup'
import Home from '../../container/Home'
import { Login } from '../../container/Login'
import { Privacy } from '../../container/Privacy'
import { Faq } from '../../container/Faq'
import { Contact } from '../../container/Contact'
import Payment from '../../container/Payment'
import { Dashboard } from '../../container/admin/Dashboard'
import { Profile } from '../../container/admin/Profile'

export const AppRouter = () => {
    return (
        <div>
            
            <Route path="/" exact component={Home} />
            <Route path="/paket" component={Paket} />
            <Route path="/signup" component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/privacy' component={Privacy} />
            <Route path='/faq' component={Faq} />
            <Route path='/contact' component={Contact} />
            <Route path='/payment' component={Payment} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            
        </div>
    )
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Awareness } from './Awareness'
import { Link } from 'react-router-dom'
import { DashboardInfo } from './DashboardInfo'
import { LeadGeneration } from './LeadGeneration'
import { Post } from './Post'

export class Dashboard extends Component {


    state = {
        active: false
    }

    render() {

        let pathName = this.props.location.pathname
        console.log(pathName)
        return (
            <div className="bg-light py-5">

                <div className="container">
                    {/* ?php $this-load-&gt;view('ajar_article/_messages'); ?&gt; */}
                    <div className="d-flex w-auto ">
                        <ul className="nav shadow bg-white rounded" role="tablist">
                            <li className={pathName == '/dashboard' || pathName == '/dashboard/' ? "nav-item active-tab tab" : "nav-item tab "} >
                                <Link to="/dashboard" id="step1-tab" className="nav-link ">Dashboard</Link>
                            </li>
                            <li className={pathName == '/dashboard/awareness' || pathName == '/dashboard/awareness/' ? "nav-item active-tab tab" : "nav-item tab "} >

                                {/* <li className="nav-item tab   border-right "> */}
                                <Link to="/dashboard/awareness" id="step1-tab" className="nav-link ">Boost Awareness</Link>

                            </li>
                            <li className={pathName == '/dashboard/lead-generation' || pathName == '/dashboard/lead-generation/' ? "nav-item active-tab tab" : "nav-item tab "} >

                                {/* <li className="nav-item tab    "> */}
                                <Link to="/dashboard/lead-generation" id="step1-tab" className="nav-link ">Lead Generation</Link>

                            </li>
                            <li className={pathName == '/dashboard/billing' || pathName == '/dashboard/billing/' ? "nav-item active-tab tab" : "nav-item tab "} >

                                {/* <li className="nav-item tab   border-left "> */}
                                <Link to="/dashboard/billing" id="step1-tab" className="nav-link ">Billing</Link>
                            </li>
                            <li className={pathName == '/dashboard/post' || pathName == '/dashboard/post' ? "nav-item active-tab tab" : "nav-item tab "} >

                                {/* <li className="nav-item tab   border-left "> */}
                                <Link to="/dashboard/post" id="step1-tab" className="nav-link ">Post</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container mt-5 tab-content">
                    <Route exact path="/dashboard/" component={DashboardInfo} />
                    <Route path="/dashboard/awareness" component={Awareness} />
                    <Route path="/dashboard/lead-generation" component={LeadGeneration} />
                    <Route path="/dashboard/billing" component={Awareness} />
                    <Route path="/dashboard/post" component={Post} />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

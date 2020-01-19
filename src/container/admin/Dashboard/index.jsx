import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Awareness } from './Awareness'
import { Link } from 'react-router-dom'
import { DashboardInfo } from './DashboardInfo'

export class Dashboard extends Component {
    render() {
        return (
            <div className="bg-light py-5">

                <div className="container">
                    {/* ?php $this-load-&gt;view('ajar_article/_messages'); ?&gt; */}
                    <div className="d-flex w-auto ">
                        <ul className="nav shadow bg-white rounded" role="tablist">
                            <li className="nav-item tab active-tab border-right ">
                                <Link to="/dashboard" id="step1-tab" className="nav-link ">Dashboard</Link>
                            </li>
                            <li className="nav-item tab   border-right ">
                                <Link to="/dashboard/awareness" id="step1-tab" className="nav-link ">Boost Awareness</Link>

                                {/* <a href="#step-2" id="step2-tab" className="nav-link " aria-selected="false" data-toggle="tab" role="tab">Boost Awareness</a> */}
                            </li>
                            <li className="nav-item tab    ">
                                <Link to="/dashboard" id="step1-tab" className="nav-link ">Dashboard</Link>

                                {/* <a href="#step-3" id="step3-tab" className="nav-link active" aria-selected="true" data-toggle="tab" role="tab">Lead generation</a> */}
                            </li>
                            <li className="nav-item tab   border-left ">
                                <Link to="/dashboard" id="step1-tab" className="nav-link ">Dashboard</Link>

                                {/* <a href="#step-4" id="step4-tab" className="nav-link " aria-selected="false" data-toggle="tab" role="tab">Billing</a> */}
                            </li>
                            <li className="nav-item tab   border-left ">
                                <Link to="/dashboard" id="step1-tab" className="nav-link ">Dashboard</Link>

                                {/* <a href="#step-5" id="step4-tab" className="nav-link " aria-selected="false" data-toggle="tab" role="tab">post</a> */}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container mt-5 tab-content">
                    <Route exact path="/dashboard/" component={DashboardInfo} />
                    <Route path="/dashboard/awareness" component={Awareness} />
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

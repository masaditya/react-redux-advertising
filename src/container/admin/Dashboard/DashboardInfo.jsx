import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DashboardInfo extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {/* header section */}
                    <div className="row m-0 p-0">
                        <div className="col-md-8">
                            <b>User report by distribution</b>
                            <hr className="mt-2 bg-gray" />
                        </div>
                        <div className="col-md-4">
                            <div className="row mt-3 mb-5 p-0">
                                <span className="mr-0 pt-2 pl-5 pr-4 fz-1 font-weight-bold">Period</span>
                                <select className="form-control fz-1 w-60 " name="dropdown">
                                    <option>Yesterday</option>
                                    <option>Default selected</option>
                                    <option>Default select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* row dounut chart */}
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="bg-white w-100 py-3 shadow-sm rounded row justify-content-center">
                                <canvas id="user-chart-doughnut" className="w-25 h-25" />
                                <div className="fz-1 align-items-center my-auto">
                                    <b className="fz-2">All User</b>
                                    <p className="text-gray m-0"> 100.00% Users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="bg-white border-dashed w-100 py-3 rounded shadow-sm row justify-content-center">
                                <canvas id="segment-chart-doughnut" className="w-25 h-25" />
                                <div className="fz-1 align-items-center my-auto">
                                    <b className="fz-2 "> <a href className="text-gray">+ Add Segment</a> </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-3">
                            <span className="mr-0 pr-4 fz-1 font-weight-bold">Primary Dimension:</span>
                            <select className="form-control mt-2 fz-1 w-100 " name="dropdown">
                                <option>Top Chanels</option>
                                <option>Default selected</option>
                                <option>Default select</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <span className="mr-0 mb-2 pr-4 fz-1 font-weight-bold">Conversion</span>
                            <select className="form-control mt-2 fz-1 w-100 " name="dropdown">
                                <option>eCommerce</option>
                                <option>Default selected</option>
                                <option>Default select</option>
                            </select>
                        </div>
                        <div className="col-sm-3 pt-4">
                            <a className="font-weight-bold fz-1" href>Edit Channel Grouping</a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-5">
                            <div className="bg-white w-100 p-4 pb-5 shadow-sm">
                                <p className="pb-3 font-weight-bold">Top Channels</p>
                                <canvas id="top-channel-pie" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="bg-white w-100 p-4 shadow-sm">
                                <p className="pb-3 font-weight-bold">Users</p>
                                <canvas className="w-75 h-auto mx-auto" id="users-pie" />
                            </div>
                        </div>
                    </div>
                    {/* User report by city */}
                    <div>
                        {/* header section */}
                        <div className="row mt-5 p-0">
                            <div className="col-md-8">
                                <b>User report by city</b>
                                <hr className="mt-2 bg-gray" />
                            </div>
                            <div className="col-md-4">
                                <div className="row mt-3 mb-5 p-0">
                                    <span className="mr-0 pt-2 pl-5 pr-4 fz-1 font-weight-bold">Period</span>
                                    <select className="form-control fz-1 w-60 " name="dropdown">
                                        <option>Yesterday</option>
                                        <option>Default selected</option>
                                        <option>Default select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* end header */}
                        <div className="row fz-1 bg-gray py-2 px-4">
                            <b>Demographic: overview</b>
                            <div className="row ml-auto mr-0 ">
                                <ul className="nav">
                                    <li className="nav-item p-0">
                                        <select className="form-control fz-1 pr-5 w-100 " name="dropdown">
                                            <option>Yesterday</option>
                                            <option>Default selected</option>
                                            <option>Default select</option>
                                        </select>
                                    </li>
                                    <li className="nav-item align-self-center">
                                        <i className="fa fa-arrow-down" aria-hidden="true" />
                                    </li>
                                    <li className="nav-item p-0">
                                        <select className="form-control fz-1 w-100 " name="dropdown">
                                            <option>Yesterday</option>
                                            <option>Default selected</option>
                                            <option>Default select</option>
                                        </select>
                                    </li>
                                    <li className="nav-item  align-self-center">
                                        <i className="fa fa-arrow-down" aria-hidden="true" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <table id="exampletable" className="display table fz-1 border-0 bg-white" width="100%" />
                    </div>
                    {/* end User report by city */}
                    {/* header section */}
                    <div className="row mt-5 p-0">
                        <div className="col-md-8">
                            <b>User demofraphic report</b>
                            <hr className="mt-2 bg-gray" />
                        </div>
                        <div className="col-md-4">
                            <div className="row mt-3 mb-5 p-0">
                                <span className="mr-0 pt-2 pl-5 pr-4 fz-1 font-weight-bold">Period</span>
                                <select className="form-control fz-1 w-60 " name="dropdown">
                                    <option>Yesterday</option>
                                    <option>Default selected</option>
                                    <option>Default select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* end header */}
                    <div className="row fz-1 bg-gray py-2 px-4">
                        <b>Demographic: overview</b>
                        <div className="d-flex ml-auto mr-0">
                            <ul className="nav">
                                <li className="nav-item">SAVE</li>
                                <li className="nav-item">EXPORT</li>
                                <li className="nav-item">SHARE</li>
                                <li className="nav-item">INSHIGTS</li>
                            </ul>
                        </div>
                    </div>
                    {/* row dounut chart */}
                    <div className="row mt-3 p-0 mx-0">
                        <div className="col-md-6 ">
                            <div className="bg-white mr-0 w-100 py-3 shadow-sm rounded row justify-content-center">
                                <canvas id="user-chart-doughnut2" className="w-25 h-25" />
                                <div className="fz-1 align-items-center my-auto">
                                    <b className="fz-2">All User</b>
                                    <p className="text-gray m-0"> 100.00% Users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="bg-white mr-0 w-100 py-3 border-dashed  rounded shadow-sm row justify-content-center">
                                <canvas id="segment-chart-doughnut2" className="w-25 h-25" />
                                <div className="fz-1 align-items-center my-auto">
                                    <b className="fz-2 "> <a href className="text-gray">+ Add Segment</a> </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-5 p-0">
                        <span className="mr-0 pt-2 pr-4 fz-1 font-weight-bold">Key Metric</span>
                        <select className="form-control fz-1 w-25 " name="dropdown">
                            <option>Users</option>
                            <option>Default selected</option>
                            <option>Default select</option>
                        </select>
                    </div>
                    <div className="row bg-white">
                        <div className="col-md-5 p-3">
                            <b>Age</b>
                            <canvas className="mt-4" id="age-bar" />
                        </div>
                        <div className="col-md-7 p-3">
                            <b className="text-left">Gender</b>
                            <span className="fz-1  float-right text-black-50">0,26% of total Users</span>
                            <canvas className="w-75 h-auto" id="gender-pie" />
                            <div className="text-right mt-4">
                                <span className="fz-1 text-black-50">This report was generated on 3/15/20 at 01:00:22 PM</span>
                                <a className="fz-1 ml-4" href>Refersh Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardInfo)

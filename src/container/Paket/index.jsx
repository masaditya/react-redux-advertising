import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Banner } from '../../components/Banner'

export class Paket extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Banner />
                <div className="container my-5 py-5 text">
                    <p>Digital Agency Network is an indispensable resource for brands, agencies and global community of
                      marketers. Our website attracts over 120.000 visitors every month looking for the top digital
                      marketing
                      agencies, best practice advice, tips, tricks and insight into how to do business better online.
  </p>
                    <p>
                        We can help to raise awareness and drive leads from a relevant and engaged audience.
  </p>
                    <h3 className="font-weight-bolder mt-5"> For Agencies
  </h3>
                    <p>
                        We attract business opportunities and offer our member agencies tools to showcase their agency
                        to
                        the market. Along with the benefits of membership, DAN member agencies may expand their reach
                        through
                        native advertising and content marketing on our website.
  </p>
                    <p>
                        Our advertising opportunities drive high quality leads from a large and loyal audience of agency
                        executives and global community of marketers. We offer branded content opportunities to
                        suppliers,
                        vendors and event organisers to help them achieve their goals by lead generation and brand
                        awareness
  </p>
                    <p>
                        For more information and to talk through your requirements, please contact us.
  </p>
                    <div className="container p-0 mt-5 border">
                        <div className="row m-0 w-100">
                            <div className="col-md-4 info pl-4 pt-4 pb-3">
                                <h3><strong>Paket A</strong> </h3>
                                <h5>IDR 1.000.000<strong>/package</strong></h5>
                            </div>
                            <div className="col-md-6 check mt-auto  mb-auto pt-2">
                                <div className="row">
                                    <div className="col-sm-6 px-0">
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                    </div>
                                    <div className="col-sm-6 px-0">
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                        <p> <span className="fa fa-check" />Lorem Ipsum Dolor Sit Amet </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 text-center bg-primary text-white">
                                <div className="my-2">
                                    <p style={{ fontSize: '0.8em' }} className="m-0">Price Starts From</p>
                                    <h5 className="font-weight-bold mb-2 m-0">IDR 1.000.000</h5>
                                    <button className="btn btn-outline-light px-4">BUY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Paket)

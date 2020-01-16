import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Signup extends Component {
    render() {
        return (
            <div className="full-height d-flex">
                <div className="split left flex-column blur">
                    <div className="centered w-50 px-5 text-left">
                        <h2 className="text-white">Reach more people with<b> AJAR Ads </b></h2>
                    </div>
                </div>
                <div id="singup" className="split right flex-column">
                    <div className="centered w-50">
                        <h3> <b> Hello Ajarian ! </b></h3>
                        <h4>Let’s start make a noise for your brand !</h4>
                        <form method="POST" action="<?php echo site_url() ?>/Login/regis" encType="multipart/form-data">
                            <div className="form-group account mt-4 ">
                                <input type="text" className="form-control w-100 my-2" id="name" name="name" placeholder="Name" required />
                                <input type="email" className="form-control w-100 my-2" name="email" id="email" placeholder="Email" required />
                                <input type="text" className="form-control w-100 my-2" name="company" id="company" placeholder="Company Name" required />
                                <input type="tel" className="form-control w-100 my-2" id="phone" name="phone" placeholder="Phone" maxLength={12} />
                                <div className="pass_show">
                                    <input type="password" className="form-control w-100 my-2" name="newpassword" id="newpassword" placeholder="Password" />
                                </div>
                                <div className="pass_show">
                                    <input type="password" className="form-control w-100 my-2" id="confirmpassword" placeholder="Confirm Password" />
                                </div>
                                <small id="error-password" className="text-danger m-0">password not match</small>
                            </div>
                            <button id="btn-signup" type="submit" className="btn-grad-warning w-100 btn-rounded py-2">Sign Up</button></form>
                        <p className="text-right my-3 fz-1"> <a href id="fgt">Forget my password</a> </p>
                        <p className="text-center fz-1">By pressing sign in button, I agreed to the applied <a href>term and condition</a> made by PT AJAR Media Digital</p>
                        <p className="text-center fz-1"> <Link id="tologin" to="/login">Sign In</Link> here if you are not registered yet.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

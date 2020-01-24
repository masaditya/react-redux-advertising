import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div className="full-height d-flex">
                <div className="split left flex-column blur">
                    <div className="centered w-50 px-5 text-left">
                        <h2 className="text-white">Reach more people with
        <b> AJAR Ads </b> </h2>
                    </div>
                </div>
                <div id="login" className="split right flex-column">
                    <form method="POST" action="<?php echo site_url() ?>/Login/Check">
                        <div className="centered w-50">
                            <h3> <b> Hello Ajarian ! </b></h3>
                            <h4>Let’s start make a noise for your brand !</h4>
                            <div className="form-group account mt-5 ">
                                <input type="text" className="form-control w-100 my-4" id="username" name="username" placeholder="User name" required />
                                <div className="pass_show">
                                    <input type="password" className="form-control w-100 my-4" id="password" name="password" placeholder="Password" required />
                                </div>
                            </div>
                            <button type="submit" className="btn-grad-warning w-100 btn-rounded py-2">Sign In</button>
                            <p className="text-right my-3 fz-1"> <a >Forget my password</a> </p>
                            <p className="text-center fz-1">By pressing sign in button, I agreed to the applied
                            <a >term and condition</a> made by PT AJAR Media Digital</p>
                            <p className="text-center fz-1"> <Link to="/signup">Sign up</Link> here if you are not
                              registered yet.</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/img/logo-adv.svg'
import { Link } from 'react-router-dom'


const HeaderComponent = props => {
    return (
        <div>
            <nav id="nav" className="navbar navbar-expand-lg navbar-light blog-header py-3">
                <div className="mx-auto mt-2 navbar-brand ">
                    <Link className="py-4" to="/"><img className="logo-header" src={logo} alt="logo" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse my-2 float-right w-auto" id="navbarSupportedContent">
                    <div className="w-auto mr-0 ml-auto">
                        <a className="text-blue text-decoration-none mr-4" href="<?php echo site_url() ?>/Contact">
                            <i className="fa fa-phone" aria-hidden="true" />
                            Contact Us</a>
                        <a className="btn btn-grad-warning btn-rounded px-4 fz-1 mr-3" href="<?php echo site_url() ?>/Login">
                            Start Now</a>
                        <a className="text-blue border-left pl-3 text-decoration-none mr-4" href="<?php echo site_url() ?>/Contact">
                            <i className="fa fa-globe" aria-hidden="true" />
                        </a>

                        {/* <div className="dropdown">
                            <button className="btn border btn-rounded pl-5 " type="button" data-toggle="dropdown">name; ?&gt;<i className="px-4 fas fa-angle-down fz-1" />
                                <i className> <img className="user-icon" src="<?php echo base_url() ?>assets/img/avatar.png" alt="user" />
                                </i>
                            </button>
                            <ul className="ml-5 p-4 dropdown-menu">
                                <li><a href="#">Profile Setting</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="<?php echo site_url() ?>/Login/Out">Sign Out</a></li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </nav>

        </div>
    )
}

HeaderComponent.propTypes = {
    name: PropTypes.string
}

export default HeaderComponent

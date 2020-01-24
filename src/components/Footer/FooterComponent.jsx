import React from 'react'
import './footerStyle.css'


const FooterComponent = props => {
    return (
        <div>
            <footer className="footer bg-gray text-dark">


                <div className="row w-100 py-5 justify-content-center align-self-center">

                    <div className="col-md-2 col-lg-1  px-1 align-self-center">
                        <img src={require('../../assets/img/logo1.svg')} alt="logo" width="50%" style={{ minWidth: '150px' }} />
                    </div>

                    <div className="col-md-6 col-lg-4 my-3 pl-4 row address  w-100 align-self-center">
                        <img height={70} src={require('../../assets/img/image2vector.svg')} alt="pin" />
                        <ul className="pl-3" style={{ listStyle: 'none' }}>
                            <li>Jl. Pelagan Tentara Pelajar</li>
                            <li>Pelem, Harjobirangan</li>
                            <li>Pekem, Sleman, Yogyakarta</li>
                            <li>55582</li>
                            <div className="row mt-3">
                                <button className="btn btn-outline-dark btn-circle border-2 ">
                                    <i className="fab fa-facebook-f fa-2x" />
                                </button>
                                <button className="btn btn-outline-dark btn-circle border-2 ">
                                    <b className="fab fa-instagram fa-2x" />
                                </button>
                                <button className="btn btn-outline-dark btn-circle border-2 ">
                                    <b className="fab fa-linkedin fa-2x" />
                                </button>
                                <button className="btn btn-outline-dark btn-circle border-2 ">
                                    <b className="fab fa-youtube fa-2x" />
                                </button>
                            </div>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-2 align-self-center">
                        <div className="widget fz-1 font-weight-bold clearfix">
                            <ul style={{ listStyle: 'none' }}>
                                <li><a href="/" className="text-decoration-none text-dark" >About Us</a></li>
                                <li><a href="/" className="text-decoration-none text-dark" >AJAR’s Solutions</a></li>
                                <li><a href="/" className="text-decoration-none text-dark" >Terms of Use</a></li>
                                <li><a href="/" className="text-decoration-none text-dark" >Privacy of Policy</a></li>
                                <li><a href="/" className="text-decoration-none text-dark" >Article</a></li>
                                <li><a href="/" className="text-decoration-none text-dark" >Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-3 align-self-center px-4">
                        <p className="fz-1">Subscribe to our newsletter</p>
                        <div className="input-group rounded-pill mb-3">
                            <input style={{ borderColor: '#f2982d' }} type="text" className="form-control bg-gray fz-1 pl-3 rounded-left-sm" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span style={{ borderColor: '#f2982d' }} className="input-group-text btn-grad-warning rounded-right-sm px-3 fz-1" id="basic-addon2">OK</span>
                            </div>
                        </div>
                    </div>
                    <div className="align-self-center  col-md-1">
                        <a href="#nav" className="btn btn-abbys"> <i className="fa fa-arrow-up" aria-hidden="true" /> </a>
                    </div>
                </div>

            </footer>
        </div>
    )
}


export default FooterComponent

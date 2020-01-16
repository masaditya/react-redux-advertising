import React from 'react'
import hr2 from '../../assets/img/hr-2.png'
import group from '../../assets/img/Group 4866.svg'

export const HomePackage = () => {
    return (
        <div>
            <div>
                <div className="container  my-5" id="section-3">
                    <div className="mx-auto text-left w-50">
                        <h2 className="text-info">The <b>Packages </b> </h2>
                        <img src={hr2} width={300} alt="" />
                        <p>Select our solutions that fit with your marketing objectives</p>
                    </div>
                    <div className="row w-75 mx-auto p-0 ">
                        <div className="col-md-4 mt-3">
                            <div className="py-4 px-5 text-center bg-abbyss round-sm">
                                <h4 className="font-weight-bold">Package A</h4>
                                <hr />
                                <h3> <span className="p-0 mt-0 mb-auto fz-1 ">$</span> 100/month</h3>
                                <div className="my-5 font-weight-bold fz-1">
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                </div>
                                <button className="btn-grad-warning shadow w-100 py-1 font-weight-bold round-sm"> BUY NOW</button>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="py-4 px-5 text-center bg-abbyss round-sm">
                                <h4 className="font-weight-bold">Package B</h4>
                                <hr />
                                <h3> <span className="p-0 mt-0 mb-auto fz-1 ">$</span> 100/month</h3>
                                <div className="my-5 font-weight-bold fz-1">
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                </div>
                                <button className="btn-grad-warning shadow w-100 py-1 font-weight-bold round-sm"> BUY NOW</button>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="py-4 px-5 text-center bg-abbyss round-sm">
                                <h4 className="font-weight-bold">Package C</h4>
                                <hr />
                                <h3> <span className="p-0 mt-0 mb-auto fz-1 ">$</span> 100/month</h3>
                                <div className="my-5 font-weight-bold fz-1">
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                    <p> <i className="fa fa-check" /> Benefit Point Here</p>
                                </div>
                                <button className="btn-grad-warning shadow w-100 py-1 font-weight-bold round-sm"> BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="w-100" src={group} alt="" />
            </div>
        </div>
    )
}

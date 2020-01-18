import React from 'react'

import hr1 from '../../assets/img/hr-1.png'
import igIcon from '../../assets/img/ig-icon.png'
import bgLaptop from '../../assets/img/laptop.png'

export const HomeDescription = () => {
    return (
        <div className="p-3 w-100 page-section " id="section-2">
            <div className="container">
                <p className="text-blue fz-2">Why you must advertis<br /><b> at AJAR.id</b></p>
                <img src={hr1} width={150} height={5} alt="" />
                <div className="row mt-4">
                    <div className="content-landing container w-50 row text-center">
                        <div className="col-sm-4">
                            <img className="rounded-circle w-75 mb-3" src={igIcon} alt="image" />
                            <b>Niche Audience</b>
                        </div>
                        <div className="col-sm-4">
                            <img className="rounded-circle w-75 mb-3 " src={igIcon} alt="image" />
                            <b>Quality Traffic</b>
                        </div>
                        <div className="col-sm-4">
                            <img className="rounded-circle w-75 mb-3" src={igIcon} alt="image" />
                            <b>Tracking Engine</b>
                        </div>
                        <div className="text-content-landing ml-0 container-fluid my-5 ">
                            <p className="fz-1 text-left">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                diam
                                nonummy
                                nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                veniam,
                                quis
                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                consequat.
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                consequat,
                                    vel illum dolore eu feugiat </p>
                        </div>
                        <img className="laptop-bg w-50" src={bgLaptop} alt="laptop" />
                    </div>
                </div>
            </div>
        </div>

    )
}

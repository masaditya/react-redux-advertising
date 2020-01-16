import React from 'react'

export const HomePage = () => {
    return (
        <div id="section-1" className="bg-landing w-100 page-section text-center py-5">
            <div style={{ padding: '10% 0' }} className="container my-auto">
                <div className="text-center p-5">
                    <h1 className="text-white font-weight-bold"> Reach more people with <br />
                        AJAR Ads</h1>
                    <button className="btn-grad-warning px-4 py-2 btn-rounded">
                        <a className="text-white text-decoration-none" href="#section-2">Get Your Ads on Ajar</a></button>
                </div>
            </div>
            <a href="#section-2" className=" fas fa-angle-down fa-4x text-decoration-none" aria-hidden="true" />
        </div>
    )
}

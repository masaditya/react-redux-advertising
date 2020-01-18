import React from 'react'

const PaymentSlideshow = () => {
    return (
        <div id="demo" className="carousel slide payment" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators ">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner h-50">
                <div className="carousel-item active h-75">
                    <p>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri
                                    percetakan dan penataan huruf atau typesetting</p>
                </div>
                <div className="carousel-item  h-75">
                    <p>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri
                                    percetakan dan penataan huruf atau typesetting</p>
                </div>
                <div className="carousel-item h-75">
                    <p>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri
                                    percetakan dan penataan huruf atau typesetting</p>
                </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    )
}

export default PaymentSlideshow

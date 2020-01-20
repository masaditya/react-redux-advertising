import React from 'react'

export const HomeSlideShow = () => {
    return (
        <div style={{ backgroundColor: '#ffff' }}>
            <div id="demo" className="carousel  index slide text-center mx-auto h-25" data-ride="carousel">
                {/* Indicators */}

                <ul className="carousel-indicators pt-4">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner h-25 ">
                    <div className="carousel-item active ">
                        <div className="row m-0 px-0  justify-content-center w-100">
                            <img src={require('../../assets/img/image-38@3x.png')} alt="" />
                            <img src={require('../../assets/img/image-39@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-41@3x.jpg')} alt="" />
                        </div>
                        <div className="row m-0 px-0  justify-content-center  w-100">
                            <img src={require('../../assets/img/group-4387@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-42@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/group-4387@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-42@3x.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="row m-0 px-0  justify-content-center w-100">
                            <img src={require('../../assets/img/image-38@3x.png')} alt="" />
                            <img src={require('../../assets/img/image-39@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-41@3x.jpg')} alt="" />
                        </div>
                        <div className="row m-0 px-0  justify-content-center  w-100">
                            <img src={require('../../assets/img/group-4387@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-42@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/group-4387@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-42@3x.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="carousel-item  ">
                        <div className="row m-0 px-0  justify-content-center w-100">
                            <img src={require('../../assets/img/image-38@3x.png')} alt="" />
                            <img src={require('../../assets/img/image-39@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-41@3x.jpg')} alt="" />
                        </div>
                        <div className="row m-0 px-0  justify-content-center  w-100">
                            <img src={require('../../assets/img/group-4387@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-42@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/group-4387@3x.jpg')} alt="" />
                            <img src={require('../../assets/img/image-42@3x.jpg')} alt="" />
                        </div>
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
            <div className="w-100 text-center pb-4">
                <a className="btn btn-outline-primary btn-rounded mx-auto px-4" href>View More</a>
            </div>

        </div>

    )
}

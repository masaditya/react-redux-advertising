import React from 'react'
import bgBanner from '../../assets/img/banner-bg.jpg'


export const Banner = (props) => {
    return (
        <div style={{ backgroundImage: `url(${bgBanner})`, padding: '11% 7%' }} className="w-100  bg-dark text-white">
            <div className="container-fluid py-5">
                <h1 className="font-weight-bolder">  {props.title ? props.title : 'PAKET A'} </h1>
                <h4 className="mr-5 mt-4">Eager to learn more about DAN or simply want to say hello? Get in touch and we’ll be happy to answer all your questions.</h4>
            </div>
        </div>

    )
}

import React from 'react'
import { Banner } from '../../components/Banner'

export const Contact = () => {
    return (
        <div>

            <Banner title="CONTACT US" />

            <div>
                <div className="container text-center my-5">
                    <h1 className="font-weight-bold">GET IN TOUCH</h1>
                    <h3 className="px-5 mx-5">Want to find out how Ajar.Id can solve problems specific to your
                      business? Let's
                      talk.
    </h3>
                </div>
                <div className="container border">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <img src={require('../../assets/img/logo1.svg')} className="w-25" />
                            <h3 className="my-4">Our Office</h3>
                            <h5>ADDRESS</h5>
                            <p>Jalan Palagan, Pakem Sleman 555288</p>
                            <h5>OFFICE PHONE</h5>
                            <p>(021) 12345678</p>
                            <h5>EMAIL ADDRESS</h5>
                            <p>marketing@ajar.id</p>
                            <h5>SOCIAL MEDIA</h5>
                            <p><i className="fab fa-twitter-square fa-3x mx-2 text-primary" />
                                <i className="fab fa-facebook-square fa-3x text-abbyss" />
                            </p>
                        </div>
                        <div className="col-md-6 p-5">
                            <h3>Contact us for more information about working with Ajar.Id</h3>
                            <input className="input-field" type="text" placeholder="Your Name" />
                            <input className="input-field" type="text" placeholder="Your Company" />
                            <input className="input-field" type="text" placeholder="Phone" />
                            <input className="input-field" type="email" placeholder="Email" />
                            <textarea className="input-field" name="Message" placeholder="Message" id="message" cols={50} rows={5} defaultValue={""} />
                            <button className="btn btn-abbys">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.33806403888!2d112.56174189884811!3d-7.978469457595614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62822063dc2fb%3A0x78879446481a4da2!2sMalang%2C+Malang+City%2C+East+Java!5e0!3m2!1sen!2sid!4v1558724903920!5m2!1sen!2sid" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen>
                    </iframe>
                </div>
            </div>




        </div>
    )
}

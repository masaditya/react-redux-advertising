import React from 'react'

export const Transfer = () => {
    return (
        <div className="container px-5">
            <div className="text-center">
                <h3>LET’S FINISH POWERING YOU UP !</h3>
                <p>This Package is Right for You</p>
            </div>
            <hr />
            <div className="align-content-center ">
                <div className="list-group-item list-group-item-action py-0 w-75 mx-auto" id="bank-bca">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>BCA</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item list-group-item-action py-0 w-75 mx-auto" id="bank-mandiri">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Bank_Mandiri_logo.svg/1280px-Bank_Mandiri_logo.svg.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>Mandiri</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item list-group-item-action py-0 w-75 mx-auto" id="bank-bni">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>BNI</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item list-group-item-action py-0 w-75 mx-auto" id="bank-permata">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/4/48/PermataBank_logo.svg/1280px-PermataBank_logo.svg.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>Permata</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item list-group-item-action py-0 w-75 mx-auto" id="bank-other">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height={40} width="auto" src="https://image.flaticon.com/icons/svg/1899/1899722.svg" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>Other Bank</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

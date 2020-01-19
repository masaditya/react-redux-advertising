import React from 'react'

export const PaymentMethods = (props) => {
    return (
        <div className="container px-5">
            <div className="text-center">
                <h3>LET’S FINISH POWERING YOU UP !</h3>
                <p>This Package is Right for You</p>
            </div>
            <hr />
            <div id="payment-table" className="row">
                <div className="col-sm-6 border" onClick={() => props.handleMethods('CC')} id="cc-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>Credit Card</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 border" onClick={() => props.handleMethods('Transfer')} id="atm-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height={30} width={50} src="https://image.flaticon.com/icons/svg/1899/1899722.svg" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>ATM/Bank Transfer</b>
                            <br />
                            <small>Pay from ATM Bersama, Prima or Alto</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 border" onClick={() => props.handleMethods('GoPay')} id="gopay-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height={20} width={50} src="https://refrez.com/wp-content/uploads/bfi_thumb/logo-gopay-3283zttrcmrz21y5wyx9k1eevtsrj3azdndzvd61i1194tdl6.jpg" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>GO-PAY</b>
                            <br />
                            <small>Pay with your GO-PAY wallet</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 border" onClick={() => props.handleMethods('KlikBCA')} id="klikbca-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://i0.wp.com/pulsaseluler.com/blog/wp-content/uploads/limit-transfer-klikbca.jpg" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>KlikBCA</b>
                            <br />
                            <small>Pay from ATM Bersama, Prima or Alto</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 border" onClick={() => props.handleMethods('KlikPay')} id="klikpay-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height={30} width={50} src="https://www.hostnic.id/img/payment/logo_bcaklikpay.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>BCA KlikPay</b>
                            <br />
                            <small>Pay from ATM Bersama, Prima or Alto</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 border" onClick={() => props.handleMethods('Indomart')} id="indomart-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/2/28/Indomaret.png/1200px-Indomaret.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>Indomart</b>
                            <br />
                            <small>Pay from ATM Bersama, Prima or Alto</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 border" onClick={() => props.handleMethods('Alfamart')} id="alfamart-methods-payment">
                    <div className="row">
                        <div className="col-lg-2 py-2 my-auto text-center">
                            <img height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png" alt="atm" />
                        </div>
                        <div className="col-lg-9 py-2">
                            <b>Alfamart</b>
                            <br />
                            <small>Pay from ATM Bersama, Prima or Alto</small>
                        </div>
                        <div className="col-lg-1 my-auto ">
                            <i className="fa fa-angle-right float-right text-black-50" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

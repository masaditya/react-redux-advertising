import React from 'react'

export const CreditCard = () => {
    return (
        <div className="container">
            <li className="list-group-item bg-light border-0"><b> Order ID</b> <small className="float-right">sample-store-15682671</small>
            </li>
            <br />
            <li className="list-group-item border-0">
                <input className="fz-2 form-control border-0" type="text" name="cc-number" id="cc-number" placeholder="Card Number" />
                <hr className="m-0 p-0" />
            </li>
            <li className="list-group-item border-0">
                <div className="row">
                    <div className="border-right col-sm-7">
                        <input className="fz-2 form-control border-0" type="text" name="cc-number" id="cc-number" placeholder="Expiry date" />
                    </div>
                    <div className="border-left col-sm-5">
                        <input className="fz-2 form-control border-0" type="text" name="cc-number" id="cc-number" placeholder="CVV" />
                    </div>
                </div>
                <hr className="m-0 p-0" />
            </li>
            <li className="list-group-item border-left-0 border-right-0 bg-light text-black-50">
                <i className="fa fa-lock" aria-hidden="true" />
                <a href="/" className="mx-4">Midtrans secured payments</a>
            </li>
            <li className="list-group-item border-left-0 border-right-0 bg-light text-black-50 py-4">
                <div className="row">
                    <img className="mx-5" height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png" alt="atm" />
                    <img className="mx-5" height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png" alt="atm" />
                    <img className="mx-5" height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png" alt="atm" />
                    <img className="mx-5" height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png" alt="atm" />
                    <img className="mx-5" height="auto" width={50} src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png" alt="atm" />
                </div>
            </li>
            <div className="col-md-12 w-100 text-right mt-4">
                <button className=" btn btn-abbys px-5 py-2 font-weight-bold">
                    Continue
    </button>
            </div>
        </div>
    )
}

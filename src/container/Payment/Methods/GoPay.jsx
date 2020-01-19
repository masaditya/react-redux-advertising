import React from 'react'

export const GoPay = (props) => {
    return (
        <div className="container">
            <div className="text-center">
                <h3>LET’S FINISH POWERING YOU UP !</h3>
                <p>This Package is Right for You</p>
            </div>
            <hr />
            <div>
                <li className="list-group-item border-0 fz-2">
                    How to Pay?
      <img className="float-right" height={30} width="auto" src="https://refrez.com/wp-content/uploads/bfi_thumb/logo-gopay-3283zttrcmrz21y5wyx9k1eevtsrj3azdndzvd61i1194tdl6.jpg" alt="atm" />
                </li>
                <div className="alert alert-warning px-lg-5">
                    Please complete your <b>GO-PAY</b> payment via <b>GO-JEK</b> app
    </div>
                <div style={{ maxHeight: '250px', minHeight: '100px' }} className="border overflow-auto">
                    <li className="list-group-item border-left-0 border-right-0 fz-2 px-5">
                        1. CLik Pay Now With GO-PAY
      </li>
                    <li className="list-group-item border-left-0 border-right-0 fz-2 px-5">
                        2. Open GO-JEK app on your phone
      </li>
                    <li className="list-group-item border-left-0 border-right-0 fz-2 px-5">
                        1. CLik Pay Now With GO-PAY
      </li>
                    <li className="list-group-item border-left-0 border-right-0 fz-2 px-5">
                        2. Open GO-JEK app on your phone
      </li>
                    <li className="list-group-item border-left-0 border-right-0 fz-2 px-5">
                        1. CLik Pay Now With GO-PAY
      </li>
                    <li className="list-group-item border-left-0 border-right-0 fz-2 px-5">
                        2. Open GO-JEK app on your phone
      </li>
                </div>
                <hr />
                <div className="col-md-12 w-100 text-right mt-4">
                    <button className=" btn btn-abbys px-5 py-2 font-weight-bold" id="pay-gopay">
                        Pay Now with GO-PAY
      </button>
                </div>
            </div>
        </div>
    )
}

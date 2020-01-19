import React from 'react'

export const Alfamart = () => {
    return (
        <div className="p-5">
            <div className="pb-3">
                <sup className="text-primary pl-3 fz-2">amount</sup>
                <h1 className="text-primary font-weight-bold float-right"> <sup>Rp</sup> 20,000 </h1>
            </div>
            <hr className="mb-0" />
            <li className="list-group-item bg-light"><b> Order ID</b> <small className="float-right">sample-store-15682671</small>
            </li>
            <br />
            <div className="alert alert-info px-lg-5 fz-2">
                Please complete your payment at an Alfamart, Alfamidi, or Dan+Dan outlet before :
    <b> 09 September 15:18 WIB </b>
            </div>
            <li className="list-group-item border-0 fz-2"> <b >Payment Code</b> <span className=" float-right"> 9999123941348351
    </span>
            </li>
            <hr />
            <div className="col-md-12 w-100 text-right mt-4">
                <button className=" btn btn-abbys px-5 py-2 font-weight-bold">
                    COMPLETE PAYMENT AT ALFAMART
    </button>
            </div>
        </div >

    )
}

import React from 'react'

export const PaymentSection = (props) => {
    return (
        <div>
            <div className="container px-5">
                <div className="text-center">
                    <h3>LET’S FINISH POWERING YOU UP !</h3>
                    <p>This Package is Right for You</p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-7 pl-4">
                        <table className="payment-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Name of Product </p>
                                        <p>Price / Unit </p>
                                        <p>Total Unit </p>
                                        <p>Total Price</p>
                                        <p>Discount</p>
                                        <p>Tax (10%)</p>
                                        <p>Total Payment</p>
                                    </td>
                                    <td className="pl-5 payment-value font-weight-bold">
                                        <p>: Package A </p>
                                        <p>: IDR 1.000.000</p>
                                        <p>: 1 </p>
                                        <p>: IDR 1.000.000</p>
                                        <p>: 0</p>
                                        <p>: IDR 100.000</p>
                                        <p>: IDR 1.100.000</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-5 payment-radio">
                        <div className="bg-gray p-4">
                            <p className="font-weight-bold text-center">Customer Detail</p>
                            <table className="payment-table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>Name</p>
                                            <p>Email</p>
                                            <p>Telp</p>
                                            <p>Address</p>
                                            <p>City</p>
                                        </td>
                                        <td className="pl-5 payment-value font-weight-bold">
                                            <p>: Farid Angga Pribadi </p>
                                            <p>: farid.angga@gmail.com</p>
                                            <p>: 0851230094221 </p>
                                            <p>: Jalan Kapi Sraba No 22</p>
                                            <p>: Kota Malang</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-12 w-100 text-right mt-4">
                    <button onClick={() => props.nextStep()} id="checkout" className=" btn btn-abbys px-5 py-2 font-weight-bold">
                        CHECKOUT
                    </button>
                </div>
                <div className="col-md-12 mt-3">
                    <p>
                        (*) Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </div>
            </div>

        </div>
    )
}

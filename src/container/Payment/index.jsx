import React, { Component } from 'react'
import PaymentSlideshow from './PaymentSlideshow'
import { PaymentSection } from './PaymentSection'
import { PaymentMethods } from './PaymentMethods'

export default class Payment extends Component {


    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleMethods = () => {

    }

    render() {

        const { step } = this.state;


        let element = <div></div>;

        switch (step) {
            case 1:
                element = <PaymentSection nextStep={this.nextStep} />;
                break;
            case 2:
                element = <PaymentMethods handleMethods={this.handleMethods} />
                break;
            default:
                element = <div></div>;
                break;
        }

        return (
            <div>
                <div className="col-xl-12 p-0 m-0 w-100">
                    <div className="row w-100 m-0">
                        <div className="col-sm-4 m-0 p-0 ">
                            <PaymentSlideshow />
                        </div>

                        <div class="col-sm-8 pt-5 bg-white">
                            {element}
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

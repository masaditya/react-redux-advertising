import React, { Component } from 'react'
import { connect } from 'react-redux'
import FooterComponent from './FooterComponent'

export class Footer extends Component {
    render() {
        return (
            <div>
                <FooterComponent />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

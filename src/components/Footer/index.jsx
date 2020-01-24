import React, { Component } from 'react'
import { connect } from 'react-redux'
import FooterComponent from './FooterComponent'
import { FooterMark } from './FooterMark'

export class Footer extends Component {
    render() {
        return (
            <div>
                <FooterComponent />
                <FooterMark />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

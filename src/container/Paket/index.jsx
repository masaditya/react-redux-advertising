import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Banner } from '../../components/Banner'

export class Paket extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Banner />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Paket)

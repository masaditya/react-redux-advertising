import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Paket extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    Paket
                </h1>
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

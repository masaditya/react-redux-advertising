import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Paket extends Component {
    render() {
        return (
            <div>
                <h1>
                    Paket
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Paket)

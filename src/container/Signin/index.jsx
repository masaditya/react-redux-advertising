import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Signin extends Component {
    render() {
        return (
            <div>
                <h1>Sign in</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

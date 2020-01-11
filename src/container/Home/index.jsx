import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello Home!</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('masok')
    return {}
}

export default connect(mapStateToProps)(Home);


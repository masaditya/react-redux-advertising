import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello Home! {this.props.channels[0].name} </h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('masok')
    return {
        channels: state.channels
    }
}

export default connect(mapStateToProps)(Home);


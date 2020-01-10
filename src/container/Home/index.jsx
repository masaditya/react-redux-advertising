import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Body</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

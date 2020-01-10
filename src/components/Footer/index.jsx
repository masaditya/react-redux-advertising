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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

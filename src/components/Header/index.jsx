import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from './HeaderComponent'

export class Header extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

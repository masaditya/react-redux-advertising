import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from './HeaderComponent'
import NavigationComponents from './NavigationComponents'

export class Header extends Component {
    render() {

        console.log(this.props.location);
        return (
            <div>
                <HeaderComponent />
                <NavigationComponents />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

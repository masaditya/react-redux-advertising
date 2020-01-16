import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomePage } from './HomePage'
import { HomeDescription } from './HomeDescription'
import { HomePackage } from './HomePackage'
import bgShapes from '../../assets/img/fix-splash.svg'
import { HomeSlideShow } from './HomeSlideShow'


class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <HomePage />

                <div style={{ backgroundImage: `url(${bgShapes})`, backgroundSize: 'cover', padding: 0, backgroundRepeat: 'no-repeat' }}>

                    <HomeDescription />
                    <HomePackage />

                </div>

                <HomeSlideShow />
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


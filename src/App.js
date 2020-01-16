import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AppRouter } from './components/AppRouter'


export class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    const isNotAuthPath = this.props.location.pathname !== '/signup' && this.props.location.pathname !== '/login'
    return (
      <div>

        {
          isNotAuthPath && <Header />
        }


        <AppRouter />


        <Footer />


      </div>
    )
  }
}

const mapStateToProps = (state) => {

  console.log(state)
  return {}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

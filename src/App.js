import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './container/Home/index.jsx'
import { Paket } from './container/Paket'
import { Signin } from './container/Signin'


export class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    console.log(this.state);
    const isNotAuthPath = this.props.location.pathname !== '/signin' && this.props.location.pathname !== '/login'
    console.log(isNotAuthPath)
    return (
      <div>

        {
          isNotAuthPath && <Header />
        }

        <React.Fragment >

          <Route path="/" exact component={Home} />
          <Route path="/paket" component={Paket} />
          <Route path="/signin" component={Signin} />

        </React.Fragment >

        {
          isNotAuthPath && <Footer />
        }


      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

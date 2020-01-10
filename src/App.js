import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Footer } from './components/Footer'

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Headers />
        <Route exact path="/" component={} />
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

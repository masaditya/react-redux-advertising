import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import NavigationComponents from "./NavigationComponents";

export class Header extends Component {
  render() {
    let pathName = this.props.location.pathname;
    let boolPath = pathName.includes("/dashboard");
    return (
      <div>
        <HeaderComponent />

        {!boolPath ? <NavigationComponents /> : ""}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

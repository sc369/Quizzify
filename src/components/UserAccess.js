import React, { Component } from 'react';
import Nav from './nav/Nav'
import ApplicationViews from "./ApplicationViews"
import Login from "./Login/Login"
import Register from "./Login/Register"

class UserAccess extends Component {
  render() {
    // if user is logged in
    if (isNaN(parseInt((sessionStorage.getItem("userInfo")))) === false) {
      return (
        <React.Fragment>
          <Nav />
          <ApplicationViews />
        </React.Fragment>
      )
    } else if (sessionStorage.getItem("userInfo") === "Registering") {

      return (
        <Register>
        </Register>
      )

    } else return (
      <Login>
      </Login>
    )

  }
}

export default UserAccess


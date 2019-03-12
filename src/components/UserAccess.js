import React, { Component } from 'react';
import Nav from './nav/Nav'
import ApplicationViews from "./ApplicationViews"

export default class UserAccess extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}



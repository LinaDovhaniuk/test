import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';

import Login from "./components/Login";
import Registration from "./components/Registration";
import UserPage from "./containers/UserPage";

import Navigation from "./containers/Navigation";
import Box from "@material-ui/core/Box";


class App extends Component {

  render () {
      const { auth = false } = this.props;

    return (
        <Box>
          <Navigation/>

            { !auth ? (
                <Switch>
                  <Route exact component = { Login } path = '/login' />
                  <Route exact component = { Registration } path = '/register' />
                  <Redirect to= '/login'/>
                </Switch>
            ) : (
                <Switch>
                  <Route exact component = { UserPage } path = {`/cv`} />

                  <Redirect to= '/cv'/>
                </Switch>
            ) }

        </Box>
    );
  }
}

const mapStateToProps = ({ userData: { auth }}) => ({
    auth,
});

export default withRouter(connect(mapStateToProps)(App));

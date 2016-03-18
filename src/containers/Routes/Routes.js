'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/mapping';
import { connect } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import * as types from '../../reducers/Bet/types';

import Layout from '../Layout/Layout';
import Home from '../Home/Home';

export class Routes extends React.Component {

  componentDidMount() {
    if (this.props.load) {
      this.props.load(types.SETTLEDSTART);
      this.props.load(types.UNSETTLEDSTART);
    }
  }

  render() {
    return (
      <Router history={hashHistory} className="routes">
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

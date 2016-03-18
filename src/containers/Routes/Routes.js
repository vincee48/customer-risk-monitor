'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/mapping';
import { connect } from 'react-redux';
import * as types from '../../reducers/Bet/types';

import './Routes.less';

export class Routes extends React.Component {

  componentDidMount() {
    if (this.props.load) { 
      this.props.load(types.SETTLEDSTART);
      this.props.load(types.UNSETTLEDSTART);
    }
  }

  render() {
    return (
      <div className="routes">
        Routes
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

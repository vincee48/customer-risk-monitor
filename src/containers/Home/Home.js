'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/mapping';
import { connect } from 'react-redux';

import './Home.less';

export class Home extends React.Component {

  render() {
    return (
      <div className="home">
        Hello World
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

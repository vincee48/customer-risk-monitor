'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/mapping';
import { connect } from 'react-redux';

import './Layout.less';

export const Layout = (props) => {
  return (
    <div className="layout container">
      { props.children }
    </div>
  );
};

export default Layout;

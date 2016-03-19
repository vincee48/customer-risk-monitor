'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/mapping';
import { connect } from 'react-redux';

import CustomerList from '../../components/CustomerList/CustomerList';
import CustomerView from '../../components/CustomerView/CustomerView';

import './Home.less';

export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: {}
    };

    this.selectCustomer = this.selectCustomer.bind(this);
  }

  selectCustomer(customer) {
    this.setState({
      selectedCustomer: customer
    });
  }

  render() {
    const { state } = this.props;

    return (
      <div className="home">
        <div className="col-sm-5">
          <CustomerList customers={state.Bet.customers} selectedCustomer={this.state.selectedCustomer} onClick={this.selectCustomer} />
        </div>
        <div className="col-sm-7">
          <CustomerView customer={this.state.selectedCustomer} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

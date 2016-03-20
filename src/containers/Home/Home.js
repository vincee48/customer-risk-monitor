'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/mapping';
import { connect } from 'react-redux';

import CustomerList from '../../components/CustomerList/CustomerList';
import CustomerView from '../../components/CustomerView/CustomerView';
import BetList from '../../components/BetList/BetList';
import RiskBadge from '../../components/RiskBadge/RiskBadge';

import './Home.less';

export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: {}
    };

    this.selectCustomer = this.selectCustomer.bind(this);
    this.showBetView = this.showBetView.bind(this);
  }

  selectCustomer(customer) {
    this.setState({
      selectedCustomer: customer
    });
  }

  showBetView() {
    return (
      Object.keys(this.state.selectedCustomer).length !== 0 ? (
        <div className="row">
          <div className="col-md-6">
            <BetList
            title={<h3><i className="fa fa-history" /> Settled</h3>}
            headers={['Event','Participant','Stake','Win']}
            bets={this.state.selectedCustomer.settled}
            customer={this.state.selectedCustomer} />
          </div>
          <div className="col-md-6">
            <BetList
            title={<h3><i className="fa fa-calendar" /> Unsettled <div className="pull-right"><RiskBadge customer={this.state.selectedCustomer} /></div></h3>}
            headers={['Event','Participant','Stake','To Win']}
            bets={this.state.selectedCustomer.unsettled}
            customer={this.state.selectedCustomer} />
          </div>
        </div>
      ) : null
    );
  }

  render() {
    const { state } = this.props;

    return (
      <div className="home">
        <h1>Risk Monitor</h1>
        <hr/>

        <div className="row">
          <div className="col-sm-5">
            <CustomerList customers={state ? state.Bet.customers : {}} selectedCustomer={this.state.selectedCustomer} onClick={this.selectCustomer} />
          </div>
          <div className="col-sm-7">
            <CustomerView customer={this.state.selectedCustomer} />
          </div>
        </div>

        { this.showBetView() }
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

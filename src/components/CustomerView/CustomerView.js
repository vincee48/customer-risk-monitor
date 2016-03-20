/* @flow */
'use strict';

import React from 'react';

import './CustomerView.less';

import RiskBadge from '../RiskBadge/RiskBadge';

const customerView = (props) => {

  const winRateClass = props.customer.atRisk ? 'background-danger' : null;

  return (
    <div className="customer-view">
      {
        Object.keys(props.customer).length !== 0 ?
        <div className="row">
          <div className="col-sm-12">
            <div className="flex-row">
              <div className="pull-left">
                <span className="header">{props.customer.ID}</span>
              </div>
              <div className="pull-right">
                <RiskBadge customer={props.customer} />
              </div>
            </div>
            <hr/>
            <table className="table table-condensed">
              <thead>
                <tr><th></th><th>Statistics</th></tr>
              </thead>
              <tbody>
                <tr><th>Bets</th><td>{props.customer.totalSettledBets}</td></tr>
                <tr><th>Total Settled Wins</th><td>{props.customer.totalSettledWins}</td></tr>
                <tr className={winRateClass}><th>Win Rate</th><td>{(props.customer.winRate*100).toFixed(2)}%</td></tr>
                <tr><th>Total Stakes</th><td>${props.customer.totalSettledStakes.toFixed(2)}</td></tr>
                <tr><th>Average Settled Bets</th><td>${props.customer.averageSettledStakes.toFixed(2)}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        :
        <div className="text-center">
          No customer selected
        </div>
      }
    </div>
  )
};

customerView.propTypes = {
  customer: React.PropTypes.object
};

customerView.defaultProps = {
  customer: {}
};

export const CustomerView = customerView;
export default CustomerView;

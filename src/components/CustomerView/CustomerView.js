/* @flow */
'use strict';

import React from 'react';

import './CustomerView.less';

const CustomerView = (props) => {

  const winRateClass = props.customer.winRate > 0.6 ? 'danger' : null;

  return (
    <div className="customer-view">
      {
        Object.keys(props.customer).length !== 0 ?
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-condensed">
              <thead><th></th><th>Statistics</th></thead>
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

CustomerView.propTypes = {
  customer: React.PropTypes.object
};

CustomerView.defaultProps = {
  customer: {}
};

export default CustomerView;

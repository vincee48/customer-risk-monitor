/* @flow */
'use strict';

import React from 'react';

import './BetList.less';

const betList = (props) => {
  return (
    <div className="bet-list">
      { props.title }
      <hr/>
      <table className="table table-condensed">
        <thead>
          <tr>
            {
              props.headers.map((header, i) => {
                return <th key={i}>{header}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            props.bets.map((bet, i) => {
              let flag;
              if (bet['Stake']) {
                if (bet['Stake'] > (props.customer.averageSettledStakes * 30)) {
                  flag = 'background-danger';
                } else if (bet['Stake'] > (props.customer.averageSettledStakes * 10)) {
                  flag = 'background-warning';
                } else if (bet['To Win'] >= 1000) {
                  flag = 'brand-primary';
                }
              }

              return (
                <tr key={i} className={flag}>
                  {
                    props.headers.map((header, j) => {
                      return <td key={j}>{bet[header]}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

betList.propTypes = {
  bets: React.PropTypes.array,
  headers: React.PropTypes.array,
  title: React.PropTypes.element,
  customer: React.PropTypes.object
};

betList.defaultProps = {
  bets: [],
  headers: [],
  title: <h3></h3>,
  customer: {}
};

export const BetList = betList;
export default BetList;

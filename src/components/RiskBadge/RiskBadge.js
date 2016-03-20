/* @flow */
'use strict';

import React from 'react';

import './RiskBadge.less';

const riskBadge = (props) => {
  return (
    <div className="risk-badge">
      {
        props.customer.atRisk ?
        (props.mini ? <i className="fa fa-exclamation-triangle" /> : <div className="badge background-danger"><i className="fa fa-exclamation-triangle" /> High Risk</div> )
        : null
      }
      {
        props.customer.unsettled.filter((bet) => {
          return bet.Stake > (props.customer.averageSettledStakes * 30)
        }).length > 0 ?
        (props.mini ? <i className="fa fa-question-circle" /> : <div className="badge background-danger"><i className="fa fa-question-circle" /> Highly Unusual</div> )
        : null
      }
      {
        props.customer.unsettled.filter((bet) => {
          return (bet.Stake > (props.customer.averageSettledStakes * 10)) && !(bet.Stake > (props.customer.averageSettledStakes * 30))
        }).length > 0 ?
        (props.mini ? <i className="fa fa-question-circle" /> : <div className="badge background-warning"><i className="fa fa-question-circle" /> Unusual</div> )
        : null
      }
      {
        props.customer.unsettled.filter((bet) => {
          return bet['To Win'] >= 1000
        }).length > 0 ?
        (props.mini ? <i className="fa fa-money" /> : <div className="badge brand-primary"><i className="fa fa-money" /> > $1000</div> )
        : null
      }
    </div>
  )
};

riskBadge.propTypes = {
  customer: React.PropTypes.object,
  mini: React.PropTypes.bool
};

riskBadge.defaultProps = {
  customer: {
    unsettled: []
  },
  mini: false
};

export const RiskBadge = riskBadge;
export default RiskBadge;

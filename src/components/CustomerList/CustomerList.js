/* @flow */
'use strict';

import React from 'react';
import './CustomerList.less';
import RiskBadge from '../RiskBadge/RiskBadge';

const customerList = (props) => {
  return (
    <ul className="customer-list list-group">
      {
        Object.keys(props.customers).map((key, i) => {
          const customer = props.customers[key];
          const listClass = 'list-group-item ' + (props.selectedCustomer === customer ? 'brand-primary' : '');
          return (
            <li className={listClass} key={i} onClick={() => props.onClick(customer)}>
              <div className="pull-left">
                <i className="fa fa-user" /> {key}
              </div>
              <div className="pull-right">
                <RiskBadge customer={customer} mini />
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

customerList.propTypes = {
  customers: React.PropTypes.object,
  selectedCustomer: React.PropTypes.object,
  onClick: React.PropTypes.func
};

customerList.defaultProps = {
  customers: {},
  selectedCustomer: {},
  onClick: () => {}
};

export const CustomerList = customerList;
export default CustomerList;

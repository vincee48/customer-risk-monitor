/* @flow */
'use strict';

import React from 'react';

import './CustomerList.less';

const CustomerList = (props) => {
  return (
    <div className="customer-list">
      {
        Object.keys(props.customers).map((key, i) => {
          const customer = props.customers[key];
          const btnClass = 'btn btn-block ' + (props.selectedCustomer === customer ? 'btn-primary' : 'btn-default');
          return (
            <div className="row" key={i}>
              <button className={btnClass} onClick={() => props.onClick(customer)}>
                <i className="fa fa-user" /> {key}
              </button>
            </div>
          )
        })
      }
    </div>
  )
};

CustomerList.propTypes = {
  customers: React.PropTypes.object,
  selectedCustomer: React.PropTypes.object,
  onClick: React.PropTypes.func
};

export default CustomerList;

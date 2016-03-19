/* @flow */
import * as types from './types';

/*
 *  Timeboxed workaround as dsv-loader causes issues with mocha
 *  Permanent solution is to load the dsv-loader and mocha in webpack before running tests
 */
try {
  var Settled = require('../../data/Settled.csv');
  var Unsettled = require('../../data/Unsettled.csv');
} catch (e) {
  console.log(e);
}

/*
 *  Dispatches a load event for the type passed in
 *  We'll map unsettled and settled records into an array for each customer
 */
export function load(type) {
  return dispatch => {
    dispatch(start(type));

    switch (type) {
      case types.SETTLEDSTART:
        let settled = {};
        Settled.forEach((bet) => {
          if (!settled[bet.Customer]) {
            settled[bet.Customer] = [];
          }

          settled[bet.Customer].push(bet);
        });
        dispatch(complete(types.SETTLEDCOMPLETE, settled));
        break;
      case types.UNSETTLEDSTART:
        let unsettled = {};
        Unsettled.forEach((bet) => {
          if (!unsettled[bet.Customer]) {
            unsettled[bet.Customer] = [];
          }

          unsettled[bet.Customer].push(bet);
        });
        dispatch(complete(types.UNSETTLEDCOMPLETE, unsettled));
        break;
    }
  }
}

/*
 *  Start the dispatcher asynchronous event
 */
export function start(type) {
  return {
    type: type
  };
}

/*
 *  Completes the dispatcher asynchronous event
 */
export function complete(type, records) {
  return {
    type: type,
    records: records
  };
}

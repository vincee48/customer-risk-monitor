/* @flow */
import * as types from './types';

/*
 *  Timeboxed workaround as dsv-loader causes issues with mocha
 *  Permanent solution is to load the dsv-loader and mocha in webpack before running tests
 */
try {
  var Settled = require.resolve('dsv!../../data/Settled.csv');
  var Unsettled = require.resolve('dsv!../../data/Unsettled.csv');
} catch (e) {
  console.log(e);
}

/*
 *  Dispatches a load event for the type passed in
 */
export function load(type) {
  return dispatch => {
    dispatch(start(type));

    switch (type) {
      case types.SETTLEDSTART:
        dispatch(complete(type, Settled));
        break;
      case types.UNSETTLEDSTART:
        dispatch(complete(type, Unsettled));
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

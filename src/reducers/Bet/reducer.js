/* @flow */
'use strict';

import * as types from './types';

const initialState = {
  loading: {},
  settled: [],
  unsettled: []
};

export default function Bet(state = initialState, action = {}) {
  switch (action.type) {
    case types.SETTLEDSTART:
      return {
        ...state,
        loading: {
          ...state.loading,
          settled: true
        }
      };
    case types.SETTLEDCOMPLETE:
      return {
        ...state,
        loading: {
          ...state.loading,
          settled: false
        },
        settled: action.records
      };
    case types.UNSETTLEDSTART:
      return {
        ...state,
        loading: {
          ...state.loading,
          unsettled: true
        }
      };
    case types.UNSETTLEDCOMPLETE:
      return {
        ...state,
        loading: {
          ...state.loading,
          unsettled: false
        },
        unsettled: action.records
      };
    default:
      return state;
  }
}

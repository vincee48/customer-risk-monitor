/* @flow */
'use strict';

import * as types from './types';

const initialState = {
  loading: {},
  customers: {}
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
      let customersSettled = {...state.customers};
      Object.keys(action.records).forEach((key) => {
        if (!customersSettled[key]) {
          customersSettled[key] = {}
        }

        // Set up statistics
        customersSettled[key].ID = key;
        customersSettled[key].settled = action.records[key];
        customersSettled[key].totalSettledBets = action.records[key].length;
        customersSettled[key].totalSettledWins = action.records[key].filter((bet) => {
          return bet.Win > 0;
        }).length;
        let totalStakes = 0;
        action.records[key].forEach((bet) => {
          totalStakes += parseFloat(bet.Stake);
        });
        customersSettled[key].totalSettledStakes = totalStakes;
        customersSettled[key].averageSettledStakes = customersSettled[key].totalSettledStakes / customersSettled[key].totalSettledBets;
        customersSettled[key].winRate = customersSettled[key].totalSettledWins / customersSettled[key].totalSettledBets;
        customersSettled[key].atRisk = customersSettled[key].winRate > 0.6;
      });

      return {
        ...state,
        loading: {
          ...state.loading,
          settled: false
        },
        customers: customersSettled
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
      var customersUnsettled = {...state.customers};
      Object.keys(action.records).forEach((key) => {
        if (!customersUnsettled[key]) {
          customersUnsettled[key] = {}
        }
        customersUnsettled[key].unsettled = action.records[key];
      });

      return {
        ...state,
        loading: {
          ...state.loading,
          unsettled: false
        },
        customers: customersUnsettled
      };
    default:
      return state;
  }
}

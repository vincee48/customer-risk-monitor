import { expect } from 'chai'
import reducer from './reducer';
import * as types from './types'

describe('Bet Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      loading: {},
      customers: {}
    });
  });

  it('should handle SETTLEDSTART', () => {
    expect(reducer(undefined, {
      type: types.SETTLEDSTART
    })).to.eql({
      loading: {
        settled: true
      },
      customers: {}
    });
  });

  it('should handle UNSETTLEDSTART', () => {
    expect(reducer(undefined, {
      type: types.UNSETTLEDSTART
    })).to.eql({
      loading: {
        unsettled: true
      },
      customers: {}
    });
  });

  it('should handle SETTLEDCOMPLETE', () => {
    expect(reducer(undefined, {
      type: types.SETTLEDCOMPLETE,
      records: { 1: [{ Customer: '1' }] }
    })).to.eql({
      loading: {
        settled: false
      },
      customers: {
        1: {
          ID: '1',
          averageSettledStakes: NaN,
          settled: [{ Customer: '1' }],
          totalSettledBets: 1,
          totalSettledStakes: NaN,
          totalSettledWins: 0,
          winRate: 0,
          atRisk: false
        }
      }
    });
  });

  it('should handle UNSETTLEDCOMPLETE', () => {
    expect(reducer(undefined, {
      type: types.UNSETTLEDCOMPLETE,
      records: { 1: ['unsettled'] }
    })).to.eql({
      loading: {
        unsettled: false
      },
      customers: {
        1: {
          unsettled: ['unsettled']
        }
      }
    });
  });

  it('should calculate risk factor', () => {
    expect(reducer(undefined, {
      type: types.SETTLEDCOMPLETE,
      records: { 1: [{ Customer: '1', Win: 10 }] }
    })).to.eql({
      loading: {
        settled: false
      },
      customers: {
        1: {
          ID: '1',
          averageSettledStakes: NaN,
          settled: [{ Customer: '1', Win: 10 }],
          totalSettledBets: 1,
          totalSettledStakes: NaN,
          totalSettledWins: 1,
          winRate: 1,
          atRisk: true
        }
      }
    });
  });
});

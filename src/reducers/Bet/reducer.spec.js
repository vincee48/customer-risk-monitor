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
          settled: [{ Customer: '1' }]
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
});

import { expect } from 'chai'
import reducer from './reducer';
import * as types from './types'

describe('Bet Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      loading: {},
      settled: [],
      unsettled: []
    });
  });

  it('should handle SETTLEDSTART', () => {
    expect(reducer(undefined, {
      type: types.SETTLEDSTART
    })).to.eql({
      loading: {
        settled: true
      },
      settled: [],
      unsettled: []
    });
  });

  it('should handle UNSETTLEDSTART', () => {
    expect(reducer(undefined, {
      type: types.UNSETTLEDSTART
    })).to.eql({
      loading: {
        unsettled: true
      },
      settled: [],
      unsettled: []
    });
  });

  it('should handle SETTLEDCOMPLETE', () => {
    expect(reducer(undefined, {
      type: types.SETTLEDCOMPLETE,
      records: ['settled']
    })).to.eql({
      loading: {
        settled: false
      },
      settled: ['settled'],
      unsettled: []
    });
  });

  it('should handle UNSETTLEDCOMPLETE', () => {
    expect(reducer(undefined, {
      type: types.UNSETTLEDCOMPLETE,
      records: ['unsettled']
    })).to.eql({
      loading: {
        unsettled: false
      },
      settled: [],
      unsettled: ['unsettled']
    });
  });
});

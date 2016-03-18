import { expect } from 'chai'
import * as actions from './actions';
import * as types from './types'

describe('Bet Actions', () => {
  it('should create an action to start loading', () => {
    const expectedAction = {
      type: types.SETTLEDSTART
    };
    expect(actions.start(types.SETTLEDSTART)).to.eql(expectedAction);
  });

  it('should create an action to complete loading', () => {
    const expectedAction = {
      type: types.SETTLEDCOMPLETE
    };
    expect(actions.start(types.SETTLEDCOMPLETE)).to.eql(expectedAction);
  });
});

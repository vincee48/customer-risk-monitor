import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { BetList } from './BetList';

describe('BetList', function() {
  it('contains className of component', function() {
    expect(shallow(<BetList />).is('.bet-list')).to.equal(true);
  });

  it('contains only one className of component', function() {
    expect(mount(<BetList />).find('.bet-list').length).to.equal(1);
  });

  it('flags a bet as unusual', function() {
    expect(shallow(<BetList customer={{averageSettledStakes: 1}} bets={[{ Stake: 11 }]} />).find('.background-warning').length).to.equal(1);
  });

  it('flags a bet as highly unusual', function() {
    expect(shallow(<BetList customer={{averageSettledStakes: 1}} bets={[{ Stake: 31 }]} />).find('.background-danger').length).to.equal(1);
  });
});

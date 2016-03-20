import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { RiskBadge } from './RiskBadge';

describe('RiskBadge', function() {
  it('contains className of component', function() {
    expect(shallow(<RiskBadge />).is('.risk-badge')).to.equal(true);
  });

  it('contains only one className of component', function() {
    expect(mount(<RiskBadge />).find('.risk-badge').length).to.equal(1);
  });

  it('should display mini version', function() {
    expect(mount(<RiskBadge mini customer={
      {
        unsettled: [],
        atRisk: true
      }
    } />).find('.badge').length).to.equal(0);
  });

  it('should display badge version', function() {
    expect(mount(<RiskBadge customer={
      {
        unsettled: [],
        atRisk: true
      }
    } />).find('.badge').length).to.equal(1);
  });

  it('should display unusual flag', function() {
    expect(mount(<RiskBadge customer={
      {
        averageSettledStakes: 1,
        unsettled: [{
          Stake: 11
        }]
      }
    } />).find('.badge').length).to.equal(1);
  });

  it('should display highly unusual flag', function() {
    expect(mount(<RiskBadge customer={
      {
        averageSettledStakes: 1,
        unsettled: [{
          Stake: 31
        }]
      }
    } />).find('.badge').length).to.equal(1);
  });
});

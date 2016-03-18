import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Routes } from './Routes';

describe('Routes', function() {
  it('contains className of component', function() {
    expect(shallow(<Routes />).is('.routes')).to.equal(true);
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Home from './Home';

describe('Home', function() {
  it('contains className of component', function() {
    expect(shallow(<Home />).is('.home')).to.equal(true);
  });

  it('contains only one className of component', function() {
    expect(mount(<Home />).find('.home').length).to.equal(1);
  });
});

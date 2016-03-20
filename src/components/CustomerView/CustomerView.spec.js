import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { CustomerView } from './CustomerView';

describe('CustomerView', function() {
  it('contains className of component', function() {
    expect(shallow(<CustomerView />).is('.customer-view')).to.equal(true);
  });

  it('contains only one className of component', function() {
    expect(mount(<CustomerView />).find('.customer-view').length).to.equal(1);
  });
});

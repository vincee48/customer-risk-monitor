import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { CustomerList } from './CustomerList';

describe('CustomerList', function() {
  it('contains className of component', function() {
    expect(shallow(<CustomerList />).is('.customer-list')).to.equal(true);
  });

  it('contains only one className of component', function() {
    expect(mount(<CustomerList />).find('.customer-list').length).to.equal(1);
  });
});

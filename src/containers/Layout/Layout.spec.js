import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Layout } from './Layout';

describe('Layout', function() {
  it('contains className of component', function() {
    expect(shallow(<Layout />).is('.layout')).to.equal(true);
  });

  it('contains only one className of component', function() {
    expect(mount(<Layout />).find('.layout').length).to.equal(1);
  });
});

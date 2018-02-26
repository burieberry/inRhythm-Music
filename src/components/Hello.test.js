import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Hello from './App';

describe('Hello', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders one div component', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});

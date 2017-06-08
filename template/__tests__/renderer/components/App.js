import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../../src/renderer/components/App';

describe('Label component', () => {
  const createDOM = (props = {}) => shallow(<App {...props} />);

  it('should render self and subcomponents', () => {
    const wrapper = createDOM();

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render children', () => {
    const wrapper = createDOM({
      children: <h1>hello</h1>
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '../../../../src/renderer/components/pages/Login';

describe('Login component', () => {
  const createDOM = (props = {}) => mount(<Login {...props} />);

  it('should render self and subcomponents', () => {
    const wrapper = createDOM();

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render props', () => {
    const wrapper = createDOM({ mail: '--mail' });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should ', () => {
    const wrapper = createDOM({ login: jest.fn() });
    const buttonProps = wrapper.find('button').props();

    buttonProps.onClick();

    const loginMock = wrapper.props().login.mock;

    expect(loginMock.calls.length).toEqual(1);
    expect(typeof loginMock.calls[0][0]).toEqual('string');
  });
});

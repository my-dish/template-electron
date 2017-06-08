import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from '../../src/renderer/routes';
import rootReducer from '../../src/renderer/reducers';

describe('routes', () => {
  const createDOM = (path = '/') => {
    const state = createStore(rootReducer).getState();
    const store = configureStore()(state);

    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
  };

  it('should render the root page', () => {
    expect(toJson(createDOM())).toMatchSnapshot();
  });


  it('should render the login page', () => {
    expect(toJson(createDOM('/login'))).toMatchSnapshot();
  });
});

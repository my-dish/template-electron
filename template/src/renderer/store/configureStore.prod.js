// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import { createMemoryHistory as createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import mySaga from '../sagas';

import type { State } from '../types/states';

export const history = createHistory();

const saga = createSaga();

const enhancer = compose(applyMiddleware(
  saga,
  routerMiddleware(history)
));

const configureStore = (initialState?: State) => {
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);

  return store;
};

export default configureStore;

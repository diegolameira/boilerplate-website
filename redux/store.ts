import { createStore, applyMiddleware } from 'redux';
import withRedux from 'next-redux-wrapper';
import { rootReducer } from 'fast-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';

const initialState = {
  count: 0
};

const sagaMiddleware = createSagaMiddleware();

const bindMiddlewares = middlewares => {
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({ collapsed: true });
    return composeWithDevTools(applyMiddleware(logger, ...middlewares));
  }
  return applyMiddleware(...middlewares);
};

export const initStore = (state = initialState) => {
  const store = createStore(
    rootReducer,
    state,
    bindMiddlewares([sagaMiddleware])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return store;
};

export const reduxPage = comp => withRedux(initStore)(comp);

// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = (canUseDOM && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger'); //eslint-disable-line
  const logger = createLogger();
  middlewares.push(logger);
}

export default function configureStore(initialState: any = {}) {
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));
  sagaMiddleware.run(rootSaga);
  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

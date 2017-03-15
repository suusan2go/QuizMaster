// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { renderReact } from 'hypernova-react';
import { useAsyncLoader } from 'redux-async-loader';
import 'stylesheets/bundle.scss';

import routes from './routes';
import configureStore from './store/configureStore';

const RenderWithMiddleware = applyRouterMiddleware(
  useAsyncLoader(),
);

const AppRouter = (props: { current_user: any }) => {
  const store = configureStore({ currentUser: props.current_user });
  return (
    <Provider store={store}>
      <Router history={browserHistory} render={routerProps => <RenderWithMiddleware {...routerProps} />} >
        {routes(store)}
      </Router>
    </Provider>
  );
};

export default renderReact('AppRouter', AppRouter);

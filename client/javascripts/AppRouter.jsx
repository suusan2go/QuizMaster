// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { renderReact } from 'hypernova-react';
import 'stylesheets/bundle.scss';

import routes from './routes';

import configureStore from './store/configureStore';

const AppRouter = (props: { current_user: any }) => {
  const store = configureStore({ currentUser: props.current_user });
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
};

export default renderReact('AppRouter', AppRouter);

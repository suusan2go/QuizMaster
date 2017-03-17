// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { useAsyncLoader } from 'redux-async-loader';
import 'stylesheets/bundle.scss';

import routes from './routes';
import configureStore from './store/configureStore';

const RenderWithMiddleware = applyRouterMiddleware(
  useAsyncLoader(),
);

const AppRouter = (props: { currentUser: any }) => {
  const store = configureStore({ currentUser: props.currentUser });
  return (
    <Provider store={store}>
      <Router history={browserHistory} render={routerProps => <RenderWithMiddleware {...routerProps} />} >
        {routes(store)}
      </Router>
    </Provider>
  );
};

const node = document.getElementById('app-root');
const propsJson = node.getAttribute('data-react-props');
const props = JSON.parse(propsJson);
ReactDOM.render(<AppRouter currentUser={props} />, node);

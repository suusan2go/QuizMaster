import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import CommonLayout from 'components/Layout/CommonLayout';
import Top from 'components/Top';
import Quizes from 'components/Quizes';

export default function (store) {
  const currentUser = store.getState().currentUser;

  const requireAuth = (nextState, replaceState) => {
    if (!currentUser) {
      replaceState({ nextPathname: nextState.location.pathname }, '/');
    }
  };

  // replaceState not work
  const requireNoAuth = () => {
    if (currentUser) {
      browserHistory.push('/quizzes');
    }
  };
  return (
    <Route path="/" component={CommonLayout}>
      <IndexRoute component={Top} onEnter={requireNoAuth} />
      <Route component={Quizes} path="/quizzes" onEnter={requireAuth} />
    </Route>
  );
}

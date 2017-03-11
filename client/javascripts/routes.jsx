import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import CommonLayout from 'components/Layout/CommonLayout';
import Top from 'components/Top';
import QuizzesList from 'components/QuizzesList';
import QuizForm from 'components/QuizForm';

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
      browserHistory && browserHistory.push('/quizzes');
    }
  };
  return (
    <Route path="/" component={CommonLayout}>
      <IndexRoute component={Top} onEnter={requireNoAuth} />
      <Route component={QuizzesList} path="/quizzes" onEnter={requireAuth} />
      <Route component={QuizForm} path="/quizzes/new" onEnter={requireAuth} />
    </Route>
  );
}

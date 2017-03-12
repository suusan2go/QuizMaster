import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import CommonLayout from 'components/Layout/CommonLayout';
import Top from 'components/Top';
import MyQuizzes from 'components/MyQuizzes';
import Quizzes from 'components/Quizzes';
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
      <Route component={Quizzes} path="/quizzes" onEnter={requireAuth} />
      <Route component={QuizForm} path="/quizzes/new" onEnter={requireAuth} />
      <Route component={MyQuizzes} path="/user/quizzes" onEnter={requireAuth} />
    </Route>
  );
}

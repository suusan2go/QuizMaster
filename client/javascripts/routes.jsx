import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import CommonLayout from 'components/Layout/CommonLayout';
import Top from 'components/Top';
import MyQuizzes from 'components/MyQuizzes';
import MyQuiz from 'components/MyQuiz';
import Quizzes from 'components/Quizzes';
import NewQuizForm from 'components/QuizForm/NewQuizForm';
import EditQuizForm from 'components/QuizForm/EditQuizForm';
import NewQuestionForm from 'components/QuestionForm/NewQuestionForm';
import EditQuestionForm from 'components/QuestionForm/EditQuestionForm';

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
      <Route component={NewQuizForm} path="/quizzes/new" onEnter={requireAuth} />
      <Route component={EditQuizForm} path="/quizzes/:id/edit" onEnter={requireAuth} />
      <Route component={MyQuizzes} path="/user/quizzes" onEnter={requireAuth} />
      <Route component={MyQuiz} path="/user/quizzes/:id" onEnter={requireAuth} />
      <Route component={MyQuiz} path="/user/quizzes/:id" onEnter={requireAuth} />
      <Route component={NewQuestionForm} path="/user/quizzes/:id/questions/new" onEnter={requireAuth} />
      <Route component={EditQuestionForm} path="/user/questions/:id/edit" onEnter={requireAuth} />
    </Route>
  );
}

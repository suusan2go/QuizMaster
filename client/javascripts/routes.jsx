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
import QuizTrial from 'components/QuizTrial';
import QuizTrialResult from 'components/QuizTrialResult';
import UserAnswer from 'components/UserAnswer';

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
      <Route component={MyQuizzes} path="/users/quizzes" onEnter={requireAuth} />
      <Route component={MyQuiz} path="/users/quizzes/:id" onEnter={requireAuth} />
      <Route component={MyQuiz} path="/users/quizzes/:id" onEnter={requireAuth} />
      <Route component={NewQuestionForm} path="/users/quizzes/:id/questions/new" onEnter={requireAuth} />
      <Route component={EditQuestionForm} path="/users/questions/:id/edit" onEnter={requireAuth} />
      <Route component={QuizTrial} path="/quiz_trials/:id" onEnter={requireAuth} />
      <Route component={QuizTrialResult} path="/quiz_trials/:id/result" onEnter={requireAuth} />
      <Route component={UserAnswer} path="/user_answers/:id" onEnter={requireAuth} />
    </Route>
  );
}

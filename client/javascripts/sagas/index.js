import quizFormSaga from './quizFormSaga';
import myQuizzesSaga from './myQuizzesSaga';
import quizzesSaga from './quizzesSaga';
import myQuizSaga from './myQuizSaga';
import questionFormSaga from './questionFormSaga';
import quizTrialSaga from './quizTrialSaga';
import userAnswerSaga from './userAnswerSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    myQuizzesSaga(),
    quizzesSaga(),
    myQuizSaga(),
    questionFormSaga(),
    quizTrialSaga(),
    userAnswerSaga(),
    authSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

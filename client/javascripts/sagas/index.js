import quizFormSaga from './quizFormSaga';
import myQuizzesSaga from './myQuizzesSaga';
import quizzesSaga from './quizzesSaga';
import myQuizSaga from './myQuizSaga';
import questionFormSaga from './questionFormSaga';
import quizTrialSaga from './quizTrialSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    myQuizzesSaga(),
    quizzesSaga(),
    myQuizSaga(),
    questionFormSaga(),
    quizTrialSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

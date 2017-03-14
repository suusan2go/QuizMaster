import quizFormSaga from './quizFormSaga';
import myQuizzesSaga from './myQuizzesSaga';
import quizzesSaga from './quizzesSaga';
import myQuizSaga from './myQuizSaga';
import questionFormSaga from './questionFormSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    myQuizzesSaga(),
    quizzesSaga(),
    myQuizSaga(),
    questionFormSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

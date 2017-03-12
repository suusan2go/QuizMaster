import quizFormSaga from './quizFormSaga';
import myQuizzesSaga from './myQuizzesSaga';
import myQuizSaga from './myQuizSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    myQuizzesSaga(),
    myQuizSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

import quizFormSaga from './quizFormSaga';
import myQuizzesSaga from './myQuizzesSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    myQuizzesSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

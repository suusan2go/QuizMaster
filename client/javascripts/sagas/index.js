import quizFormSaga from './quizFormSaga';
import myQuizzesSaga from './myQuizzesSaga';
import myQuizSaga from './myQuizSaga';
import questionFormSaga from './questionFormSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    myQuizzesSaga(),
    myQuizSaga(),
    questionFormSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

import quizFormSaga from './quizFormSaga';

export default function* rootSaga() {
  yield [
    quizFormSaga(),
    // diaryEntryFormSaga(),
    // diaryEntryListSaga(),
    // authSaga(),
  ];
}

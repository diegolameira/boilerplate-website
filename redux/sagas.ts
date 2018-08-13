import { all } from 'redux-saga/effects';

import starwarsSaga from 'pages/starwars/saga';

export default function* rootSaga() {
  yield all([starwarsSaga()]);
}

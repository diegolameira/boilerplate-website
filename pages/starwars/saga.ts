import { all, put, takeLatest } from 'redux-saga/effects';

import { loadPeople as loadPeopleAction, loadPeopleSuccess } from './actions';
import { people } from './service';

function* loadPeople() {
  debugger;
  try {
    const res = yield people();
    yield put(loadPeopleSuccess(res));
  } catch (err) {
    debugger;
  }
}

function* sagas() {
  yield all([takeLatest(loadPeopleAction().type, loadPeople)]);
}

export default sagas;

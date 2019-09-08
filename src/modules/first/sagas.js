import { put, takeLatest } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { addTask } from '$modules/first/actions';

function* mySaga() {
  yield put(addTask());
}

export default function* firstSaga() {
  yield takeLatest(REHYDRATE, mySaga);
}

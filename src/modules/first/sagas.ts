import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { FIRST_TYPES } from '$modules/first/types';

import { addTask } from '$modules/first/actions';

function* mySaga({ payload: { task } }: ReturnType<typeof addTask>): SagaIterator {
  yield put(addTask(task));
}

export default function* firstSaga(): SagaIterator {
  yield takeLatest(FIRST_TYPES.ACTIVATE_SAGA, mySaga);
}

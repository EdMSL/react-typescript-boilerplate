import { SagaIterator } from 'redux-saga';
import { REHYDRATE } from 'redux-persist';
import {
  select,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import { apiGetUser } from '$api/user';
import { getUserAvatar } from '$modules/user/actions';

function* getUserSaga(): SagaIterator {
  const { user: { avatar } } = yield select((state) => state);

  if (!avatar) {
    const userData = yield call(apiGetUser);

    yield put(getUserAvatar(userData.avatar_url));
  }
}

export default function* userSaga(): SagaIterator {
  yield takeLatest(REHYDRATE, getUserSaga);
}

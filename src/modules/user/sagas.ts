import { SagaIterator } from 'redux-saga';
import { REHYDRATE } from 'redux-persist';
import {
  select,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import { apiGetUser } from '$api/user';
import { getUserAvatar, setRequestError } from '$modules/user/actions';
import { DEFAULT_REQUEST_ERROR } from '$constants/defaultParameters';

function* getUserSaga(): SagaIterator {
  const { user: { avatar } } = yield select((state) => state);

  if (!avatar) {
    const userData = yield call(apiGetUser);

    if (userData && userData.avatar_url) {
      yield put(getUserAvatar(userData.avatar_url));
      yield put(setRequestError(DEFAULT_REQUEST_ERROR));
    } else {
      yield put(setRequestError(userData));
    }
  }
}

export default function* userSaga(): SagaIterator {
  yield takeLatest(REHYDRATE, getUserSaga);
}

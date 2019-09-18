import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

import { DefaultView } from '$constants/defaultParameters';
import { getPathNameFromLocationPath } from '$utils/test';
import { changeView } from '$modules/content/actions';

function* locationChangeSaga({ payload: { location } }: LocationChangeAction): SagaIterator {
  yield put(changeView(DefaultView[getPathNameFromLocationPath(location.pathname).toUpperCase()]));
}

export default function* contentSaga(): SagaIterator {
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}

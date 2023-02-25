import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
// import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

// function* locationChangeSaga({ payload: { location } }: LocationChangeAction): SagaIterator {
// yield put(changeView(DefaultView[getPathNameFromLocationPath(location.pathname).toUpperCase()]));
// }

export default function* contentSaga(): SagaIterator {
  // yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}

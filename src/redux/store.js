import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import firstReducer from '$modules/first/reducer';
import firstSaga from '$modules/first/sagas';

const firstPersistConfig = {
  key: 'first',
  whitelist: [],
  storage,
};

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const composeEnhancers = typeof window === 'object' && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const store = createStore(
  combineReducers({
    first: persistReducer(firstPersistConfig, firstReducer),
    router: connectRouter(history),
  }),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  )),
);

export function configureStore() {
  sagaMiddleware.run(firstSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

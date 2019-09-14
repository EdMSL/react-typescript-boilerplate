import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { PersistConfig, Persistor } from 'redux-persist/es/types';

import { firstReducer, IFirstRootState } from '$modules/first/reducer';
import firstSaga from '$modules/first/sagas';

const firstPersistConfig: PersistConfig<IFirstRootState> = {
  key: 'first',
  whitelist: [],
  storage,
};

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  first: persistReducer(firstPersistConfig, firstReducer),
  router: connectRouter(history),
});

export type IAppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

export function configureStore(): { store: Store<IAppState>, persistor: Persistor, } {
  sagaMiddleware.run(firstSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

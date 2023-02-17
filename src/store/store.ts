/* import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store,
} from 'redux'; */
import { persistStore, REHYDRATE, REGISTER, FLUSH, PAUSE, PERSIST, PURGE } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistConfig, Persistor } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

// import { userReducer } from '$modules/user/reducer';
// import { contentReducer } from '$modules/content/reducer';
// import { IUserRootState } from '$modules/user/interfaces';
// import { IContentRootState } from '$modules/content/interfaces';
import {rootReducer} from './root-reducer';
import userSaga from '$store/user/sagas';
import contentSaga from '$store/content/sagas';

/* const userPersistConfig: PersistConfig<IUserRootState> = {
  key: 'user',
  whitelist: ['isSidebarMinimized', 'userAvatar'],
  storage,
};

const contentPersistConfig: PersistConfig<IContentRootState> = {
  key: 'content',
  whitelist: [],
  storage,
};

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory(); */

// const rootReducer = combineReducers({
//   user: persistReducer(userPersistConfig, userReducer),
//   content: persistReducer(contentPersistConfig, contentReducer),
//   router: connectRouter(history),
// });

// export type IAppState = ReturnType<typeof rootReducer>

/* const composeEnhancers = typeof window === 'object'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose; */

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(
//       routerMiddleware(history),
//       sagaMiddleware,
//     ),
//   ),
// );

// export function configureStore(): { store: Store<IAppState>, persistor: Persistor, } {
//   sagaMiddleware.run(userSaga);
//   sagaMiddleware.run(contentSaga);

//   const persistor = persistStore(store);

//   return { store, persistor };
// }


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(contentSaga);

export const persistor = persistStore(store);

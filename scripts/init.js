const fs = require('fs');
const path = require('path');

const deleteFolderRecursive = function(filepath) {
  if (fs.existsSync(filepath)) {
    fs.readdirSync(filepath).forEach((file) => {
      const curPath = path.join(filepath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(filepath);
  }
};

fs.writeFileSync(path.resolve(__dirname, '../src/redux/store.ts'), `
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, Persistor } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { contentReducer, IContentRootState } from '$modules/content/reducer';
import contentSaga from '$modules/content/sagas';

const contentPersistConfig: PersistConfig<IContentRootState> = {
  key: 'content',
  whitelist: [],
  storage,
};

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  content: persistReducer(contentPersistConfig, contentReducer),
  router: connectRouter(history),
});

export type IAppState = ReturnType<typeof rootReducer>

const composeEnhancers = typeof window === 'object'
/* eslint-disable @typescript-eslint/no-explicit-any */
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
/* eslint-enable @typescript-eslint/no-explicit-any */

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

export function configureStore(): { store: Store<IAppState>, persistor: Persistor, } {
  sagaMiddleware.run(contentSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}
`);

fs.writeFileSync(path.resolve(__dirname, '../src/containers/App/index.tsx'), `
import { hot } from 'react-hot-loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import classNames from 'classnames';

import { history, IAppState } from '$redux/store';

const styles = require('./styles.module.scss');

const UnconnectedApp: React.FC = () => {
  const view = useSelector((state: IAppState) => state.content.view);

  return (
    <ConnectedRouter history={history}>
      <main>
        <div className={classNames('main-wrapper', styles[view])}>
          <section
            className={styles.router}
          >
            <p>{view}</p>
          </section>
        </div>
      </main>
    </ConnectedRouter>
  );
};

export const App = hot(module)(UnconnectedApp);

`);

fs.writeFileSync(path.resolve(__dirname, '../src/modules/content/sagas.ts'), `
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

import { changeView } from '$modules/content/actions';

function* locationChangeSaga({ payload: { location } }: LocationChangeAction): SagaIterator {
  yield put(changeView('redux'));
}

export default function* contentSaga(): SagaIterator {
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}

`);

fs.writeFileSync(path.resolve(__dirname, '../src/constants/defaultParameters.ts'), `
export const DEFAULT_REQUEST_ERROR = {
  status: 0,
  text: '',
};

`);

fs.writeFileSync(path.resolve(__dirname, '../src/styles/resources/colors.scss'), `
$white: rgb(255, 255, 255);
$dark-black: rgb(15, 15, 15);

`);

fs.unlinkSync(path.resolve(__dirname, '../src/constants/images.ts'));

const utilsFiles = fs.readdirSync(path.resolve(__dirname, '../src/utils/'));
const contentImagesFiles = fs.readdirSync(path.resolve(__dirname, '../src/assets/images/content'));
const decorationImagesFiles = fs.readdirSync(path.resolve(__dirname, '../src/assets/images/decoration'));
const componentsFiles = fs.readdirSync(path.resolve(__dirname, '../src/components'));
const testFiles = fs.readdirSync(path.resolve(__dirname, '../src/tests'));

utilsFiles.forEach((file) => fs.unlinkSync(path.resolve(__dirname, '../src/utils/', file)));
contentImagesFiles.forEach((file) => fs.unlinkSync(path.resolve(__dirname, '../src/assets/images/content/', file)));
decorationImagesFiles.forEach((file) => fs.unlinkSync(path.resolve(__dirname, '../src/assets/images/decoration/', file)));
testFiles.forEach((file) => fs.unlinkSync(path.resolve(__dirname, '../src/tests/', file)));
componentsFiles.forEach((file) => {
  if (file !== 'UI') {
    deleteFolderRecursive(path.resolve(__dirname, '../src/components', file));
  }
});
deleteFolderRecursive(path.resolve(__dirname, '../src/modules/user/'));

import {combineReducers} from '@reduxjs/toolkit';
import { IUserRootState, userReducer } from '$store/user';
import { contentReducer, IContentRootState } from '$store/content';
import { NameSpace } from '$constants/store';
import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const userPersistConfig: PersistConfig<IUserRootState> = {
  key: NameSpace.User,
  whitelist: ['isSidebarMinimized', 'userAvatar'],
  storage,
};

const contentPersistConfig: PersistConfig<IContentRootState> = {
  key: NameSpace.Content,
  whitelist: [],
  storage,
};

export const rootReducer = combineReducers({
  [NameSpace.User]: persistReducer(userPersistConfig, userReducer),
  [NameSpace.Content]: persistReducer(contentPersistConfig, contentReducer),
});

import { createReducer } from 'reduxsauce';

import * as USER_ACTIONS from '$modules/user/actions';
import { USER_TYPES } from '$modules/user/types';
import { DEFAULT_REQUEST_ERROR } from '$constants/defaultParameters';
import { IRequestError } from '$api/user';

export type IUserRootState = Readonly<{
  isSidebarMinimized: boolean,
  userAvatar: string,
  requestError: IRequestError,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: IUserRootState, payload: UnsafeReturnType<T>): IUserRootState,
}

const INITIAL_STATE: IUserRootState = {
  isSidebarMinimized: false,
  userAvatar: '',
  requestError: DEFAULT_REQUEST_ERROR,
};

const minimizeSidebar: IActionHandler<typeof USER_ACTIONS.minimizeSidebar> = (
  state,
  { payload: isSidebarMinimized },
) => ({
  ...state,
  isSidebarMinimized,
});

const getUserAvatar: IActionHandler<typeof USER_ACTIONS.getUserAvatar> = (
  state,
  { payload: userAvatar },
) => ({
  ...state,
  userAvatar,
});

const setRequestError: IActionHandler<typeof USER_ACTIONS.setRequestError> = (
  state,
  { payload: requestError },
) => ({
  ...state,
  requestError,
});

const HANDLERS = {
  [USER_TYPES.MINIMIZE_SIDEBAR]: minimizeSidebar,
  [USER_TYPES.GET_USER_AVATAR]: getUserAvatar,
  [USER_TYPES.SET_REQUEST_ERROR]: setRequestError,
};

export const userReducer = createReducer<IUserRootState>(INITIAL_STATE, HANDLERS);


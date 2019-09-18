import { createReducer } from 'reduxsauce';

import * as USER_ACTIONS from '$modules/user/actions';
import { USER_TYPES } from '$modules/user/types';

export type IUserRootState = Readonly<{
  isSidebarMinimized: boolean,
  avatar: string,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: IUserRootState, payload: UnsafeReturnType<T>): IUserRootState,
}

const INITIAL_STATE: IUserRootState = {
  isSidebarMinimized: false,
  avatar: '',
};

const minimizeSidebar: IActionHandler<typeof USER_ACTIONS.minimizeSidebar> = (
  state,
  { isSidebarMinimized },
) => ({
  ...state,
  isSidebarMinimized,
});

const getUserAvatar: IActionHandler<typeof USER_ACTIONS.getUserAvatar> = (
  state,
  { avatar },
) => ({
  ...state,
  avatar,
});

const HANDLERS = {
  [USER_TYPES.MINIMIZE_SIDEBAR]: minimizeSidebar,
  [USER_TYPES.GET_USER_AVATAR]: getUserAvatar,
};

export const userReducer = createReducer<IUserRootState>(INITIAL_STATE, HANDLERS);


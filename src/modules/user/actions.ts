import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IMinimizeSidebar {
  type: typeof USER_TYPES.MINIMIZE_SIDEBAR,
  isSidebarMinimized: IUserRootState['isSidebarMinimized'],
}

interface IGetUserAvatar {
  type: typeof USER_TYPES.GET_USER_AVATAR,
  avatar: IUserRootState['avatar'],
}

interface ISetRequestError {
  type: typeof USER_TYPES.SET_REQUEST_ERROR,
  requestError: IUserRootState['requestError'],
}

export const minimizeSidebar = (
  isSidebarMinimized: IUserRootState['isSidebarMinimized'],
): IMinimizeSidebar => ({
  type: USER_TYPES.MINIMIZE_SIDEBAR,
  isSidebarMinimized,
});

export const getUserAvatar = (avatar: IUserRootState['avatar']): IGetUserAvatar => ({
  type: USER_TYPES.GET_USER_AVATAR,
  avatar,
});

export const setRequestError = (
  requestError: IUserRootState['requestError'],
): ISetRequestError => ({
  type: USER_TYPES.SET_REQUEST_ERROR,
  requestError,
});

import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IMinimizeSidebar {
  type,
  isSidebarMinimized: IUserRootState['isSidebarMinimized'],
}

interface IGetUserAvatar {
  type,
  avatar: IUserRootState['avatar'],
}

export const minimizeSidebar = (isSidebarMinimized: boolean): IMinimizeSidebar => ({
  type: USER_TYPES.MINIMIZE_SIDEBAR,
  isSidebarMinimized,
});

export const getUserAvatar = (avatar: string): IGetUserAvatar => ({
  type: USER_TYPES.GET_USER_AVATAR,
  avatar,
});

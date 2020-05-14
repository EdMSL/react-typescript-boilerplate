import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IActionReturnType {
  type: string,
}

interface IActionPayloadReturnType<T> extends IActionReturnType {
  payload: T,
}

export const minimizeSidebar = (
  isSidebarMinimized: IUserRootState['isSidebarMinimized'],
): IActionPayloadReturnType<typeof isSidebarMinimized> => ({
  type: USER_TYPES.MINIMIZE_SIDEBAR,
  payload: isSidebarMinimized,
});

export const getUserAvatar = (
  userAvatar: IUserRootState['userAvatar'],
): IActionPayloadReturnType<typeof userAvatar> => ({
  type: USER_TYPES.GET_USER_AVATAR,
  payload: userAvatar,
});

export const setRequestError = (
  requestError: IUserRootState['requestError'],
): IActionPayloadReturnType<typeof requestError> => ({
  type: USER_TYPES.SET_REQUEST_ERROR,
  payload: requestError,
});

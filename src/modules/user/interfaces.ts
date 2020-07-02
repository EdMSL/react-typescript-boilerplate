import { IRequestError } from '$api/user';

export type IUserRootState = Readonly<{
  isSidebarMinimized: boolean,
  userAvatar: string,
  requestError: IRequestError,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface IActionHandler<T> {
  (state: IUserRootState, payload: UnsafeReturnType<T>): IUserRootState,
}

import { CONTENT_TYPES } from '$modules/content/types';
import { IContentRootState } from '$modules/content/reducer';

interface IActionReturnType<T> {
  type: string,
  payload: T,
}

export const changeView = (view: IContentRootState['view']): IActionReturnType<typeof view> => ({
  type: CONTENT_TYPES.CHANGE_VIEW,
  payload: view,
});

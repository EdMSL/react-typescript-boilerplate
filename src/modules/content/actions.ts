import { CONTENT_TYPES } from '$modules/content/types';
import { IContentRootState } from '$modules/content/reducer';

interface IActionReturnType {
  type: string,
}

interface IActionPayloadReturnType<T> extends IActionReturnType {
  payload: T,
}

export const changeView = (view: IContentRootState['view']): IActionPayloadReturnType<typeof view> => ({
  type: CONTENT_TYPES.CHANGE_VIEW,
  payload: view,
});

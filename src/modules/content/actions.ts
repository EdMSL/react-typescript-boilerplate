import { CONTENT_TYPES } from '$modules/content/types';
import { IContentRootState } from '$modules/content/reducer';

interface IChangeView {
  type: typeof CONTENT_TYPES.CHANGE_VIEW,
  payload: IContentRootState['view'],
}

export const changeView = (view: IContentRootState['view']): IChangeView => ({
  type: CONTENT_TYPES.CHANGE_VIEW,
  payload: view,
});

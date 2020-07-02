import { createReducer } from 'reduxsauce';

import { CONTENT_TYPES } from '$modules/content/types';
import * as CONTENT_ACTIONS from '$modules/content/actions';
import { IContentRootState, IActionHandler } from '$modules/content/interfaces';

const changeView: IActionHandler<typeof CONTENT_ACTIONS.changeView> = (
  state,
  { payload: view },
) => ({
  ...state,
  view,
});

const HANDLERS = {
  [CONTENT_TYPES.CHANGE_VIEW]: changeView,
};

const INITIAL_STATE: IContentRootState = {
  view: 'react',
};

export const contentReducer = createReducer<IContentRootState>(INITIAL_STATE, HANDLERS);

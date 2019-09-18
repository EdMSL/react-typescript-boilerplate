import { createReducer } from 'reduxsauce';

import { CONTENT_TYPES } from '$modules/content/types';
import * as CONTENT_ACTIONS from '$modules/content/actions';

export type IContentRootState = Readonly<{
  view: string,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: IContentRootState, payload: UnsafeReturnType<T>): IContentRootState,
}

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

export const contentReducer = createReducer(INITIAL_STATE, HANDLERS);

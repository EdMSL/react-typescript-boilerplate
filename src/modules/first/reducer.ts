import { createReducer } from 'reduxsauce';

import { FIRST_TYPES } from '$modules/first/types';
import * as FIRST_ACTIONS from '$modules/first/actions';

type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

interface IActionHandler<T> {
  (state: IFirstRootState, payload: UnsafeReturnType<T>): IFirstRootState,
}

export interface ITask {
  task: number,
}

export interface IFirstRootState {
  tasks: ITask[],
}

const addTask: IActionHandler<typeof FIRST_ACTIONS.addTask> = (state, { payload: task }) => ({
  ...state,
  tasks: [...state.tasks, task],
});

const HANDLERS = {
  [FIRST_TYPES.ADD_TASK]: addTask,
};

const INITIAL_STATE: IFirstRootState = {
  tasks: [],
};

export const firstReducer = createReducer(INITIAL_STATE, HANDLERS);

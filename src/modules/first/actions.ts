import { FIRST_TYPES } from '$modules/first/types';

export const addTask = (task: number) => ({
  type: FIRST_TYPES.ADD_TASK,
  payload: {
    task,
  },
});

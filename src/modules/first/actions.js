import { FIRST_TYPES } from '$modules/first/actionTypes';

export const addTask = (task) => ({
  type: FIRST_TYPES.ADD_TASK,
  task,
});

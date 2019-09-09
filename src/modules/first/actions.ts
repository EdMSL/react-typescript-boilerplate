import { FIRST_TYPES } from '$modules/first/types';
import { ITask } from '$modules/first/reducer';

interface IAddTask {
  type: typeof FIRST_TYPES.ADD_TASK,
  payload: ITask,
}

export const addTask = (task: ITask): IAddTask => ({
  type: FIRST_TYPES.ADD_TASK,
  payload: task,
});

import { createReducer } from 'reduxsauce';
import { FIRST_TYPES } from '$modules/first/actionTypes';

const addTask = (state, action) => ({
  ...state,
  tasks: state.tasks.push(action.task),
});

const HANDLERS = {
  [FIRST_TYPES.ADD_TASK]: addTask,
};

const INITIAL_STATE = {
  tasks: [],
};

export default createReducer(INITIAL_STATE, HANDLERS);

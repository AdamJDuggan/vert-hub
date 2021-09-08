import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
const NAME = 'count';

export const actions = {
  increment: createAction('counter/increment', props<{ payload: any }>()),
  decrement: createAction(`${NAME}/decrement`),
  reset: createAction(`${NAME}/reset`),
};

export const initialState = 1;

const mockFetch = async (state: any, action: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return state + action.value;
};

const _counterReducer = createReducer(
  initialState,
  on(actions.increment, (state, action) => state + action.payload),
  on(actions.decrement, (state) => state - 1),
  on(actions.reset, () => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

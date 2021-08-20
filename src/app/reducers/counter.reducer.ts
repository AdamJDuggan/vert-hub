import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
const NAME = 'count';

export const increment = createAction(
  'counter/increment',
  props<{ value: number }>()
);
export const decrement = createAction(`${NAME}/decrement`);
export const reset = createAction(`${NAME}/reset`);

export const initialState = 1;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

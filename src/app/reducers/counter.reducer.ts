import { createReducer, on } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const NAME = 'counter';

export const increment = createAction(`${NAME}/increment`);
export const decrement = createAction(`${NAME}/decrement`);
export const reset = createAction(`${NAME}/reset`);

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

import { createReducer, on } from '@ngrx/store';

const NAME = 'async';

export const initialState = {
  errors: [{ type: 'Test error', message: 'Test errror message' }],
  pending: ['firstPending'],
};

const _asyncReducer = createReducer(initialState);

export function asyncReducer(state: any, action: any) {
  return _asyncReducer(state, action);
}

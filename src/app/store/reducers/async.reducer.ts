// Ngrx
import { createReducer, on } from '@ngrx/store';
// Actions
import {
  pending,
  resolved,
  error,
  clearErrors,
} from '../actions/async.actions';
// Modals
import { Error } from '../../models/error.model';

export const initialState = {
  errors: [],
  pending: [],
};

const _asyncReducer = createReducer(
  initialState,
  on(pending, (state: any, action) => {
    const errors = state.errors.filter((e: Error) => e.type !== action.payload);
    if (state.pending.find((p: string) => p === action.payload)) {
      return { ...state, errors };
    } else {
      return { errors, pending: [...state.pending, action.payload] };
    }
  }),
  on(resolved, (state, action) => {
    const pending = state.pending.filter((p: string) => p !== action.payload);
    const errors = state.errors.filter((e: Error) => e.type !== action.payload);
    return { pending, errors };
  }),
  on(error, (state: any, action) => {
    const pending = state.pending.filter(
      (p: string) => p !== action.payload.type
    );
    if (state.errors.find((e: any) => e.type === action.payload.type)) {
      return state;
    } else {
      return {
        pending,
        errors: [...state.errors, { ...action.payload }],
      };
    }
  }),
  on(clearErrors, (state: any, action) => ({ ...state, errors: [] }))
);

export function asyncReducer(state: any, action: any) {
  return _asyncReducer(state, action);
}

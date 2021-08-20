// State
import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
// Model
import { Auth } from '../models/auth.model';

export interface IActionWithPayload {
  type: string;
  payload?: any;
}

export const setUser = createAction('auth/setUser', props<Auth>());

export const clearUser = createAction('auth/clearUser');

const initialState: Auth = {
  id: null,
  loggedIn: false,
  email: null,
  name: 'No name!',
};

const _authReducer = createReducer(
  initialState,
  on(setUser, (state, action) => ({
    id: action.id,
    loggedIn: true,
    email: action.email,
    name: action.name,
  })),
  on(clearUser, (state) => ({ ...state, auth: initialState }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

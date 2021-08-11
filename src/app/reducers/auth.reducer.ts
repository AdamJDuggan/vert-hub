// Ngrx
import { createAction } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';
// Model
import { Auth } from '../models/auth.model';

const login = createAction('auth/login');
const logout = createAction('auth/logout');

export const initialState: Auth = { loggedIn: false, email: '' };

const _authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, loggedIn: true })),
  on(logout, () => initialState)
);

export function authReducer(state: any, action: Action) {
  return _authReducer(state, action);
}

import { Auth } from './auth.model';

export interface AppState {
  readonly auth: Auth;
  readonly count: number;
}

import { Auth } from './auth.model';
import { Async } from './async.model';

export interface AppState {
  readonly auth: Auth;
  readonly async: Async;
  readonly count: number;
}

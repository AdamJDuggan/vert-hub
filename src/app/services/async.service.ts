// Angular
import { Injectable } from '@angular/core';
// NgRx
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Models
import { AppState } from '../models/app-state';
import { Async } from '../models/async.model';
// Reducers
import { pending, resolved, error } from '../store/actions/async.actions';

@Injectable({
  providedIn: 'root',
})
export class AsyncService {
  allState$: Observable<AppState>;
  state$: Observable<Async>;
  allState: any;

  constructor(private store: Store<AppState>) {
    this.state$ = store.select('async');
  }

  wrapper = async (action: string, cb: any) => {
    this.store.dispatch(pending(action));
    try {
      await cb();
      this.store.dispatch(resolved(action));
    } catch (err: any) {
      this.store.dispatch(
        error({ type: action, message: err.message || 'There was an error' })
      );
    }
  };
}

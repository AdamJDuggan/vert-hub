import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { Observable } from 'rxjs';
import { Async } from '../models/async.model';

@Injectable({
  providedIn: 'root',
})
export class AsyncService {
  allState$: Observable<AppState>;
  state$: Observable<Async>;
  testAsync: any;
  testAll: any;

  constructor(private store: Store<AppState>) {
    this.state$ = store.select('async');
    this.state$.subscribe((async) => (this.testAsync = async));
    this.allState$ = store;
    this.allState$.subscribe((state) => (this.testAll = state));
  }

  displayState = () => console.log(this.testAll);
}

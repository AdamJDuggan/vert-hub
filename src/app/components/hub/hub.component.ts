// Angualr
import { Component, OnInit } from '@angular/core';
// State
import { Store } from '@ngrx/store';
import { increment } from '../../reducers/counter.reducer';
// Models
import { AppState } from 'src/app/models/app-state';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
})
export class HubComponent implements OnInit {
  count$: any;
  user$: any;
  constructor(private store: Store<AppState>) {
    store.select('count').subscribe((count) => (this.count$ = count));
    store.select('auth').subscribe((user) => (this.user$ = user));
  }
  increment() {
    this.store.dispatch(increment({ value: 1 }));
  }

  ngOnInit(): void {}
}

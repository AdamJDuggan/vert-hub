// Angualr
import { Component, OnInit } from '@angular/core';
// State
import { Store } from '@ngrx/store';
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
  increment(payload: number) {
    console.log(payload);
  }

  ngOnInit(): void {}
}

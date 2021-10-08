import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';
import { clearErrors } from 'src/app/store/actions/async.actions';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent {
  closeIcon = faTimes;
  error$: boolean;
  message$: string;
  constructor(private store$: Store<AppState>) {
    store$.select('async').subscribe((async) => {
      this.error$ = async.errors.length > 0;
      this.message$ = async.errors[0].message;
    });
  }

  ngOnInit(): void {
    this.store$.select('async').subscribe((async: any) => {
      this.error$ = async.errors.length > 0;
      this.message$ = async.errors[0] ? async.errors[0].message : '';
    });
  }

  clearErrors = () => this.store$.dispatch(clearErrors());
}

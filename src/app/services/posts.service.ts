// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// Ngrx
import { Store } from '@ngrx/store';
// Models
import { AppState } from '../models/app-state';
// Actions
import { pending, resolved, error } from '../store/actions/async.actions';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private afs$: AngularFirestore,
    private store$: Store<AppState>
  ) {}

  getPosts = () => {
    const NAME = 'posts/get';
    this.store$.dispatch(pending(NAME));
    this.afs$
      .collection('posts')
      .valueChanges()
      .subscribe((posts) => {
        if (posts.length) {
          this.store$.dispatch(resolved(NAME));
        } else {
          this.store$.dispatch(
            error({ type: NAME, message: 'Sorry server failure' })
          );
        }
      });
  };
}

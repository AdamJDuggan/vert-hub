// Angualr
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
// State
import { Store } from '@ngrx/store';
import { clearUser, setUser } from '../store/reducers/auth.reducer';
import { AppState } from '../models/app-state';
// Actions
import { pending, resolved, error } from '../store/actions/async.actions';
import { AsyncService } from './async.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$ = this.fireAuth.authState;
  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store<AppState>,
    private asyncService: AsyncService
  ) {
    this.loggedIn$.subscribe((user) => {
      if (user) {
        firestore
          .collection('users')
          .doc(user.uid)
          .ref.get()
          .then((doc: any) => {
            const { email, displayName } = doc.data();
            this.store.dispatch(
              setUser({
                id: user.uid,
                loggedIn: true,
                email,
                name: displayName,
              })
            );
          });
      } else {
        this.store.dispatch(clearUser());
      }
    });
  }
  // login = this.asyncService.wrapper(
  //   'auth/login',
  //   (payload: { email: string; password: string }) =>
  //     this.fireAuth.signInWithEmailAndPassword(payload.email, payload.password)
  // );

  login = async (payload: { email: string; password: string }) => {
    this.store.dispatch(pending('auth/login'));
    try {
      await this.fireAuth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
      this.store.dispatch(resolved('auth/login'));
    } catch (err: any) {
      this.store.dispatch(error({ type: 'auth/login', message: err.message }));
    }
  };

  logout = () => this.fireAuth.signOut();

  signup = async (payload: {
    email: string;
    password: string;
    name: string;
  }) => {
    this.store.dispatch(pending('auth/signup'));
    try {
      await this.fireAuth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          this.firestore.doc('/users/' + res?.user?.uid).set({
            displayName: payload.name,
            email: payload.email,
          });
        });
      this.store.dispatch(resolved('auth/signup'));
    } catch (err: any) {
      this.store.dispatch(error({ type: 'auth/signup', message: err.message }));
    }
  };
}

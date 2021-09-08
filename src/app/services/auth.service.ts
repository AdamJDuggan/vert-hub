// Angualr
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
// State
import { Store } from '@ngrx/store';
import { clearUser, setUser } from '../store/reducers/auth.reducer';
import { AppState } from '../models/app-state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$ = this.fireAuth.authState;
  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store<AppState>
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

  login = (payload: { email: string; password: string }): Promise<any> => {
    return this.fireAuth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    );
  };

  logout = () => this.fireAuth.signOut();

  signup = (email: string, password: string, name: string) => {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.firestore.doc('/users/' + res?.user?.uid).set({
          displayName: name,
          email,
        });
      });
  };
}

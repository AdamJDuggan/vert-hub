import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$ = this.fireAuth.authState;

  constructor(
    public fireAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  login = (email: string, password: string): Promise<any> => {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  };
  logout = () => this.fireAuth.signOut();

  signup = (email: string, password: string, name: string) => {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.afs.doc('/users/' + email).set({
          displayName: name,
          email,
        });
      });
  };
}

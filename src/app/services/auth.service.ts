import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$ = this.fireAuth.authState;

  constructor(public fireAuth: AngularFireAuth) {}

  login = (email: string, password: string): Promise<any> => {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  };
  logout = () => this.fireAuth.signOut();
}

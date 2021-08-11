import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthRedirectService implements CanActivate {
  constructor(private authServce: AuthService, private router: Router) {}
  canActivate(): any {
    return new Promise((resolve) => {
      return this.authServce.loggedIn$.subscribe((authenticated) => {
        if (authenticated) {
          this.router.navigate(['/dashboard']);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}

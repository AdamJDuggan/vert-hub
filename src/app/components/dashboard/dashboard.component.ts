import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.loggedIn$.subscribe((loggedIn) => {
      if (loggedIn) this.loggedIn = true;
      else {
        this.loggedIn = false;
      }
    });
  }
  ngOnInit() {}

  login = () => this.authService.login('adamduggan17@gmail.com', '123456');

  logout = () => this.authService.logout();
}

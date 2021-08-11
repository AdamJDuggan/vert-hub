import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
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
}

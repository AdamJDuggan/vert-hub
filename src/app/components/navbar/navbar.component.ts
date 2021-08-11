import { Component, OnInit, HostListener } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMobile: any;
  public displayDropDown: boolean = false;
  public menuIcon = faBars;
  public loggedIn: boolean = false;

  constructor(private authService: AuthService) {
    authService.loggedIn$.subscribe((auth: any) => {
      if (auth) this.loggedIn = true;
      else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 700;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 700;
  }

  logout = () => this.authService.logout();

  onToggleDropDown = () => {
    if (this.isMobile) {
      if (this.displayDropDown) {
        this.displayDropDown = false;
        this.menuIcon = faBars;
      } else {
        this.displayDropDown = true;
        this.menuIcon = faTimes;
      }
    }
  };
}

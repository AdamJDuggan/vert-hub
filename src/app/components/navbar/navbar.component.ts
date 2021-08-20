import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {
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

  openDropDown = () => {
    this.displayDropDown = true;
    this.menuIcon = faTimes;
  };

  closeDropDown = () => {
    this.displayDropDown = false;
    this.menuIcon = faBars;
  };

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 700;
    if (this.displayDropDown && !this.isMobile) {
      this.closeDropDown();
    }
  }

  logout = () => {
    this.displayDropDown && this.closeDropDown();
    this.authService.logout();
  };

  onToggleDropDown = () => {
    this.displayDropDown ? this.closeDropDown() : this.openDropDown();
  };

  onRoute = (path: string) => {
    this.displayDropDown && this.closeDropDown();
    if (this.loggedIn) this.router.navigate([`/dashboard/${path}`]);
    else {
      this.router.navigate([`/${path}`]);
    }
  };
}

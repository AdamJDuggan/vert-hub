// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
// Components
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Services
import { AuthGuardService } from './services/auth-guard.service';
import { AuthRedirectService } from './services/auth-redirect.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HubComponent } from './components/hub/hub.component';
import { MyProgramComponent } from './components/my-program/my-program.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [AuthRedirectService],
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: HubComponent },
      { path: 'program', component: MyProgramComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

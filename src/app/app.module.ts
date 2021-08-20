// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 3rd party
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyProgramComponent } from './components/my-program/my-program.component';
import { HubComponent } from './components/hub/hub.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
// State
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { AuthService } from './services/auth.service';
// Services
import { AuthGuardService } from './services/auth-guard.service';
import { AuthRedirectService } from './services/auth-redirect.service';
import { authReducer } from './reducers/auth.reducer';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent,
    ButtonComponent,
    LoginComponent,
    SignupComponent,
    MyProgramComponent,
    HubComponent,
    ProfileComponent,
    WelcomeComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer, auth: authReducer }),
  ],
  providers: [AuthService, AuthGuardService, AuthRedirectService],
  bootstrap: [AppComponent],
})
export class AppModule {}

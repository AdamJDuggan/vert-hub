import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AsyncService } from 'src/app/services/async.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private asyncService: AsyncService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onValidate = (value: string, errorMessage: string) => {
    const res =
      !this.form.get(value)?.valid && this.form.get(value)?.touched
        ? errorMessage
        : null;
    return res;
  };

  onSubmit = () =>
    this.authService
      .login(this.form.value)
      .catch((err) => console.log('MY ERROR', err));
}

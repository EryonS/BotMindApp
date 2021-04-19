import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm: FormGroup;

  isSubmitting = false;

  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService
  ) {
    this.signInForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submitForm() {
    if (this.signInForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const { value } = this.signInForm;

      this.loginService
        .signIn(value)
        .then((jwt: string) => {
          this.authService.login(jwt);
        })
        .catch(() => {
          this.isSubmitting = false;
        });
    }
  }
}

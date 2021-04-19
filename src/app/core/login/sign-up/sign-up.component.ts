import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordStateMatcher } from 'src/app/shared/class/password-matcher';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  isSubmitting = false;

  passwordMatcher = new PasswordStateMatcher();

  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService,
    private _router: Router
  ) {
    this.signUpForm = this._fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        cpassword: [''],
      },
      { validators: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const cpassword = group.get('cpassword').value;

    return password === cpassword ? null : { notSame: true };
  }

  submitForm() {
    if (this.signUpForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const { value } = this.signUpForm;

      this.loginService
        .signUp(value)
        .then(() => {
          this.isSubmitting = false;
          this._router.navigate(['/sign-in']);
        })
        .catch((err) => {
          this.isSubmitting = false;
        });
    }
  }
}

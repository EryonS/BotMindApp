import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from './login.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth/auth.service';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes)],
  providers: [LoginService, AuthService],
})
export class LoginModule {}

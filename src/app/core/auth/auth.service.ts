import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decode } from 'punycode';

@Injectable()
export class AuthService {
  private token: string;

  private isAuth = false;

  private userData;

  private helper = new JwtHelperService();

  constructor(private _router: Router, private _http: HttpClient) {}

  getIsAuth() {
    return this.isAuth;
  }

  getToken() {
    return this.token;
  }

  getUserData() {
    return this.userData;
  }

  autoAuthUser() {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.login(token);
    }
  }

  login(jwt: string) {
    this.isAuth = true;
    this.token = jwt;
    sessionStorage.setItem('token', jwt);
    this._router.navigateByUrl('/home');

    this.setUserData();
  }

  private setUserData() {
    const decoded = this.helper.decodeToken(this.token);

    this.userData = {
      _id: decoded._id,
      name: decoded.name,
      email: decoded.email,
    };
  }

  logout() {
    this.isAuth = false;
    this.token = undefined;
    sessionStorage.removeItem('token');
    this._router.navigateByUrl('/sign-in');
  }

  deleteAccount(evenData: string) {
    this._http
      .delete(`${environment.TWEET_URL}/delete-account/${evenData}`)
      .subscribe(
        () => {
          this.logout();
        },
        () => {
          console.log('error when deleting data');
        }
      );
  }
}

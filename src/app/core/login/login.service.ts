import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  constructor(private _http: HttpClient) {}

  signUp(value: { email: string; password: string; cpassword: string }) {
    return this._http
      .post(`${environment.LOGIN_URL}/sign-up`, value)
      .toPromise();
  }

  signIn(value: { email: string; password: string }) {
    return this._http
      .post<string>(`${environment.LOGIN_URL}/sign-in`, value)
      .toPromise();
  }
}

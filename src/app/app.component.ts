import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private _router: Router, private authService: AuthService) {
    this.authService.autoAuthUser();
    if (this.authService.getIsAuth()) {
      this._router.navigateByUrl('/home');
    } else {
      this._router.navigateByUrl('/sign-in');
    }
  }
}

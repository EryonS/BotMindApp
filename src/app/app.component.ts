import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private _router: Router,
    private authService: AuthService,
    private translateService: TranslateService
  ) {
    this.authService.autoAuthUser();
    if (this.authService.getIsAuth()) {
      this._router.navigateByUrl('/home');
    } else {
      this._router.navigateByUrl('/sign-in');
    }
  }

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    lang ? this.translateService.use(lang) : this.translateService.use('fr');
  }
}

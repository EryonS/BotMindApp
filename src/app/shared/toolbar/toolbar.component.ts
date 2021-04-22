import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { DeleteAccountDialogComponent } from './delete-account-dialog/delete-account-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  langages = ['fr', 'en'];

  constructor(
    public authService: AuthService,
    private _matDialog: MatDialog,
    private translateService: TranslateService
  ) {}

  switchLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }

  deleteAccount() {
    const dialog = this._matDialog.open(DeleteAccountDialogComponent);

    dialog
      .afterClosed()
      .subscribe((response: { confirm: boolean; data: boolean }) => {
        if (response && response.confirm) {
          const data = response.data ? 'true' : 'false';
          this.authService.deleteAccount(data);
        }
      });
  }

  logout() {
    this.authService.logout();
  }
}

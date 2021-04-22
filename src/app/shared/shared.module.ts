import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../core/auth/auth.service';
import { DeleteAccountDialogComponent } from './toolbar/delete-account-dialog/delete-account-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent, DeleteAccountDialogComponent],
  imports: [
    AppRoutingModule,
    TranslateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  exports: [
    TranslateModule,
    ToolbarComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  providers: [AuthService],
})
export class SharedModule {}

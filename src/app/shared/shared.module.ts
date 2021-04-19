import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../core/auth/auth.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { DeleteAccountDialogComponent } from './toolbar/delete-account-dialog/delete-account-dialog.component';

@NgModule({
  declarations: [ToolbarComponent, DeleteAccountDialogComponent],
  imports: [
    AppRoutingModule,
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
  ],
  exports: [
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
  ],
  providers: [AuthService],
})
export class SharedModule {}

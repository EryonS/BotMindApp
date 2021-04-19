import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}

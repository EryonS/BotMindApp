import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxEditorModule } from 'ngx-editor';
import { AuthGuard } from '../core/auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { TweetModule } from '../tweet/tweet.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    TweetModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}

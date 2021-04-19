import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet.component';
import { SharedModule } from '../shared/shared.module';
import { TweetService } from './tweet.service';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [TweetComponent],
  imports: [NgxEditorModule, CommonModule, SharedModule],
  providers: [TweetService],
  exports: [TweetComponent],
})
export class TweetModule {}

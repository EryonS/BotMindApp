import { EventEmitter } from '@angular/core';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { ITweet } from '../shared/model/tweet';
import { TweetService } from './tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit, OnDestroy {
  @Input() mode: string;

  @Input() tweet: ITweet;

  isEditing = false;

  editor: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
  ];

  editorForm: FormGroup;

  isSubmitting = false;

  constructor(private _fb: FormBuilder, private tweetService: TweetService) {
    this.editorForm = this._fb.group({
      message: ['', [Validators.required(), Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    this.editor = new Editor();
    if (this.mode === 'new') {
      this.isEditing = true;
    }
    if (this.tweet) {
      this.patchEditForm();
    }
  }

  patchEditForm() {
    this.editorForm.patchValue({
      _id: this.tweet._id,
      message: this.tweet.message,
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  setEditor() {
    this.isEditing = true;
  }

  cancelEditor() {
    this.isEditing = false;
    this.patchEditForm();
  }

  deleteTweet() {
    this.tweetService.deleteTweet(this.tweet._id);
  }

  submitForm() {
    if (this.editorForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      if (this.tweet) {
        this.tweet.message = this.editorForm.value.message;

        this.tweetService
          .updateTweet(this.tweet)
          .then((tweet) => {
            this.tweet = tweet;
            this.patchEditForm();
            this.isSubmitting = false;
            this.isEditing = false;
          })
          .catch(() => {
            this.isSubmitting = false;
          });
      } else {
        const { message } = this.editorForm.value;

        this.tweetService
          .publishTweet(message)
          .then(() => {
            this.editorForm.patchValue({
              message: '',
            });
            this.isSubmitting = false;
          })
          .catch(() => {
            this.isSubmitting = false;
          });
      }
    }
  }
}

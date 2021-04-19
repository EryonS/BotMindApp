import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';
import { ITweet } from '../shared/model/tweet';
import { TweetService } from '../tweet/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  tweets: ITweet[] = [];

  tweetSubscription: Subscription;

  constructor(
    private tweetService: TweetService,
    public authService: AuthService
  ) {
    Promise.all([this.getLatestTweet()]).then(() => {
      window.addEventListener('scroll', () => {
        this.checkIfBottom();
      });
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => {});
    this.tweetSubscription.unsubscribe();
  }

  getLatestTweet() {
    this.tweetSubscription = this.tweetService.tweetObservable.subscribe(
      (tweets) => {
        this.tweets = tweets;
      }
    );
    this.tweetService.latestTweet();
  }

  getMoreTweet() {
    this.tweetService.getMoreTweets();
  }

  checkIfBottom() {
    const distanceFromBottom =
      document.body.scrollHeight - window.innerHeight - window.scrollY;

    if (distanceFromBottom <= 50) {
      this.getMoreTweet();
    }
  }
}

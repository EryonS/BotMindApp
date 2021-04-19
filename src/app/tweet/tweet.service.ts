import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITweet } from '../shared/model/tweet';

@Injectable()
export class TweetService {
  tweets: ITweet[] = [];
  tweetSubject = new Subject<ITweet[]>();
  tweetObservable = this.tweetSubject.asObservable();

  constructor(private _http: HttpClient) {}

  latestTweet() {
    return this._http
      .get<ITweet[]>(`${environment.TWEET_URL}/latest`)
      .subscribe((tweets) => {
        this.tweets = tweets;
        this.tweetSubject.next(this.tweets);
      });
  }

  getMoreTweets() {
    return this._http
      .get<ITweet[]>(
        `${environment.TWEET_URL}/getMoreTweets/${this.tweets.length}`
      )
      .subscribe((tweets) => {
        this.tweets.push(...tweets);
        this.tweetSubject.next(this.tweets);
      });
  }

  async publishTweet(message: string) {
    const tweet = await this._http
      .post<ITweet>(`${environment.TWEET_URL}/publish-tweet`, { message })
      .toPromise();
    if (tweet) {
      this.tweets.unshift(tweet);
      this.tweetSubject.next(this.tweets);
    }
  }

  updateTweet(tweet: ITweet) {
    return this._http
      .put<ITweet>(`${environment.TWEET_URL}/update-tweet`, tweet)
      .toPromise();
  }

  deleteTweet(tweetId: string) {
    return this._http
      .delete(`${environment.TWEET_URL}/delete-tweet/${tweetId}`)
      .toPromise();
  }
}

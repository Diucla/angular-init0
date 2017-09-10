import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'] ,
  providers: [ FeedService ]
})
export class FeedComponent implements OnInit {

  tweets;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getTweets().subscribe(data =>{
      this.tweets = data.json();
    })
  }

  handleLikedTweetFromChildComponet(tweet){
  }
}

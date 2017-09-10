import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

     tweets  = [

      {
      user: "Stevie",
      name: "Stevie Feliciano",
      body: "is a library scientist living " +
      "in New York City. She likes to spend her time reading, " +
      "running, and writing.",
      likes: ['stevie'],
      avatar: "../../assets/avatar/stevie.jpg"
    },

      {
          user: "Veronika",
          name: "Veronika Ossi",
          body: "is a set designer living in New York who enjoys kittens, music, and partying.",
          likes: ['jenny', 'stevie', 'Veronika'],
          avatar: "../../assets/avatar/veronika.jpg"
      },

      {
          user: "Jenny",
          name: "Jenny Hess",
          body: " is a student studying Media Management at the New School.",
          likes: [],
          avatar: "../../assets/avatar/jenny.jpg"
      }

  ];

  LikedTweet = undefined;
  currentUser = 'Stevie';

  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChildComponet(tweet){

    var index = this.tweets.findIndex(currTweet => {
      return currTweet.user == tweet.user;
    })

      this.tweets[index].likes.push(this.currentUser);
      console.log(this.tweets[index].likes);

  }

  isRetweetedByUser(){

  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
<<<<<<< HEAD
import { TweetComponent } from './tweet/tweet.component';
=======
import { LinksCssComponent } from './links-css/links-css.component';
>>>>>>> parent of 9d3ae49... Component tweet

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
<<<<<<< HEAD
    TweetComponent
=======
    LinksCssComponent
>>>>>>> parent of 9d3ae49... Component tweet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

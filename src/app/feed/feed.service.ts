import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import {Observable } from 'rxjs';


@Injectable()
export class FeedService {

  url = 'http://localhost:3000/tweets'

  constructor(private http: Http) { }

  getTweets() : Observable<Response>{
  	return this.http.get(this.url);
  }

}

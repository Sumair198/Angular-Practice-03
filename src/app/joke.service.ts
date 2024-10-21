import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http : HttpClient) { }

  getJoke(): any
  {
    let url = 'https://api.chucknorris.io/jokes/random?category=dev'
    return this.http.get(url)
  }
}

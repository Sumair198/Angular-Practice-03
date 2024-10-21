import { Component } from '@angular/core';
import { JokeService } from '../joke.service'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  joke = 'loading..'
  constructor(private jokes: JokeService) { }

  ngOnInit()
  {
    this.jokeBtn()
  }
  jokeBtn()
  {
    this.jokes.getJoke().subscribe((data: any) => {
      console.log(data.value)
      this.joke = data.value
    })
  }

}

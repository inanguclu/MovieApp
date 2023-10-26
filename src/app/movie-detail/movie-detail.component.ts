import { Component,OnInit,Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie:Movie=new Movie();

  constructor(){

  }
  ngOnInıt(){

  }
}

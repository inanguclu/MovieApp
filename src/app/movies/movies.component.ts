import { Component } from "@angular/core";
import { Movies } from "../movie.datasource"
import { Movie } from "../movie";

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {
    title = 'Movie List'
    movies = Movies;
    selectedMovie: Movie = new Movie();


    onSelect(movie: Movie): void {
        this.selectedMovie = movie;

    }
    


}
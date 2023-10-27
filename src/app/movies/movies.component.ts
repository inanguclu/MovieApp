import { Component } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "../movie";

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {
    title = 'Movie List'
    movies: Movie[] = [];


    selectedMovie: Movie = new Movie();


    constructor(private movieService: MovieService) {


    }

    ngOnInit(): void {
        this.getMovies();
    }


    onSelect(movie: Movie): void {
        this.selectedMovie = movie;

    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            });


    }



}
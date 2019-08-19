import { Injectable } from '@angular/core';

import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private movieService: MovieService) {}

  getMovies() {

  }

  addMovies(movie: Movie) {
    this.movieService.movies.push(movie);
  }

  deleteMovie(movieTitle) {
    const deletedMovie = this.movieService.movies.filter((movie) => movie.title === movieTitle)[0];
    const deletedIndex = this.movieService.movies.indexOf(deletedMovie);
    this.movieService.movies.splice(deletedIndex, 1);

  }
}

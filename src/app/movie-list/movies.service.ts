import { Injectable } from '@angular/core';

import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private movieService: MovieService) {}

  getMovies() {
    return this.movieService.movies.slice();
  }

  addMovies(movie: Movie) {
    this.movieService.movies.push(movie);
    this.movieService.moviesChanged.next(this.movieService.movies.slice());
  }

  deleteMovie(movieTitle) {
    const deletedMovie = this.movieService.movies.filter((movie) => movie.title === movieTitle)[0];
    const deletedIndex = this.movieService.movies.indexOf(deletedMovie);
    this.movieService.movies.splice(deletedIndex, 1);
    this.movieService.moviesChanged.next(this.movieService.movies.slice());
  }
}

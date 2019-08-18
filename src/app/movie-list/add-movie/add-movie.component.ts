import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass']
})
export class AddMovieComponent {
  newMovie: Movie = {
    title: '',
    year: null,
    rating: null
  };

  constructor(public moviesService: MoviesService) {}

  validateForm() {
    return (this.newMovie.title && this.newMovie.year && this.newMovie.rating);
  }

  onSave() {
    this.moviesService.addMovies(this.newMovie);
  }
}

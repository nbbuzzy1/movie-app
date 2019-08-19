import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.sass']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie;
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
  }

  onDeleteMovie() {
    this.moviesService.deleteMovie(this.movie.title);
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MoviesService } from './movies.service';
import { Movie } from './movie.model';
import { Subscription } from 'rxjs';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  private subscription: Subscription;
  @ViewChild('sort', { static: false }) sort: ElementRef;
  modifiedSort = 'title';
  filterText = '';

  constructor(public moviesService: MoviesService,
              public movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    this.subscription = this.movieService.moviesChanged
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
      });
  }

  setSortFilter() {
    this.modifiedSort = this.sort.nativeElement.value;
  }

}

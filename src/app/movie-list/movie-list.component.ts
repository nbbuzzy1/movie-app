import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  movies = this.movieService.movies;
  @ViewChild('sort', { static: false }) sort: ElementRef;
  modifiedSort = 'title';

  constructor(public movieService: MovieService) { }

  ngOnInit() {
  }

  setSortFilter() {
    this.modifiedSort = this.sort.nativeElement.value;
  }

}

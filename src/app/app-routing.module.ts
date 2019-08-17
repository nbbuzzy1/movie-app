import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMovieComponent } from './movie-list/add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const appRoutes: Routes =[
  { path: '', component: MovieListComponent },
  { path: 'add-movie', component: AddMovieComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

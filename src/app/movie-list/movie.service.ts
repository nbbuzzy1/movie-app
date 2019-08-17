import { Injectable } from '@angular/core';

import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {
      title: 'The Godfather',
      year: 1972,
      rating: 100
    },
    {
      title: 'The Godfather Part II',
      year: 1974,
      rating: 99
    },
    {
      title: 'The Godfather Part III',
      year: 1990,
      rating: 95
    },
    {
      title: 'Star Wars: A New Hope',
      year: 1977,
      rating: 95
    },
    {
      title: 'The Empire Strikes Back',
      year: 1980,
      rating: 97
    },
    {
      title: 'Return of the Jedi',
      year: 1983,
      rating: 96
    },
    {
      title: 'The Phantom Menace',
      year: 1999,
      rating: 80
    },
    {
      title: 'Attack of the Clones',
      year: 2002,
      rating: 83
    },
    {
      title: 'Revenge of the Sith',
      year: 2005,
      rating: 93
    },
    {
      title: '300',
      year: 2006,
      rating: 92
    },
    {
      title: 'The Hobbit: An Unexpected Journey',
      year: 2012,
      rating: 94
    },
    {
      title: 'Warrior',
      year: 2011,
      rating: 98
    },
    {
      title: 'Rush',
      year: 2013,
      rating: 91
    },
    {
      title: 'Inception',
      year: 2010,
      rating: 94
    },
    {
      title: 'Gladiator',
      year: 2000,
      rating: 96
    },
    {
      title: 'Troy',
      year: 2007,
      rating: 97
    },
    {
      title: 'Minions',
      year: 2014,
      rating: 88
    },
    {
      title: 'The Place Beyond the Pines',
      year: 2013,
      rating: 86
    },
    {
      title: 'Wonder Woman',
      year: 2017,
      rating: 93
    },
    {
      title: 'The Amazing Spiderman',
      year: 2012,
      rating: 90
    },
    {
      title: 'Drive',
      year: 2011,
      rating: 97
    },
    {
      title: 'Batman v. Superman Ultimate Edition',
      year: 2016,
      rating: 98
    },
    {
      title: 'Man of Steel',
      year: 2013,
      rating: 90
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      rating: 92
    },
    {
      title: 'Mission Impossible: Ghost Protocol',
      year: 2011,
      rating: 91
    },
    {
      title: 'The Hobbit: The Desolation of Smaug',
      year: 2013,
      rating: 89
    },
    {
      title: 'The Secret Life of Pets',
      year: 2015,
      rating: 85
    },
  ];
}

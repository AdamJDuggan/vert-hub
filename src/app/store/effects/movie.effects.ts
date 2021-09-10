import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess,
  getMoviesFailed,
} from '../actions/movie.action';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      mergeMap(() =>
        this.MovieService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(async (err) => getMoviesFailed(err))
        )
      )
    )
  );

  // addMovie$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(addMovies),
  //     tap((movie) => console.log(movie)),
  //     concatMap(({ movie }) =>
  //       this.MovieService.addMovies(movie).pipe(
  //         map((newMovie) => addMoviesSuccess(newMovie)),
  //         catchError(() => EmptyError)
  //       )
  //     )
  //   )
  // );

  constructor(private action$: Actions, private MovieService: MovieService) {}
}

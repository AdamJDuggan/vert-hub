import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { getMovies, getMoviesSuccess } from '../actions/movie.action';
import { pending, resolved, error } from '../actions/async.actions';
import { AppState } from 'src/app/models/app-state';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getMovies),
      mergeMap(() => {
        this.store.dispatch(pending('movie/load'));
        return this.MovieService.getMovies().pipe(
          map((movies) => {
            this.store.dispatch(resolved('movie/load'));
            return getMoviesSuccess(movies);
          }),
          catchError((err) =>
            of(
              error({
                type: 'movie/load',
                message: `Error loading movies: ${err.statusText}`,
              })
            )
          )
        );
      })
    );
  });

  constructor(
    private store: Store<AppState>,
    private action$: Actions,
    private MovieService: MovieService
  ) {}
}

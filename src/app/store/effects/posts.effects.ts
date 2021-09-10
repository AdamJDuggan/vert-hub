import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess,
} from '../actions/movie.action';

@Injectable()
export class PostsEffects {
  constructor(private action$: Actions, private postsService: PostsService) {}
}

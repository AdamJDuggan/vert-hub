import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MovieState } from '../../store/reducers/movie.reducer';
import { greater } from '../../store/selectors/movie.selector';
import { getMovies } from '../../store/actions/movie.action';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  movies$ = this.store.pipe(select(greater(1000)));

  constructor(private store: Store<MovieState>) {}

  ngOnInit(): void {
    this.store.dispatch(getMovies());
  }
}

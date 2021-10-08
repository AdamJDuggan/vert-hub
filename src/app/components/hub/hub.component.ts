// Angualr
import { Component, OnInit } from '@angular/core';
// State
import { Store } from '@ngrx/store';
// Models
import { AppState } from 'src/app/models/app-state';
import { AsyncService } from 'src/app/services/async.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
})
export class HubComponent implements OnInit {
  count$: any;
  user$: any;
  constructor(
    private store: Store<AppState>,
    private postsService: PostsService,
    private asyncService: AsyncService
  ) {
    store.select('count').subscribe((count) => (this.count$ = count));
    store.select('auth').subscribe((user) => (this.user$ = user));
  }
  increment(payload: number) {
    console.log(this.increment);
  }

  ngOnInit(): void {
    this.postsService.getPosts();
  }
}

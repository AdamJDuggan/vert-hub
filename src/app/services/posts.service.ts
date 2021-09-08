import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/movie.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'api/movies/';
  constructor(private afs: AngularFirestore, private http: HttpClient) {}

  // getPosts(): Observable<ReadonlyArray<Post>> {
  //   return this.http.get<ReadonlyArray<Post>>(this.url).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   );
  // }
  // getPosts(): Observable<ReadonlyArray<Post>> {}
}

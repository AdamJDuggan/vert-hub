import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //emit error
  //source = throwError('This is an error!');
  // source = this.afs.collection('1posts').valueChanges();
  // //gracefully handle error, returning observable with error message
  // example = this.source.pipe(catchError((val) => of(`I caught: ${val}`)));
  // //output: 'I caught: This is an error'
  // subscribe = this.example.subscribe((posts) =>
  //   posts.length ? posts : throwError('ERROR!')
  //);
  constructor(private afs: AngularFirestore) {}

  getPosts = async () => {
    this.afs
      .collection('posts')
      .valueChanges()
      .subscribe((posts) => (posts.length ? posts : throwError('My error')));
  };
}

import { Error } from './error.model';

export interface Async {
  errors: Error[];
  pending: [];
}

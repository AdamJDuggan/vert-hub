// Ngrx
import { createAction } from '@ngrx/store';

const NAME = 'async';

export const pending = createAction(`${NAME}/pending`, (payload: string) => ({
  payload,
}));
export const resolved = createAction(`${NAME}/resolved`, (payload: string) => ({
  payload,
}));
export const error = createAction(`${NAME}/error`, (payload: any) => ({
  payload,
}));
export const clearErrors = createAction(`${NAME}/clearErrors`);

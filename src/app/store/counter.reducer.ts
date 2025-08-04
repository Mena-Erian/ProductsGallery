import { createReducer, on } from '@ngrx/store';
import { increaseCounter } from './counter.action';

const initCounter = 0;

export const counterReducer = createReducer(
  initCounter,
  on(increaseCounter, (state) => state + 1)
);

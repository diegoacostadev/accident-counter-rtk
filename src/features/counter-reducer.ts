import { createAction } from '@reduxjs/toolkit';

type CounterState = { count: number };

const increment = createAction('INCREMENT', (num: number) => ({
  payload: num
}));

const decrement = createAction('DECREMENT', (num: number) => ({
  payload: num
}));

const reset = createAction('RESET');

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === increment.type) {
    return { count: state.count + action.payload };
  }

  if (action.type === decrement.type) {
    return { count: state.count - action.payload };
  }

  if (action.type === reset.type) {
    return { count: 0, };
  }

  return state;
};

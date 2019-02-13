import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type gameStateType = {
  +player: object,
  +points: number,
  +playerType: string
};

export type Action = {
  +type: string
};

export type GetState = () => gameStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gameReducer from './game';

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, game: gameReducer })
  );
}

// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import type { Action } from './types';

export default function game(
  state: object = initialState.game,
  action: Action
) {
  const newPlayer = Object.assign({}, action.player);
  const newPoints = parseInt(action.points, 10);
  const turn = parseInt(action.turn, 10);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case types.SET_POINTS:
      if (Number.isInteger(newPoints) && newPoints >= 0) {
        newPlayer[action.pointType] = newPoints;
      }
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_CARD:
      newPlayer[action.cardType] = !newPlayer[action.cardType];
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_PLAYER_NAME:
      newPlayer.name = action.name;
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_TURN:
      if (Number.isInteger(turn) && turn > 0) {
        newState.turn = turn;
      }
      return newState;
    case types.INCREMENT_TURN:
      if (newState.turn > 0) {
        newState.turn += 1;
      }
      return newState;
    case types.INCREMENT_POINTS:
      newPlayer[action.pointType] += 1;
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.DECREMENT_POINTS:
      if (newPlayer[action.pointType] > 0) {
        newPlayer[action.pointType] -= 1;
      }
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    default:
      return state;
  }
}

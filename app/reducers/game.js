// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import type { Action } from './types';

export default function game(
  state: object = initialState.game,
  action: Action
) {
  const newPlayer = Object.assign({}, action.player);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case types.SET_COMMAND_POINTS:
      newPlayer.commandPoints += parseInt(action.points, 10);
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_VICTORY_POINTS:
      newPlayer.victoryPoints += parseInt(action.points, 10);
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_LINE_BREAKER:
      newPlayer.isLineBreaker = !newPlayer.isLineBreaker;
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_WARLORD:
      newPlayer.isWarlord = !newPlayer.isWarlord;
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.SET_FIRST_BLOOD:
      newPlayer.isFirstBlood = !newPlayer.isFirstBlood;
      return {
        ...state,
        [action.playerType]: newPlayer
      };
    case types.INCREMENT_TURN:
      newState.turn += 1;
      return newState;
    case types.CHANGE_INPUT:
      newState.addPoints[action.pointType] = action.points;
      return {
        ...state,
        [action.pointType]: newState
      };
    default:
      return state;
  }
}

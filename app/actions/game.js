// @flow
import * as types from './actionTypes';

export function setPoints(pointType, playerType, player, points) {
  return {
    type: types.SET_POINTS,
    pointType,
    playerType,
    player,
    points
  };
}

export function setCard(cardType, playerType, player) {
  return {
    type: types.SET_CARD,
    cardType,
    playerType,
    player
  };
}

export function setTurn(turn) {
  return {
    type: types.SET_TURN,
    turn
  };
}

export function setPlayerName(player, playerType, name) {
  return {
    type: types.SET_PLAYER_NAME,
    player,
    playerType,
    name
  };
}

export function incrementTurn() {
  return {
    type: types.INCREMENT_TURN
  };
}

export function incrementPoints(pointType, playerType, player) {
  return {
    type: types.INCREMENT_POINTS,
    pointType,
    playerType,
    player
  };
}

export function decrementPoints(pointType, playerType, player) {
  return {
    type: types.DECREMENT_POINTS,
    pointType,
    playerType,
    player
  };
}

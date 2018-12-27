// @flow
import * as types from './actionTypes';

export function setCommandPoints(playerType, player, points) {
  return {
    type: types.SET_COMMAND_POINTS,
    playerType,
    player,
    points
  };
}

export function setVictoryPoints(playerType, player, points) {
  return {
    type: types.SET_VICTORY_POINTS,
    playerType,
    player,
    points
  };
}

export function setLineBreaker(playerType, player) {
  return {
    type: types.SET_LINE_BREAKER,
    playerType,
    player
  };
}

export function setWarlord(playerType, player) {
  return {
    type: types.SET_WARLORD,
    playerType,
    player
  };
}

export function setFirstBlood(playerType, player) {
  return {
    type: types.SET_FIRST_BLOOD,
    playerType,
    player
  };
}

export function incrementTurn() {
  return {
    type: types.INCREMENT_TURN
  };
}

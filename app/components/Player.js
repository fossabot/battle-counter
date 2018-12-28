// @flow
import React, { Component } from 'react';
import { Container, Row, ButtonGroup } from 'reactstrap';
import styles from './Player.css';
import Points from './Points';
import { COMMAND_POINT, VICTORY_POINT } from '../constants/PointType';
import TooltipItem from './TooltipItem';
import {
  FIRST_BLOOD_CARD,
  LINE_BREAKER_CARD,
  WARLORD_CARD
} from '../constants/CardType';

type Props = {
  player: {
    commandPoints: number,
    victoryPoints: number,
    isLineBreaker: boolean,
    isWarlord: boolean,
    isFirstBlood: boolean
  },
  enemy: {
    isLineBreaker: boolean,
    isWarlord: boolean,
    isFirstBlood: boolean
  },
  playerType: string,
  actions: {
    setPoints: (
      pointType: string,
      playerType: string,
      player: object,
      points: number
    ) => void,
    setCard: (cardType: string, playerType: string, player: object) => void,
    incrementPoints: (
      pointType: string,
      playerType: string,
      player: object
    ) => void,
    decrementPoints: (player: object, playerType: string) => void
  }
};

export default class Player extends Component<Props> {
  props: Props;

  textChanged(event, pointType, playerType, player) {
    const { value } = event.target;
    const { actions } = this.props;
    actions.setPoints(pointType, playerType, player, value);
  }

  render() {
    const { player, playerType, actions, enemy } = this.props;
    return (
      <Container fluid>
        <Row className={styles.rowPadding}>
          <Points
            id={playerType + COMMAND_POINT}
            points={player.commandPoints}
            headline="Command Points"
            onChange={event =>
              this.textChanged(event, COMMAND_POINT, playerType, player)
            }
            increment={() =>
              actions.incrementPoints(COMMAND_POINT, playerType, player)
            }
            decrement={() =>
              actions.decrementPoints(COMMAND_POINT, playerType, player)
            }
          />
        </Row>
        <Row className={styles.rowPadding}>
          <ButtonGroup className="w-100" size="lg">
            <TooltipItem
              id={1 + playerType}
              icon="fas fa-bomb"
              tooltip="Line Breaker"
              placement="top"
              className="w-100"
              onClick={() =>
                actions.setCard(LINE_BREAKER_CARD, playerType, player)
              }
              active={player.isLineBreaker === true}
              disabled={enemy.isLineBreaker}
            />
            <TooltipItem
              id={2 + playerType}
              icon="fas fa-skull-crossbones"
              tooltip="Warlord"
              placement="top"
              className="w-100"
              onClick={() => actions.setCard(WARLORD_CARD, playerType, player)}
              active={player.isWarlord === true}
              disabled={enemy.isWarlord}
            />
            <TooltipItem
              id={3 + playerType}
              icon="fas fa-fist-raised"
              tooltip="First Blood"
              placement="top"
              className="w-100"
              onClick={() =>
                actions.setCard(FIRST_BLOOD_CARD, playerType, player)
              }
              active={player.isFirstBlood === true}
              disabled={enemy.isFirstBlood}
            />
          </ButtonGroup>
        </Row>
        <Row className={styles.rowPadding}>
          <Points
            id={playerType + VICTORY_POINT}
            points={player.victoryPoints}
            headline="Victory Points"
            onChange={event =>
              this.textChanged(event, VICTORY_POINT, playerType, player)
            }
            increment={() =>
              actions.incrementPoints(VICTORY_POINT, playerType, player)
            }
            decrement={() =>
              actions.decrementPoints(VICTORY_POINT, playerType, player)
            }
          />
        </Row>
      </Container>
    );
  }
}

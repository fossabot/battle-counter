// @flow
import React, { Component } from 'react';
import { Container, Row, ButtonGroup, Button } from 'reactstrap';
import styles from './Player.css';
import Points from './Points';
import { COMMAND_POINT, VICTORY_POINT } from '../constants/PointType';

type Props = {
  player: {
    commandPoints: number,
    victoryPoints: number,
    isLineBreaker: boolean,
    isWarlord: boolean,
    isFirstBlood: boolean
  },
  addPoints: {
    victoryPoints: number,
    commandPoints: number
  },
  playerType: string,
  actions: {
    setCommandPoints: (
      playerType: string,
      player: object,
      points: number
    ) => void,
    setVictoryPoints: (
      playerType: string,
      player: object,
      points: number
    ) => void,
    setLineBreaker: (playerType: string, player: object) => void,
    setWarlord: (playerType: string, player: object) => void,
    setFirstBlood: (playerType: string, player: object) => void,
    changeInput: (points: number, pointType: string) => void
  }
};

export default class Player extends Component<Props> {
  props: Props;

  textChanged(event, pointType) {
    const { value } = event.target;
    const { actions } = this.props;
    actions.changeInput(value, pointType);
  }

  render() {
    const { player, playerType, addPoints, actions } = this.props;
    return (
      <Container fluid>
        <Row className={styles.rowPadding}>
          <Points
            points={player.commandPoints}
            input={addPoints.commandPoints}
            headline="Command Points"
            onChange={event => this.textChanged(event, COMMAND_POINT)}
            add={() =>
              actions.setCommandPoints(
                playerType,
                player,
                addPoints.commandPoints
              )
            }
          />
        </Row>
        <Row className={styles.rowPadding}>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => actions.setLineBreaker(playerType, player)}
              active={player.isLineBreaker === true}
            >
              Line Breaker
            </Button>
            <Button
              color="primary"
              onClick={() => actions.setWarlord(playerType, player)}
              active={player.isWarlord === true}
            >
              Warlord
            </Button>
            <Button
              color="primary"
              onClick={() => actions.setFirstBlood(playerType, player)}
              active={player.isFirstBlood === true}
            >
              First Blood
            </Button>
          </ButtonGroup>
        </Row>
        <Row className={styles.rowPadding}>
          <Points
            points={player.victoryPoints}
            input={addPoints.victoryPoints}
            headline="Victory Points"
            onChange={event => this.textChanged(event, VICTORY_POINT)}
            add={() =>
              actions.setVictoryPoints(
                playerType,
                player,
                addPoints.victoryPoints
              )
            }
          />
        </Row>
      </Container>
    );
  }
}

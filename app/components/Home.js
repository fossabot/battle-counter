// @flow
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Player from './Player';
import { PLAYER_ONE, PLAYER_TWO } from '../constants/PlayerType';
import Game from './Game';

type Props = {
  game: {
    turn: number,
    addPoints: object,
    player1: object,
    player2: object
  },
  actions: object
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { game, actions } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>Player 1</h1>
            <hr className="my-2" />
          </Col>
          <Col>
            <Game turn={game.turn} actions={actions} />
          </Col>
          <Col>
            <h1>Player 2</h1>
            <hr className="my-2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Player
              player={game.player1}
              addPoints={game.addPoints}
              playerType={PLAYER_ONE}
              actions={actions}
            />
          </Col>
          <Col />
          <Col>
            <Player
              player={game.player2}
              addPoints={game.addPoints}
              playerType={PLAYER_TWO}
              actions={actions}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

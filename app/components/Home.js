// @flow
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PLAYER_ONE, PLAYER_TWO } from '../constants/PlayerType';
import Player from './Player';
import Game from './Game';
import PlayerName from './PlayerName';

type Props = {
  game: {
    turn: number,
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
        <Row style={{ margin: '.5rem' }}>
          <Col md="5">
            <PlayerName
              player={game.player1}
              playerType={PLAYER_ONE}
              actions={actions}
            />
          </Col>
          <Col md="2">
            <Game turn={game.turn} actions={actions} />
          </Col>
          <Col md="5">
            <PlayerName
              player={game.player2}
              playerType={PLAYER_TWO}
              actions={actions}
            />
          </Col>
        </Row>
        <Row style={{ margin: '.5rem' }}>
          <Col md="5">
            <Player
              player={game.player1}
              enemy={game.player2}
              playerType={PLAYER_ONE}
              actions={actions}
            />
          </Col>
          <Col md="2" />
          <Col md="5">
            <Player
              player={game.player2}
              enemy={game.player1}
              playerType={PLAYER_TWO}
              actions={actions}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

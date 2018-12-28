// @flow
import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import styles from './Game.css';

type Props = {
  turn: number,
  actions: {
    incrementTurn: () => void
  }
};

export default class Game extends Component<Props> {
  props: Props;

  render() {
    const { turn, actions } = this.props;
    return (
      <Container fluid>
        <Row className={styles.component}>
          <h1>{turn}</h1>
          <hr className="my-2" />
        </Row>
        <Row>
          <Button color="primary" onClick={() => actions.incrementTurn()}>
            Next Round
          </Button>
        </Row>
      </Container>
    );
  }
}

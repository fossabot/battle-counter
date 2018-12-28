// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import styles from './Game.css';
import TooltipItem from './TooltipItem';

type Props = {
  turn: number,
  actions: {
    incrementTurn: () => void,
    setPlayerName: () => void,
    setTurn: () => void
  }
};

export default class Game extends Component<Props> {
  props: Props;

  textChanged(event) {
    const { value } = event.target;
    const { actions } = this.props;
    actions.setTurn(value);
  }

  render() {
    const { turn, actions } = this.props;
    return (
      <Container className={styles.component} fluid>
        <Row>
          <Col>
            <Input
              type="number"
              className={styles.headline}
              value={turn}
              onChange={event => this.textChanged(event)}
            />
            <hr className="my-2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TooltipItem
              id={1}
              icon="fas fa-plus"
              tooltip="Next turn"
              placement="top"
              onClick={() => actions.incrementTurn()}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

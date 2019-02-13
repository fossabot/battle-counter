// @flow
import React, { Component } from 'react';
import { Container, Row, Input, ButtonGroup, Button, Col } from 'reactstrap';
import styles from './Points.css';

type Props = {
  points: number,
  headline: string,
  onChange: () => void,
  increment: () => void,
  decrement: () => void
};

export default class Points extends Component<Props> {
  props: Props;

  render() {
    const { points, headline, onChange, increment, decrement } = this.props;
    return (
      <Container fluid>
        <Row style={{ margin: '.5rem' }}>
          <Col sm="4" md="6">
            <h3 className="text-wrap">{headline}</h3>
          </Col>
          <Col sm="2" md="4">
            <Input
              type="number"
              className={styles.input}
              value={points}
              onChange={onChange}
            />
          </Col>
          <Col md="2">
            <ButtonGroup>
              <Button color="success" onClick={increment}>
                <i className="fas fa-plus" />
              </Button>
              <Button color="danger" onClick={decrement}>
                <i className="fas fa-minus" />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

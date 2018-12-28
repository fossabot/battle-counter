// @flow
import React, { Component } from 'react';
import {
  Container,
  Row,
  Button,
  Input,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';

type Props = {
  points: number,
  input: string,
  headline: string,
  onChange: () => void,
  add: () => void
};

export default class Points extends Component<Props> {
  props: Props;

  render() {
    const { points, input, headline, onChange, add } = this.props;
    return (
      <Container fluid>
        <Row>
          <h3>{headline}</h3>
          <hr className="my-2" />
          <h3>{points}</h3>
          <InputGroup>
            <Input
              type="number"
              value={input}
              placeholder="points"
              onChange={onChange}
            />
            <InputGroupAddon addonType="prepend">
              <Button color="primary" onClick={add}>
                Add
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Row>
      </Container>
    );
  }
}

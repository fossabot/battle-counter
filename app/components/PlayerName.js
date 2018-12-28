// @flow
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import styles from './PlayerName.css';

type Props = {
  player: object,
  playerType: string,
  actions: {
    setPlayerName: (player: object, playerType: string, name: string) => void
  }
};

export default class PlayerName extends Component<Props> {
  props: Props;

  textChanged(event) {
    const { value } = event.target;
    const { actions, playerType, player } = this.props;
    actions.setPlayerName(player, playerType, value);
  }

  render() {
    const { player } = this.props;
    return (
      <div>
        <Input
          type="text"
          className={styles.headline}
          value={player.name}
          onChange={event => this.textChanged(event)}
        />
        <hr className="my-2" />
      </div>
    );
  }
}

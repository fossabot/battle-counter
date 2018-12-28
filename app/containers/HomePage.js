// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as GameAction from '../actions/game';

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(GameAction, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

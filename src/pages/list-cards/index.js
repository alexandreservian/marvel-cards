import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/list-card';
import ListCards from './component';

const mapStateToProps = state => ({
  cards: selectors.getAllListCards(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchCards: actions.searchCards
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListCards);

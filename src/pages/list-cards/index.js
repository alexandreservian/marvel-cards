import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/list-card';
import ListCards from './component';

const mapStateToProps = state => ({
  cards: selectors.getAllListCards(state),
  totalPages: selectors.getTotalPages(state),
  loading: selectors.getLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchCards: actions.searchCards({ limit: 23 })
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListCards);

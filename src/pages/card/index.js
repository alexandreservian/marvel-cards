import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/card';
import Card from './component';

const mapStateToProps = state => ({
  card: selectors.getCard(state),
  loadingDescription: selectors.getLoadingDescription(state),
  comics: selectors.getAllComics(state),
  events: selectors.getAllEvents(state),
  series: selectors.getAllSeries(state),
  hasMoreComics: selectors.hasMoreComics(state, 6),
  hasMoreEvents: selectors.hasMoreEvents(state, 6),
  hasMoreSeries: selectors.hasMoreSeries(state, 6)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchCard: actions.searchCard,
      resetCard: actions.resetCard
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Card);

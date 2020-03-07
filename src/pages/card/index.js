import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/card';
import Card from './component';

const mapStateToProps = state => ({
  card: selectors.getCard(state),
  loadingDescription: selectors.getLoadingCollection(state, { collection: 'description' }),
  comics: selectors.getAllCollection(state, { collection: 'comics' }),
  events: selectors.getAllCollection(state, { collection: 'events' }),
  series: selectors.getAllCollection(state, { collection: 'series' }),
  hasMoreComics: selectors.hasMoreCollection(state, { collection: 'comics', limit: 6 }),
  hasMoreEvents: selectors.hasMoreCollection(state, { collection: 'events', limit: 6 }),
  hasMoreSeries: selectors.hasMoreCollection(state, { collection: 'series', limit: 6 })
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

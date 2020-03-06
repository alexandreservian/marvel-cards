import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/card';
import Card from './component';

const mapStateToProps = state => ({
  card: selectors.getCard(state),
  loadingDescription: selectors.getLoadingDescription(state),
  comics: selectors.getAllComics(state),
  events: selectors.getAllEvents(state),
  series: selectors.getAllSeries(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchCard: actions.searchCard
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Card);

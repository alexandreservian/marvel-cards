import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/card';
import Page from './component';

const mapStateToProps = state => ({
  data: selectors.getAllCollection(state, { collection: 'events' }),
  totalPages: selectors.getTotalPagesCollection(state, { collection: 'events' }),
  loading: selectors.getLoadingCollection(state, { collection: 'events' })
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search: actions.searchEvents({ limit: 30 }),
      reset: actions.resetEvents
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Page);

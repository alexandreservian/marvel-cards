import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/card';
import Page from './component';

const mapStateToProps = state => ({
  data: selectors.getAllCollection(state, { collection: 'series' }),
  totalPages: selectors.getTotalPagesCollection(state, { collection: 'series' }),
  loading: selectors.getLoadingCollection(state, { collection: 'series' })
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search: actions.searchSeries({ limit: 30 }),
      reset: actions.resetSeries
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Page);

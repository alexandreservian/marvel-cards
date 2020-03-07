import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'state/ducks/card';
import Page from './component';

const mapStateToProps = state => ({
  data: selectors.getAllCollection(state, { collection: 'comics' }),
  totalPages: selectors.getTotalPagesCollection(state, { collection: 'comics' }),
  loading: selectors.getLoadingCollection(state, { collection: 'comics' })
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search: actions.searchComics({ limit: 30 }),
      reset: actions.resetComics
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Page);

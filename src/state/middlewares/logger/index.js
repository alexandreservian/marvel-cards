const actionSanitizer = action =>
  action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data
    ? { ...action, data: '<<LONG_BLOB>>' }
    : action;

const logger = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({
        actionSanitizer,
        stateSanitizer: state => (state.data ? { ...state, data: '<<LONG_BLOB>>' } : state)
      })
    : x => x;

export default logger;

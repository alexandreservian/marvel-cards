const noopReducer = state => state;

const requestAction = state => ({ ...state, loading: true, error: null });

const successAction = state => ({ ...state, loading: false, error: null });

const failureAction = (state, { error }) => ({ ...state, loading: false, error: error });

export const withLoadable = session => {
  const actionReducerMap = {
    [`${session}_REQUEST`]: requestAction,
    [`${session}_SUCCESS`]: successAction,
    [`${session}_FAILURE`]: failureAction
  };
  return baseReducer => (state, action) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;
    const newState = reducerFunction(state, action);
    return baseReducer(newState, action);
  };
};

export default withLoadable;

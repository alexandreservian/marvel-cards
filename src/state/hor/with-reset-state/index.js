const withResetState = (resetStateActionType, initialState) => baseReducer => (state, action) => {
  const newState = action.type === resetStateActionType ? { ...initialState } : state;
  return baseReducer(newState, action);
};

export default withResetState;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutersApp from 'routes';
import store from 'state/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutersApp />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

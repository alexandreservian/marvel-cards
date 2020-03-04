import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import RoutersApp from 'routes';
import store from 'state/store';
import theme from 'themes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <RoutersApp />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { QueryParamProvider } from 'use-query-params';
import RoutersApp from 'routes';
import store from 'state/store';
import theme from 'themes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <ThemeProvider theme={theme}>
            <RoutersApp />
          </ThemeProvider>
        </QueryParamProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

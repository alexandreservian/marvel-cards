import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { QueryParamProvider } from 'use-query-params';
import RoutersApp from 'routes';
import store from 'state/store';
import theme from 'themes';

export const App = () => (
  <Provider store={store}>
    <QueryParamProvider ReactRouterRoute={Route}>
      <ThemeProvider theme={theme}>
        <RoutersApp />
      </ThemeProvider>
    </QueryParamProvider>
  </Provider>
);

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWithRouter;

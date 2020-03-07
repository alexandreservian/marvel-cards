import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingBar from 'components/loading-bar';

const ListCards = lazy(() => import('pages/list-cards'));
const Card = lazy(() => import('pages/card'));
const Comics = lazy(() => import('pages/comics'));
const Events = lazy(() => import('pages/events'));
const Series = lazy(() => import('pages/series'));

const RoutersApp = () => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <Switch>
        <Redirect exact from="/" to="/card-list" />
        <Route exact path="/card-list" component={ListCards} />
        <Route exact path="/card-list/:id" component={Card} />
        <Route exact path="/card-list/:id/comics" component={Comics} />
        <Route exact path="/card-list/:id/events" component={Events} />
        <Route exact path="/card-list/:id/series" component={Series} />
      </Switch>
    </Suspense>
  );
};

export default RoutersApp;

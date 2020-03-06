import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingBar from 'components/loading-bar';

const ListCards = lazy(() => import('pages/list-cards'));
const Card = lazy(() => import('pages/card'));

const RoutersApp = () => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <Switch>
        <Redirect exact from="/" to="/card-list" />
        <Route exact path="/card-list" component={ListCards} />
        <Route exact path="/card-list/:id" component={Card} />
        <Route exact path="/card-list/:id/comics" component={Card} />
        <Route exact path="/card-list/:id/events" component={Card} />
        <Route exact path="/card-list/:id/series" component={Card} />
      </Switch>
    </Suspense>
  );
};

export default RoutersApp;

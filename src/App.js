import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, useParams, Switch } from 'react-router-dom';
import "./App.css";

import Header from './components/Header';
import Menu from './components/Menu';

function Child() {
  let { id } = useParams();
  const Component = lazy(() => import(/* webpackChunkName: "[request]" */ `./pages/${id}`).catch(() => import('./components/NotFound')));

  return (
    <>
      <h2 className="title">{id.replace(/-/g, ' ')}</h2>
      <Component />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="grid">
        <Menu />
        <Header />
        <main id="section-example">
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/simple-map" />
              </Route>
              <Route path="/:id" children={<Child />} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
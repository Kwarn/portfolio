import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Layout from './Layout/Layout';
import classes from './App.module.css';

const App = props => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className={classes.App}>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;

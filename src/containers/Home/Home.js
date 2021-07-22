import React, { useEffect } from 'react';
import classes from './Home.module.css';
import Dashboard from '../Dashboard/Dashboard';
import WebFont from 'webfontloader';

const Home = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Teko'],
      },
    });
  }, []);

  return (
    <div className={classes.DashboardWrapper}>
      <Dashboard />
    </div>
  );
};

export default Home;

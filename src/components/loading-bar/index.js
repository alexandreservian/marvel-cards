// @flow
import React, { useEffect } from 'react';
import Nprogress from 'nprogress';
import './nprogress.css';

const LoadingBar = () => {
  useEffect(() => {
    Nprogress.start();
    return () => {
      Nprogress.done();
    };
  });
  return <div />;
};

export default LoadingBar;

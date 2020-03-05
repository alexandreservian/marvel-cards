// @flow
import React, { memo } from 'react';
import visibleComponentHoc from 'components/visible-component-hoc';
import { Content } from './style';

const LoadingPage = (): React.Node => {
  return (
    <Content>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </Content>
  );
};

export default memo(visibleComponentHoc(LoadingPage));

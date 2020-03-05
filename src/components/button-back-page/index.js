// @flow
import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from 'components/icon';
import { Content, Legend } from './style';

const handleOnClick = (history = {}, pathname = '') => () => {
  const { action, push, goBack } = history;
  const regex = /\/\w+$/gi;
  const path = pathname.replace(regex, '');
  return action === 'PUSH' ? goBack() : push(path);
};

const ButtonBackPage = (): React.Node => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <Content onClick={handleOnClick(history, pathname)}>
      <Icon name="chevrons-left" className="icon" />
      <Legend>Back Page</Legend>
    </Content>
  );
};

export default memo(ButtonBackPage);

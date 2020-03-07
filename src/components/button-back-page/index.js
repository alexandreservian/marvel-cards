// @flow
import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from 'components/icon';
import { Content, Legend } from './style';

type Props = {
  onlyPop?: Boolean
};

const handleOnClick = (history = {}, pathname = '', onlyPop = false) => () => {
  const { action, push, goBack } = history;
  const regex = /\/\w+$/gi;
  const path = pathname.replace(regex, '');
  return action === 'POP' ? push(path) : goBack();
};

const ButtonBackPage = ({ onlyPop }: Props): React.Node => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <Content onClick={handleOnClick(history, pathname, onlyPop)}>
      <Icon name="chevrons-left" className="icon" />
      <Legend>Back Page</Legend>
    </Content>
  );
};

ButtonBackPage.defaultProps = {
  onlyPop: false
};

export default memo(ButtonBackPage);

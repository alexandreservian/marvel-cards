//@flow
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/icon';
import visibleComponentHoc from 'components/visible-component-hoc';
import { Content } from './style';

type Props = {
  to: String,
  text: String,
  className?: String
};

const LinkMoreCollection = ({ to, text, className }: Props): React.Node => {
  return (
    <Content className={className}>
      <Link to={to} className="link">
        <span>{text}</span>
        <Icon name="chevrons-right" className="icon" />
      </Link>
    </Content>
  );
};

export default memo(visibleComponentHoc(LinkMoreCollection));

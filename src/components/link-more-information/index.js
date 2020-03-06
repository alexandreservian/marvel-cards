//@flow
import React, { memo } from 'react';
import Icon from 'components/icon';
import visibleComponentHoc from 'components/visible-component-hoc';
import { Content, Link } from './style';

type Props = {
  url: String,
  text: String,
  icon: String,
  className?: String
};

const LinkMoreInformation = ({ url, text, icon, className }: Props): React.Node => {
  return (
    <Content className={className}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Icon name={icon} className="icon" />
        <span>{text}</span>
      </Link>
    </Content>
  );
};

export default memo(visibleComponentHoc(LinkMoreInformation));

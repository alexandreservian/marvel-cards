//@flow
import React, { memo } from 'react';
import Icon from 'components/icon';
import visibleComponentHoc from 'components/visible-component-hoc';
import { Content, Link } from './style';

type Props = {
  url: String,
  text: String,
  icon: String,
  className?: String,
  dataTestid?: String
};

const LinkMoreInformation = ({ url, text, icon, className, dataTestid }: Props): React.Node => {
  return (
    <Content className={className} data-testid={dataTestid}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Icon name={icon} className="icon" />
        <span>{text}</span>
      </Link>
    </Content>
  );
};

export default memo(visibleComponentHoc(LinkMoreInformation));

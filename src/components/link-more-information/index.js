//@flow
import React, { memo } from 'react';
import Icon from 'components/icon';
import visibleComponentHoc from 'components/visible-component-hoc';
import { Content } from './style';

type Props = {
  url: String,
  text: String,
  icon: String
};

const LinkMoreInformation = ({ url, text, icon }: Props): React.Node => {
  return (
    <Content>
      <a href={url} title={text} target="_blank" rel="noopener noreferrer">
        <Icon name={icon} />
        {text}
      </a>
    </Content>
  );
};

export default memo(visibleComponentHoc(LinkMoreInformation));

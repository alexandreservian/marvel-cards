//@flow
import React, { memo } from 'react';
import { Content } from './style';
import urlLogo from 'assets/images/marvel-logo.svg';
type Props = {
  width?: Number
};

const LogoMarvel = ({ width }: Props): React.Node => {
  return (
    <Content width={width}>
      <img src={urlLogo} alt={'logo'} />
    </Content>
  );
};

LogoMarvel.defaultProps = {
  width: 100
};

export default memo(LogoMarvel);

//@flow
import React, { memo } from 'react';
import FadeIn from 'react-lazyload-fadein';
import Hexagon from 'components/hexagon';

type Props = {
  alt: String,
  src: String
};

const ThumbnailPerfil = ({ alt, src }: Props): React.Node => {
  return (
    <Hexagon>
      <FadeIn easing={'ease-out'}>{onload => <img onLoad={onload} src={src} alt={alt} />}</FadeIn>
    </Hexagon>
  );
};

export default memo(ThumbnailPerfil);

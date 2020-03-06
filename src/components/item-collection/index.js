//@flow
import React, { Fragment, memo } from 'react';
import FadeIn from 'react-lazyload-fadein';
import { Content, Link, BoxImage, BoxImageIn, Title } from './style';

type Props = {
  title: String,
  thumbnail: String,
  detail: String
};

const ItemCollection = ({ title, thumbnail, detail }: Props): React.Node => {
  return (
    <Content>
      <Link href={detail} target="_blank" rel="noopener noreferrer">
        <FadeIn easing={'ease-out'}>
          {onload => (
            <Fragment>
              <BoxImage>
                <BoxImageIn>
                  <img onLoad={onload} src={thumbnail} alt={title} className="image" />
                </BoxImageIn>
              </BoxImage>
              <Title>{title}</Title>
            </Fragment>
          )}
        </FadeIn>
      </Link>
    </Content>
  );
};

export default memo(ItemCollection);

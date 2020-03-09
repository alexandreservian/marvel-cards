//@flow
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-lazyload-fadein';
import Hexagon from 'components/hexagon';
import { Content, BoxImage, BoxTitle, Title } from './style';
type Props = {
  id: Number,
  name: String,
  thumbnail: String
};

const Card = ({ id, name, thumbnail }: Props): React.Node => {
  return (
    <Content data-testid="cards">
      <Hexagon>
        <Link to={`../card-list/${id}`} className="link">
          <FadeIn easing={'ease-out'}>
            {onload => (
              <BoxImage>
                <img onLoad={onload} src={thumbnail} alt={name} className="image" />
                <BoxTitle>
                  <Title>{name}</Title>
                </BoxTitle>
              </BoxImage>
            )}
          </FadeIn>
        </Link>
      </Hexagon>
    </Content>
  );
};

export default memo(Card);

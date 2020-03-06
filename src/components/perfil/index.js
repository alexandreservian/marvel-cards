//@flow
import React, { memo } from 'react';
import visibleComponentHoc from 'components/visible-component-hoc';
import LinkMoreInformation from 'components/link-more-information';
import ThumbnailPerfil from 'components/thumbnail-perfil';
import { Content, Box, Title, BoxDescription, BoxLinks } from './style';

type Props = {
  name: String,
  description: String,
  thumbnail: String,
  detail: String,
  wiki: String,
  comiclink: String
};

const Perfil = ({ name, description, thumbnail, detail, wiki, comiclink }: Props): React.Node => {
  return (
    <Content>
      <Box>
        <ThumbnailPerfil src={thumbnail} alt={name} />
      </Box>
      <Box>
        <Title>{name}</Title>
        <BoxDescription>{description}</BoxDescription>
        <BoxLinks>
          <LinkMoreInformation
            url={wiki}
            text="Read more on Wiki"
            icon="plus-circle"
            visible={!!wiki}
          />
          <LinkMoreInformation
            url={detail}
            text="Read more details of comic"
            icon="bookmark"
            visible={!!detail}
          />
        </BoxLinks>
      </Box>
    </Content>
  );
};

export default memo(visibleComponentHoc(Perfil));

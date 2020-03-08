//@flow
import React, { memo } from 'react';
import visibleComponentHoc from 'components/visible-component-hoc';
import LinkMoreInformation from 'components/link-more-information';
import ThumbnailPerfil from 'components/thumbnail-perfil';
import DescriptionPerfil from 'components/description-perfil';
import { Content, BoxImage, Box, Title, BoxLinks } from './style';

type Props = {
  name: String,
  description: String,
  thumbnail: String,
  detail: String,
  wiki: String,
  comiclink: String,
  onSubmit?: Function
};

const Perfil = ({
  name,
  description,
  thumbnail,
  detail,
  wiki,
  comiclink,
  onSubmit
}: Props): React.Node => {
  return (
    <Content>
      <BoxImage>
        <ThumbnailPerfil src={thumbnail} alt={name} />
      </BoxImage>
      <Box>
        <Title>{name}</Title>
        <DescriptionPerfil text={description} onSubmit={onSubmit} />
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

Perfil.defaultProps = {
  onSubmit: () => {}
};

export default memo(visibleComponentHoc(Perfil));

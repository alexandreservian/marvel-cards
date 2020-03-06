import styled from '@emotion/styled';

export const Content = styled.div`
  height: 100%;
`;

export const Link = styled.a`
  display: block;
  heigth: 100%;

  > div {
    height: 100%;
  }

  &:hover {
    .image {
      transform: scale(1.2);
    }
  }
`;

export const BoxImage = styled.div`
  background: ${({ theme }) => theme.colors.bgPagination};
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 345px;
  .image {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
    transition: all 0.2s;
  }
`;

export const BoxImageIn = styled.div``;

export const Title = styled.h3`
  border-left: 5px solid ${({ theme }) => theme.colors.colorIconLink};
  margin: 10px 0 0 0;
  padding: 0 0 0 10px;
  text-transform: none;
`;

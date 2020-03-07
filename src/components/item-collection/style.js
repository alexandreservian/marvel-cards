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
  height: 288px;
  .image {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
    transition: all 0.2s;
  }

  @media (max-width: 1225px) {
    height: 228px;
  }

  @media (max-width: 1040px) {
    height: 462px;
  }

  @media (max-width: 480px) {
    height: 298px;
  }

  @media (max-width: 400px) {
    height: 192px;
  }
`;

export const BoxImageIn = styled.div``;

export const Title = styled.h3`
  border-left: 5px solid ${({ theme }) => theme.colors.colorIconLink};
  margin: 10px 0 0 0;
  padding: 0 0 0 10px;
  text-transform: none;

  @media (max-width: 1225px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

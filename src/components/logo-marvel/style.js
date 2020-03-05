import styled from '@emotion/styled';

export const Content = styled.div`
  width: ${({ width }) => `${width}px;`};
  img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
  }
`;

import styled from '@emotion/styled';

export const Content = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  overflow: hidden;
  width: 90%;

  @media (min-width: 1201px) {
    padding: 0 0 5% 0;
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    padding-bottom: 6%;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    padding-bottom: 7%;
  }

  @media (max-width: 600px) {
    padding: 0 0 10% 0;
  }
`;

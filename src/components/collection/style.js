import styled from '@emotion/styled';

export const Content = styled.div`
  margin: 30px 0 0 0;

  .link-more {
    display: flex;
    margin: 10px 0 0 0;
    justify-content: flex-end;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.4em;
    margin: 0 10px 0 0;
  }
`;

export const Title = styled.h2``;

export const List = styled.ul`
  display: flex;
  margin: 15px 0 0 0;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: 0 5px 30px;
  width: ${100 / 6}%;

  @media (max-width: 1040px) {
    width: ${100 / 3}%;
  }

  @media (max-width: 770px) {
    width: 50%;
  }
`;

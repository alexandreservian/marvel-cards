import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  padding: 50px 0 8% 0;
`;

export const BoxImage = styled.div`
  width: 30%;
`;

export const Box = styled.div`
  padding: 25px 0 0 25px;
  width: 70%;
`;

export const Title = styled.h1`
  border-left: 5px solid ${({ theme }) => theme.colors.second};
  padding: 0 0 0 10px;
`;

export const BoxDescription = styled.div`
  margin: 15px 0 0 0;
  font-size: 1.2em;
`;

export const BoxLinks = styled.div`
  margin: 20px 0 0 0;
`;

import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  padding: 50px 0 8% 0;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const BoxImage = styled.div`
  width: 30%;

  @media (max-width: 770px) {
    width: 40%;
  }

  @media (max-width: 420px) {
    margin: 0 auto;
    padding: 0 0 80px;
    overflow: hidden;
    width: 275px;
  }
`;

export const Box = styled.div`
  padding: 25px 0 0 25px;
  width: 70%;
  @media (max-width: 770px) {
    font-size: 12px;
    width: 60%;
  }
  @media (max-width: 420px) {
    padding: 25px 0 0 0;
    width: 100%;
  }
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

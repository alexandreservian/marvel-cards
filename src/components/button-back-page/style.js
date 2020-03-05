import styled from '@emotion/styled';

export const Content = styled.button`
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 35px;
  margin: 10px 0 0 10px;
  width: 110px;

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 10px 0 0;
  }
`;

export const Legend = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'roboto-medium';
  text-transform: uppercase;
`;

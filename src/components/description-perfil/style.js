import styled from '@emotion/styled';

export const Content = styled.div`
  margin: 15px 0 0 0;
  font-size: 1.2em;
`;

export const ContentIn = styled.div``;

export const Button = styled.button`
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 10px 0 0 auto;
  width: 170px;

  .icon {
    color: ${({ theme }) => theme.colors.colorIconButton};
    font-size: 1.3em;
    margin: 0 5px 0 0;
  }

  span {
    font-family: 'roboto-medium';
  }
`;

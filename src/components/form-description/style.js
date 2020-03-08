import styled from '@emotion/styled';

export const Content = styled.div``;

export const BoxField = styled.div`
  textarea {
    background: ${({ theme }) => theme.colors.primary};
    margin: 10px 0 0 0;
    padding: 5px;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.colorIconButton};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 10px 0 0 0;
  width: 75px;

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3em;
    margin: 0 5px 0 0;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'roboto-medium';
  }
`;

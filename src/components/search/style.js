import styled from '@emotion/styled';

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.bgPagination};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const BoxSearch = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 0 0 0 10px;
  padding: 0 10px;
  width: 300px;

  .icon {
    color: ${({ theme }) => theme.colors.bgPagination};
    font-size: 1.4em;
    margin: 0 5px 0 0;
  }
  .input {
    border: none;
    color: ${({ theme }) => theme.colors.bgPagination};
    font-family: 'roboto-medium';
    font-size: 1em;
  }
`;

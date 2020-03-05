import styled from '@emotion/styled';

export const Content = styled.header`
  background: ${({ theme }) => theme.colors.bgPagination};
  height: 55px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

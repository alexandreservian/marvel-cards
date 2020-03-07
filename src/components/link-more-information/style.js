import styled from '@emotion/styled';

export const Content = styled.div`
  margin: 0 0 5px 0;
  font-size: 15px;

  &:last-child {
    margin: 0;
  }

  span {
    font-family: 'roboto-medium';
  }

  .icon {
    color: ${({ theme }) => theme.colors.colorIconLink};
    margin: 0 5px 0 0;
  }
`;

export const Link = styled.a`
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: 0.3s ease;

  &:after {
    background: ${({ theme }) => theme.colors.colorIconLink};
    content: ' ';
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.11, 0.7, 0, 1);
  }

  &:hover {
    &:after {
      transform: translate3d(0, 0, 0);
    }
  }
`;

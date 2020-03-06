import styled from '@emotion/styled';

export const Content = styled.div`
  &:after {
    content: '';
    display: block;
    padding-bottom: 86.602%;
  }
`;

export const ContentIn = styled.div`
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%;
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transition: all 0.5s;

  * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent;
  }

  > * {
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  }

  img {
    left: -100%;
    right: -100%;
    width: auto;
    height: 100%;
    margin: 0 auto;
  }
`;

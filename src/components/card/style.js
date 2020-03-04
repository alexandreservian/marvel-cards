import styled from '@emotion/styled';

export const Content = styled.li`
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent;
  transition: all 0.5s;
  backface-visibility: hidden;
  will-change: transform;
  transition: all 0.5s;
  &:after {
    content: '';
    display: block;
    padding-bottom: 86.602%;
  }

  @media (min-width: 1201px) {
    width: 20%;

    &:nth-of-type(9n + 6) {
      margin: 0 0 0 10%;
    }
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    width: 25%;
    &:nth-of-type(7n + 5) {
      margin: 0 0 0 12.5%;
    }
  }

  @media (max-width: 900px) and (min-width: 601px) {
    width: 33.333%;
    &:nth-of-type(5n + 4) {
      margin: 0 0 0 16.666%;
    }
  }

  @media (max-width: 600px) {
    width: 50%;
    &:nth-of-type(3n + 3) {
      margin: 0 0 0 25%;
    }
  }
`;

export const ContentIn = styled.div`
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%;
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid;
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transition: all 0.5s;

  * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent;
  }

  .link {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);

    > div {
      left: 0;
      height: 100%;
    }
  }
`;

export const BoxImage = styled.div`
  height: 100%;
  .image {
    left: -100%;
    right: -100%;
    width: auto;
    height: 100%;
    margin: 0 auto;
    -webkit-transform: rotate3d(0, 0, 0, 0deg);
    -ms-transform: rotate3d(0, 0, 0, 0deg);
    transform: rotate3d(0, 0, 0, 0deg);
  }
`;

export const Title = styled.h2``;

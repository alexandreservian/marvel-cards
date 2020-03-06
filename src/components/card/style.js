import styled from '@emotion/styled';

export const Content = styled.li`
  position: relative;
  visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
  transition: all 0.5s;

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

  .link {
    display: block;
    text-align: center;
    color: #fff;

    > div {
      left: 0;
      height: 100%;
      width: 100%;
    }

    &:hover {
      .image {
        transform: scale(1.2);
      }
    }
  }
`;

export const BoxImage = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: 100%;

  .image {
    transform: rotate3d(0, 0, 0, 0deg);
    transition: all 0.2s;
    z-index: 1;
  }
`;

export const BoxTitle = styled.div`
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  height: 120px;
  padding: 10px 0 0 0;
  width: 100%;
  z-index: 2;
  @media (max-width: 1090px) {
    font-size: 12px;
    height: 90px;
  }

  @media (max-width: 700px) {
    font-size: 11px;
    height: 80px;
  }

  @media (max-width: 450px) {
    font-size: 9px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 90%;
`;

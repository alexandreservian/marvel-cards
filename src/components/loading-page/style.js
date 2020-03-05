import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const skCubeGridScaleDelay = keyframes`
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
`;

export const Content = styled.div`
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }

  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background: ${({ theme }) => theme.colors.bgPagination};
    float: left;
    animation: ${skCubeGridScaleDelay} 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube2 {
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube3 {
    animation-delay: 0.4s;
  }
  .sk-cube-grid .sk-cube4 {
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube5 {
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube6 {
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube7 {
    animation-delay: 0s;
  }
  .sk-cube-grid .sk-cube8 {
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube9 {
    animation-delay: 0.2s;
  }
`;

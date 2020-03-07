import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  margin: 15px 0 0 0;
  font-size: 15px;
  justify-content: flex-end;

  span {
    text-transform: uppercase;
    font-family: 'roboto-medium';
  }

  .icon {
    color: ${({ theme }) => theme.colors.colorIconLink};
    display: inline-block;
    margin: 0 5px 0 0;
    position: relative;
    transition: 0.3s ease;
  }

  .link {
    display: inline-block;
    overflow: hidden;
    position: relative;

    &:hover {
      .icon {
        transform: translateX(5px);
      }
    }
  }
`;

import styled from '@emotion/styled';

export const Content = styled.div`
  padding: 50px 0 20px;
  .pagination {
    background: ${({ theme }) => theme.colors.bgPagination};
    align-items: center;
    display: flex;
    height: 50px;
    list-style: none;
    justify-content: center;
    margin: 0 auto;
    padding: 0 10px;
    width: 320px;

    li {
      padding: 0 3px;
    }

    a {
      color: ${({ theme }) => theme.colors.bgBody};
      cursor: pointer;
      height: 30px;
      line-height: 30px;
    }
  }
  .active {
    a {
      font-family: 'roboto-medium';
      font-size: 1.55em;
    }
  }

  .previous,
  .next {
    a {
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }

  .previous {
    margin: 0 auto 0 0;
  }
  .next {
    margin: 0 0 0 auto;
  }

  .disabled-nav-button {
    a,
    span {
      color: ${({ theme }) => theme.colors.disabledNav};
    }
  }

  @media (max-width: 450px) {
    .pagination {
      width: 100%;
    }
  }
`;

export const Legend = styled.span`
  color: ${({ theme }) => theme.colors.bgBody};
  display: block;
  font-size: 0.9em;
  padding: 0 5px;
  text-transform: uppercase;
`;

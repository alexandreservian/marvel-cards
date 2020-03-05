//@flow
import React, { memo } from 'react';
import LogoMarvel from 'components/logo-marvel';
import Icon from 'components/icon';
import { Content, BoxSearch } from './style';

type Props = {
  onSearch?: Function,
  defaultValue?: String
};

const handleOnChange = onSearch => e => {
  const value = e.target.value;
  return onSearch(value);
};

const Search = ({ onSearch, defaultValue }: Props): React.Node => {
  return (
    <Content>
      <LogoMarvel width={95} />
      <BoxSearch>
        <Icon name="search" className="icon" />
        <input
          type="text"
          placeholder="Find your favorite Marvel Hero!"
          className="input"
          defaultValue={defaultValue}
          onChange={handleOnChange(onSearch)}
        />
      </BoxSearch>
    </Content>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  defaultValue: ''
};

export default memo(Search);

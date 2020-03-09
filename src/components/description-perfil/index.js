//@flow
import React, { useState, memo } from 'react';
import Icon from 'components/icon';
import FormDescription from 'components/form-description';
import { Content, ContentIn, Button } from './style';

type Props = {
  text: String,
  onSubmit?: Function
};

const handleOnClick = setActiveForm => () => setActiveForm(true);

const handleOnSubmit = (setActiveForm, onSubmit) => ({ description }) => {
  setActiveForm(false);
  onSubmit(description);
};

const showContent = (text = '') => {
  const hasText = !!text;
  return hasText ? (
    <ContentIn data-testid="description-content">{text}</ContentIn>
  ) : (
    <ContentIn data-testid="description-content">Hero doesn't have description.</ContentIn>
  );
};

const DescriptionPerfil = ({ text, onSubmit }: Props): React.Node => {
  const [activeForm, setActiveForm] = useState(false);
  return (
    <Content>
      {!activeForm && showContent(text)}
      <FormDescription
        description={text}
        onSubmit={handleOnSubmit(setActiveForm, onSubmit)}
        visible={activeForm}
      />
      {!activeForm && (
        <Button
          type="button"
          onClick={handleOnClick(setActiveForm)}
          data-testid="button-change-description"
        >
          <Icon name="edit-3" className="icon" />
          <span>Change Description</span>
        </Button>
      )}
    </Content>
  );
};

DescriptionPerfil.defaultProps = {
  onSubmit: () => {}
};

export default memo(DescriptionPerfil);

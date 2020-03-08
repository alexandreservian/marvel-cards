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

const handleOnSubmit = (setActiveForm, setDescription, onSubmit) => ({ description }) => {
  setActiveForm(false);
  setDescription(description);
  onSubmit(description);
};

const showContent = (text = '') => {
  const hasText = !!text;
  return hasText ? (
    <ContentIn>{text}</ContentIn>
  ) : (
    <ContentIn>Hero doesn't have description.</ContentIn>
  );
};

const DescriptionPerfil = ({ text, onSubmit }: Props): React.Node => {
  const [description, setDescription] = useState(text);
  const [activeForm, setActiveForm] = useState(false);
  return (
    <Content>
      {!activeForm && showContent(description)}
      <FormDescription
        description={description}
        onSubmit={handleOnSubmit(setActiveForm, setDescription, onSubmit)}
        visible={activeForm}
      />
      {!activeForm && (
        <Button type="button" onClick={handleOnClick(setActiveForm)}>
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

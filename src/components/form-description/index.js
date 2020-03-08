import React, { memo } from 'react';
import { withFormik, Form, FastField } from 'formik';
import visibleComponentHoc from 'components/visible-component-hoc';
import Icon from 'components/icon';
import { Content, BoxField, Button } from './style';

const FormDescription = () => {
  return (
    <Content>
      <Form>
        <BoxField>
          <label htmlFor="description">Description:</label>
          <FastField component="textarea" name="description" rows="4" />
        </BoxField>
        <Button type="submit">
          <Icon name="check-circle" className="icon" />
          <span>Save</span>
        </Button>
      </Form>
    </Content>
  );
};

const enhanceWithFormik = withFormik({
  mapPropsToValues: ({ description = '' }) => ({ description }),
  handleSubmit: (values, { props: { onSubmit = () => {} } }) => {
    onSubmit(values);
  }
});

export default enhanceWithFormik(memo(visibleComponentHoc(FormDescription)));

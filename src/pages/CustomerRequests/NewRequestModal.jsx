import * as React from 'react';
import { Button, DatePicker, Input, Modal } from 'antd';
import { withFormik } from 'formik';

import { required } from '../../utils/validator';
import './index.css';

class _NewRequestModal extends React.Component {

  onChangeDate = (field) => (value) => {
    this.props.setFieldValue(field, value);
  }

  render() {
    const {
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      dirty,
      values,
    } = this.props;

    return (
      <Modal
        title="New request"
        visible={this.props.visible}
        footer={null}
        onCancel={this.props.onCancel}
      >
        <div>
          <Input placeholder="Location" name="location" onBlur={handleBlur} onChange={handleChange} value={values.location} />
          <Input placeholder="Description" name="description" className="mt-xxs" onBlur={handleBlur} onChange={handleChange} value={values.description} />
          <DatePicker placeholder="Required date" className="mt-xxs" onChange={this.onChangeDate('requiredDate')} value={values.requiredDate} />
          <DatePicker placeholder="Last date" className="mt-xxs" onChange={this.onChangeDate('lastDate')} value={values.lastDate} />
          <Input placeholder="Supplier" className="mt-xxs" name="supplier" onBlur={handleBlur} onChange={handleChange} value={values.supplier} />
          <div className="text-right">
            <Button type="primary" className="mt-xs" disabled={Object.keys(errors).length || !dirty} onClick={handleSubmit}>Create</Button>
          </div>
        </div>
      </Modal>
    );
  }
}

const NewRequestModal = withFormik({
  mapPropsToValues: props => ({ location: '', description: '', requiredDate: null, lastDate: null, supplier: '' }),
  validate: (values) => {
    const errors = {};

    if(required(values.location)) {
      errors.location = 'Required field';
    }
    if(required(values.requiredDate)) {
      errors.requiredDate = 'Required field';
    }
    if(required(values.lastDate)) {
      errors.lastDate = 'Required field';
    }
    if(required(values.supplier)) {
      errors.supplier = 'Required field';
    }

    return errors;
  },
  handleSubmit: (values, {props, resetForm}) => {
    props.onSubmit(values);
    resetForm();
  }
})(_NewRequestModal);

export default NewRequestModal;

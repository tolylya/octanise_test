import * as React from 'react';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';

import Menu from '../../components/Menu';
import { isEmail, required } from '../../utils/validator';
import './index.css';

class _InviteSupplier extends React.Component {

  render() {
    const {
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      dirty
    } = this.props;

    return (
      <div>
        <Menu current="invite_supplier"/>
        <div className="invite_wrapper mt-l">
          <Input placeholder="Supplier name" name="supplierName" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="First name" name="firstName" className="mt-xxs" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="Last name" className="mt-xxs" name="lastName" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="Email" className="mt-xxs" name="email" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="Phone" className="mt-xxs" name="phone" onBlur={handleBlur} onChange={handleChange} />
          <Button type="primary" className="mt-xs full-width" disabled={Object.keys(errors).length || !dirty} onClick={handleSubmit}>Send invite</Button>
        </div>
      </div>
    );
  }
}

const InviteSupplier = withFormik({
  mapPropsToValues: props => ({ firstName: '', lastName: '', email: '', supplierName: '', phone: '' }),
  validate: (values) => {
    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = 'Incorrect email';
    } else if (required(values.email)) {
      errors.email = 'Required field';
    }
    if (required(values.supplierName)) {
      errors.email = 'Required field';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {

  }
})(_InviteSupplier);

export default InviteSupplier;

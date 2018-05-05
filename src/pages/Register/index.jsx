import * as React from 'react';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';
import { required, isEmail } from '../../utils/validator';

import './index.css';

class _Register extends React.PureComponent {
  render() {
    const {
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      dirty
    } = this.props;
    console.log(this.props);

    return (
      <div className="register_wrapper">
        <Input placeholder="First name" name="firstName" onBlur={handleBlur} onChange={handleChange} />
        <Input placeholder="Last name" className="mt-xxs" name="lastName" onBlur={handleBlur} onChange={handleChange} />
        <Input placeholder="Email" className="mt-xxs" name="email" onBlur={handleBlur} onChange={handleChange} />
        <Input placeholder="Password" type="password" className="mt-xxs" name="password" onBlur={handleBlur} onChange={handleChange} />
        <Input placeholder="Confirm password" type="password" className="mt-xxs" name="confirmPassword" onBlur={handleBlur} onChange={handleChange} />
        <Button type="primary" className="mt-xs full-width" disabled={Object.keys(errors).length || !dirty} onClick={handleSubmit}>Register</Button>
      </div>
    );
  }
}

const Register = withFormik({
  mapPropsToValues: props => ({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }),
  validate: (values) => {
    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = 'Incorrect email';
    } else if (required(values.email)) {
      errors.email = 'Required field';
    }
    if (required(values.password)) {
      errors.password = 'Required field';
    }
    if (required(values.confirmPassword)) {
      errors.confirmPassword = 'Required field';
    }
    if (values.password !== values.confirmPassword) {
      errors.password = 'Error';
      errors.confirmPassword = 'Error';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {

  }
})(_Register);

export default Register;

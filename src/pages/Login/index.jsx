import * as React from 'react';
import { Link } from 'react-router';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';

import { required, isEmail } from '../../utils/validator';
import './index.css';

class _Login extends React.Component {
  render() {
    const {
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      dirty,
    } = this.props;

    return (
      <div className="login_wrapper">
        <Input placeholder="Email" name="email" onBlur={handleBlur} onChange={handleChange} />
        <Input placeholder="Password" type="password" className="mt-xxs" name="password" onBlur={handleBlur} onChange={handleChange} />
        <div className="login_btns">
          <Button type="primary" className="login_btn" disabled={Object.keys(errors).length || !dirty} onClick={handleSubmit}>Login</Button>
          <Link to="/register" className="login_btn">
            <Button type="primary" className="full-width">Register</Button>
          </Link>
        </div>
      </div>
    );
  }
}

const Login = withFormik({
  mapPropsToValues: props => ({ email: '', password: '' }),
  validate: (values) => {
    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = 'Incorrect email';
    } else if (required(values.email)) {
      errors.email = 'Required field';
    }
    if (!required(values.password)) {
      errors.email = 'Required field';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {

  }
})(_Login);

export default Login;
